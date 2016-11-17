This repository is being used to experiment with Angular 2 (e.g., server side rendering with Edge.js in ASP.NET MVC).

![Hello World](images/hello.png?raw=true "Hello World")

# Playground server.ts

https://github.com/angular/universal/blob/master/examples/playground/src/server.ts

This file is interesting, as it seems to have some input markup and seems to output some markup.

# Playground app.node.module.ts

https://github.com/angular/universal/blob/master/examples/playground/src/app.node.module.ts#L74

This seems to be key.
platformDynamicNode comes from Universal, and it has a serializeModule function.
That serializeModule function is what I suspect does the server side rendering.

# Service Side Rendering Article

http://www.syntaxsuccess.com/viewarticle/server-side-rendering-in-angular-2.0

Shows a basic example of rendering a sitemap on the server.

# ASP.NET Core bootstrap-server.ts

https://github.com/MarkPieszak/aspnetcore-angular2-universal/blob/master/Client/bootstrap-server.ts

This actually has some comments and looks relatively simple.
Seems to do the serialization using serializeModule as seen elsewhere.

One question I still have is where the tag helpers are defined (i.e., asp-prerender-module, asp-prerender-webpack-config, asp-prerender-data). These could be useful in figuring out how this repo has managed to call Node.js from C#.

# JavaScript Service Prerenderer Call

https://github.com/aspnet/JavaScriptServices/blob/dev/samples/misc/Webpack/ActionResults/PrerenderResult.cs#L34

This is calling something that is performing a prerender.
I'll want to dig into how that's working in ASP.NET Core so I can possibly port it to .NET 4.5.2.
I'm guessing it's in `Microsoft.AspNetCore.SpaServices.Prerendering`.

# Prerendering.Prerenderer

https://github.com/aspnet/JavaScriptServices/blob/2ba5a0ac930a055acc6e711a701ed43aa993ec8b/src/Microsoft.AspNetCore.SpaServices/Prerendering/Prerenderer.cs

This references a JavaScript file at `/Content/Node/prerenderer.js`.
See if there is a function in that file called `renderToString`.

# Prerenderer.js

https://github.com/aspnet/JavaScriptServices/blob/f79936c10459c5982bf64ac4cc1532019f194596/src/Microsoft.AspNetCore.SpaServices/Content/Node/prerenderer.js#L19

This calls `aspNetPrerendering.renderToString`.
See what that does.

# aspnet-prerendering NPM Module

https://www.npmjs.com/package/aspnet-prerendering

Find the code for this.

# ASP.NET Core Angular 2 Blog Post

http://blog.stevensanderson.com/2016/05/02/angular2-react-knockout-apps-on-aspnet-core/

Has some high level information on how all this works on ASP.NET Core.

This seems like a rabbit hole I could go down for a while.

# NodeServices in ASP.NET MVC 5

https://github.com/aspnet/JavaScriptServices/issues/106

Mentions that NodeServices should be usable in ASP.NET MVC 5.
Perhaps I could use NodeServices to do the prerendering.

# NodeServices Documentation + Code

https://github.com/aspnet/JavaScriptServices/tree/dev/src/Microsoft.AspNetCore.NodeServices#microsoftaspnetcorenodeservices

Seems like the code for NodeServices lives in this repo.

# NodeServices Instantiation

https://github.com/aspnet/JavaScriptServices/tree/dev/src/Microsoft.AspNetCore.NodeServices#for-non-aspnet-apps

This shows how to instantiate NodeServices in a context other than ASP.NET Core.
Just above this is a code snippet that shows how to use it.
Taken together, I suspect it'd look something like this:

```
var services = new ServiceCollection();
services.AddNodeServices(options => {
    // Set any properties that you want on 'options' here
});
var serviceProvider = services.BuildServiceProvider();
var nodeServices = serviceProvider.GetRequiredService<INodeServices>();
var task = nodeServices.InvokeAsync<int>("./addNumbers", 1, 2);
task.Wait();
var result = task.Result;
```

Given this C# example, there would need to be a `addNumbers.js` files like this:

```
module.exports = function (callback, first, second) {
    var result = first + second;
    callback(/* error */ null, result);
};
```

Unsure of advantages of using this over Edge.js.
They seem similar.
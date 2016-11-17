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
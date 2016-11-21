import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';

@Component({
    selector: 'app-home',
    template: `

<h1>Angular2 Universal & ASP.NET Core starter-kit</h1>

<blockquote>
    <strong>Enjoy the latest features from .NET Core & Angular2!</strong>
    <br>
    For more info check the repo here: <a href="https://github.com/MarkPieszak/aspnetcore-angular2-universal">AspNetCore-Angular2-Universal repo</a>

    <br><br>
</blockquote>


<div class="row">
    <div class="col-lg-6">
        <h2>What does this Starter offer? </h2>
        <ul>
            <li>ASP.NET Core 1.0.1</li>
            <li>
                Angular 2.* front-end UI framework
                <ul>
                    <li><a href="https://github.com/angular/universal">Universal</a> - server-side rendering for SEO, deep-linking, and incredible performance.</li>
                    <li>NgRx - Redux architecture</li>
                    <li>HMR State Management - Don't lose your applications state during HMR!</li>
                    <li>AoT (Ahead-of-time) production compilation for even faster prod builds. (UPCOMING)</li>
                </ul>
            </li>
            <li>
                The latest TypeScript 2.* features
                <ul>
                    <li>
                        "Path" support example - create your own custom directory paths to avoid ............. directory diving.<br />
                        Check the <a href="https://github.com/MarkPieszak/aspnetcore-angular2-universal/blob/master/tsconfig.json">tsconfig</a> to see how they are setup.
                    </li>
                </ul>
            </li>
            <li>
                Webpack 2 (current in Beta)
                <ul>
                    <li>TS2 aware path support</li>
                    <li>Hot Module Reloading/Replacement for an amazing dev experience.</li>
                    <li>Tree-shaking (UPCOMING)</li>
                </ul>
            </li>
            <li>Bootstrap (ng2-bootstrap) : Bootstrap capable of being rendered even on the server.</li>
            <li>Unit testing via karma & jasmine.</li>
            <li>e2e testing via protractor.</li>
        </ul>
    </div>

    <div class="col-lg-6">
        <h2>Having issues?</h2>

        <ul>
            <li><strong>Issues with this Starter?</strong> <br>Please post an issue here: <a href="https://github.com/MarkPieszak/aspnetcore-angular2-universal">AspNetCore-Angular2-Universal repo</a><br><br></li>
            <li><strong>Issues with <u>Universal</u> itself?</strong> <br>Please post an issue here: <a href="https://github.com/angular/universal">Angular Universal repo</a></li>
        </ul>
    </div>

</div>
`
})
export class HomeComponent implements OnInit {

    // Use "constructor"s only for dependency injection
    constructor () {}

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit () {

    }
}

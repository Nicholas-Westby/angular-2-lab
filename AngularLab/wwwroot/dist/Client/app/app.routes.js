"use strict";
// Container (aka: "pages") imports
var app_containers_1 = require('app-containers');
exports.ROUTES = [
    // Base route
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Other routes
    { path: 'home', component: app_containers_1.HomeComponent },
    { path: 'bootstrap', component: app_containers_1.BootstrapComponent },
    { path: 'rest-test', component: app_containers_1.RestTestComponent },
    { path: 'login', component: app_containers_1.LoginComponent },
    { path: 'examples', component: app_containers_1.ExamplesComponent },
    {
        // Notice we don't reference the file anywhere else, imports, declarations, anywhere
        // Webpack2 will provide the separate "chunk" due to System.import
        path: 'faq',
        loadChildren: function () { return System.import('../containers/+faq/faq.module').then(function (file) {
            // We use .default here since we use `export default` 
            // in the FAQModule NgModule
            return file.default;
        }); }
    },
    // loadChildren: '../containers/+faq/faq.module#FAQModule' },
    // All else fails - go home
    { path: '**', redirectTo: 'home' }
];
//# sourceMappingURL=app.routes.js.map
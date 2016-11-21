"use strict";
// Container (aka: "pages") imports
var index_1 = require('../containers/index');
exports.ROUTES = [
    // Base route
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Other routes
    { path: 'home', component: index_1.HomeComponent },
    { path: 'bootstrap', component: index_1.BootstrapComponent },
    { path: 'rest-test', component: index_1.RestTestComponent },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'examples', component: index_1.ExamplesComponent },
    // All else fails - go home
    { path: '**', redirectTo: 'home' }
];

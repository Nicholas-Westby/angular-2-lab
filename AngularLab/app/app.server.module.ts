//https://github.com/MarkPieszak/aspnetcore-angular2-universal/blob/a0cb1ac2bf4224b14ea8efd503badf5841ee8a06/Client/app/platform-modules/app.server.module.ts

import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { Store, StoreModule } from '@ngrx/store';
// for AoT we need to manually split universal packages (/browser & /node)
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node';

import { AppCommonModule } from './app.common.module';
import { AppComponent } from './app.component';
// Universal : XHR Cache
import { CacheService } from './universal-cache';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        // "UniversalModule" Must be first import.
        // ** NOTE ** : This automatically imports BrowserModule, HttpModule, and JsonpModule for Browser,
        // and NodeModule, NodeHttpModule etc for the server.
        UniversalModule,

        AppCommonModule
    ],
    providers: [
        // Can be used inside Components within the app to declaritively run code
        // depending on the platform it's in
        { provide: 'isBrowser', useValue: isBrowser },
        { provide: 'isNode', useValue: isNode }
    ]
})
export class AppServerModule {

    constructor(public cache: CacheService) { }

    /** Universal Cache "hook"
     * We need to use the arrow function here to bind the context as this is a gotcha
     * in Universal for now until it's fixed
     */
    universalDoDehydrate = (universalCache) => {
        console.log('universalDoDehydrate ****');
        universalCache[CacheService.KEY] = JSON.stringify(this.cache.dehydrate());
    };

    /** Universal Cache "hook"
     * Clear the cache after it's rendered
     */
    universalAfterDehydrate = () => {
        this.cache.clear();
    };
}
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
/*
// Angular Core Modules
import { NgModule } from '@angular/core';

// Universal imports
import {
    NodeModule,
    NodeHttpModule,
    NodeJsonpModule,
    // Node "platform" (think "platformBrowserDynamic" on the browser)
    platformDynamicNode
} from "@angular/universal";*/
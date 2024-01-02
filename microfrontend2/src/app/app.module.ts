import { Injectable, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule {

  constructor(
    private injector:Injector
  ){}

  ngDoBootstrap(){
    //  The custom-element construction class, which can be registered with
    //  * a browser's `CustomElementRegistry`.
    const element=createCustomElement(AppComponent,{injector:this.injector}); 
    // * Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.
    customElements.define('app-micro-fe',element);
  }


  
 }

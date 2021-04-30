import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchemaIssueComponent } from './schema-issue/schema-issue.component';
import { SchemaOwnModuleModule } from './schema-dependecy-brother/schema-own-module.module';
import {CatSpyModuleModule} from './cat-spy/cat-spy-module.module';

@NgModule({
  declarations: [
    AppComponent,
    SchemaIssueComponent
  ],
  imports: [
    BrowserModule,
    SchemaOwnModuleModule,
    CatSpyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchemaDependencyBrotherComponent} from './schema-dependency-brother.component';



@NgModule({
  declarations: [
    SchemaDependencyBrotherComponent
  ],
  exports: [
    SchemaDependencyBrotherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SchemaOwnModuleModule { }

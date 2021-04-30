import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatSpyComponent} from './cat-spy.component';
import {CatFactService} from './cat-fact.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [CatSpyComponent],
  providers: [CatFactService],
  exports: [
    CatSpyComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class CatSpyModuleModule { }

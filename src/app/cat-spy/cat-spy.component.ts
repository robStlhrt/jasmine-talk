import { Component, OnInit } from '@angular/core';
import {CatFactService} from './cat-fact.service';

@Component({
  selector: 'app-cat-spy',
  templateUrl: './cat-spy.component.html',
  styleUrls: ['./cat-spy.component.sass']
})
export class CatSpyComponent implements OnInit {

  catFactsDisplay: any;

  constructor(private catFactService: CatFactService) { }

  ngOnInit(): void {
    this.getCatFacts();
  }

  private getCatFacts(): void {
    this.catFactService.getCatsFacts().then((catFacts) => {
      console.log('done - request');
      this.catFactsDisplay = catFacts.map((fact) => fact.text);
      console.log('cats');
      console.log(this.catFactsDisplay);
    });
  }
}

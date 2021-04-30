import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema-dependency-brother',
  templateUrl: './schema-dependency-brother.component.html',
  styleUrls: ['./schema-dependency-brother.component.sass']
})
export class SchemaDependencyBrotherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('se inicio el hermano');
  }

}

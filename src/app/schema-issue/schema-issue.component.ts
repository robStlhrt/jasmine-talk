import {Component, OnInit, ViewChild} from '@angular/core';
import {SchemaDependencyBrotherComponent} from '../schema-dependecy-brother/schema-dependency-brother.component';

@Component({
  selector: 'app-schema-issue',
  templateUrl: './schema-issue.component.html',
  styleUrls: ['./schema-issue.component.sass']
})
export class SchemaIssueComponent implements OnInit {
  @ViewChild('brotherComponent', {static: false}) brotherComponentRef: SchemaDependencyBrotherComponent;

  constructor() { }

  ngOnInit(): void {
    console.log('se inicio');
    console.log('ref hermano');
    console.log(this.brotherComponentRef);
  }

}

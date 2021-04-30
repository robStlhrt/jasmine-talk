import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSpyComponent } from '../cat-spy.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CatFactService} from '../cat-fact.service';


const dummyFacts = [{text: 'test fact number 1'}, {text: 'test fact number 2'}];

class FakeCatsFactsSerivce {
  getCatsFacts(): Promise<any> {
    return Promise.resolve(dummyFacts);
  }
}

describe('CatSpyComponentHttpTestingModule', () => {
  let component: CatSpyComponent;
  let fixture: ComponentFixture<CatSpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSpyComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: CatFactService, useClass: FakeCatsFactsSerivce }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

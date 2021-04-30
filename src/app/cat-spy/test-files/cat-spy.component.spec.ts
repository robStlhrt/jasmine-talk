import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSpyComponent } from '../cat-spy.component';
import {HttpClientModule} from '@angular/common/http';
import {CatFactService} from '../cat-fact.service';

describe('CatSpyComponentUsingSpies', () => {
  let component: CatSpyComponent;
  let fixture: ComponentFixture<CatSpyComponent>;
  let catFactsServiceSpy: jasmine.Spy;
  let catFactService: CatFactService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSpyComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSpyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    catFactsServiceSpy = spyOn(TestBed.inject(CatFactService), 'getCatsFacts').and.callFake(() => {
      return Promise.resolve([{text: 'cat spies cats'}]);
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


  it('should have been called once', () => {
    catFactService = TestBed.inject(CatFactService);
    catFactsServiceSpy = spyOn(catFactService, 'getCatsFacts').and.callFake(() => {
      return Promise.resolve([{text: 'cat spies cats'}]);
    });
    fixture.detectChanges();
    expect(catFactService.getCatsFacts).toHaveBeenCalledTimes(1);
  });
});

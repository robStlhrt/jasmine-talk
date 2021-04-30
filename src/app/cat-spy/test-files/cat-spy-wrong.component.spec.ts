import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSpyComponent } from '../cat-spy.component';
import {HttpClientModule} from '@angular/common/http';

describe('CatSpyComponentWrong', () => {
  let component: CatSpyComponent;
  let fixture: ComponentFixture<CatSpyComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

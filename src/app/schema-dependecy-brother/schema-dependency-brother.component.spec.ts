import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDependencyBrotherComponent } from './schema-dependency-brother.component';

describe('SchemaDependencyBrotherComponent', () => {
  let component: SchemaDependencyBrotherComponent;
  let fixture: ComponentFixture<SchemaDependencyBrotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaDependencyBrotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDependencyBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveAllMoviesComponent } from './retrieve-all-movies.component';

describe('RetrieveAllMoviesComponent', () => {
  let component: RetrieveAllMoviesComponent;
  let fixture: ComponentFixture<RetrieveAllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveAllMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

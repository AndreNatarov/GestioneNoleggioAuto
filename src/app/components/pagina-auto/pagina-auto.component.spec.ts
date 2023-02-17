import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAutoComponent } from './pagina-auto.component';

describe('PaginaAutoComponent', () => {
  let component: PaginaAutoComponent;
  let fixture: ComponentFixture<PaginaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

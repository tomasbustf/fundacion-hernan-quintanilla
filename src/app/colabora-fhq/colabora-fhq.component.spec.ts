import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboraFhqComponent } from './colabora-fhq.component';

describe('ColaboraFhqComponent', () => {
  let component: ColaboraFhqComponent;
  let fixture: ComponentFixture<ColaboraFhqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboraFhqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaboraFhqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

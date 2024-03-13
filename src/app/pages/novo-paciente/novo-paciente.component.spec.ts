import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPacienteComponent } from './novo-paciente.component';

describe('NovoPacienteComponent', () => {
  let component: NovoPacienteComponent;
  let fixture: ComponentFixture<NovoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

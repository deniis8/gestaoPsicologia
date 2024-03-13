import { Component } from '@angular/core';
import { PacienteFormComponent } from "../../components/paciente-form/paciente-form.component";

@Component({
    selector: 'app-novo-paciente',
    standalone: true,
    templateUrl: './novo-paciente.component.html',
    styleUrl: './novo-paciente.component.css',
    imports: [PacienteFormComponent]
})
export class NovoPacienteComponent {

}

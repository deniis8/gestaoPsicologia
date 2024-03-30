import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pacientes } from '../../Models/Pacientes';
import { PacientesService } from '../../services/pacientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pacientes: Pacientes[] = [];

  constructor(private pacientesService: PacientesService) {
  }

  ngOnInit(): void {
    console.log("Teste");
    this.pacientesService.getAllPacientes().subscribe((pacientes) => (this.pacientes = pacientes));
  }
  /*
  removerPaciente(id: Number): void {
    console.log("Id: " + id)
    this.pacientesService.excluirPaciente(id).subscribe();
  }*/

}

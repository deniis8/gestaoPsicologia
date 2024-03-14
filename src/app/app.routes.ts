import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { NovoPacienteComponent } from './pages/novo-paciente/novo-paciente.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'novo/paciente', component: NovoPacienteComponent}
];


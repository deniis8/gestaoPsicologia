import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'novo/paciente', component: PacienteFormComponent}
];


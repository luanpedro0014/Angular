import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [ 

{ path: '',redirectTo:'dashboard', pathMatch: 'full'},   //Quando não for digitado nenhuma informação pagina será redirecionado para a principaal(Dashboard)
{path: 'dashboard',component:DashboardComponent},
{path: 'alunos',component:AlunosComponent},
{path: 'perfil',component:PerfilComponent},
{ path: 'professores',component:ProfessoresComponent},


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

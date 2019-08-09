import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'search', component: SimpleFormComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

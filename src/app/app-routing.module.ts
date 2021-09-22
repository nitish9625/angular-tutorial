import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path:'',component: AppComponent},
  {path:'home',component: AppComponent},
  {path: 'about', component: HeroFormComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
export const routingComponent = [HeroFormComponent, ContactComponent]

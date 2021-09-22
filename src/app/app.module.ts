import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectiveComponent } from './directive/directive.component';
import { FormsModule } from '@angular/forms';
import { SqrtPipe } from 'src/new_pipe';
import { TestComponent } from './test/test.component';
import { RoutingModule } from './routing/routing.module';
import { RoutNavComponent } from './rout-nav/rout-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DirectiveComponent,
    SqrtPipe,
    TestComponent,
    routingComponent,
    RoutNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

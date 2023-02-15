import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NavComponent } from './nav/nav.component';
import { SchadenberichteComponent } from './schadenberichte/schadenberichte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ColorDirective } from './color.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SchadenberichteComponent,
    CreateUserComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [Location, UpperCasePipe, ColorDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

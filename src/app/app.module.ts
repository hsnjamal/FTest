import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },

  
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  
  static apiURL = "https://api.raisely.com/v3/";
  static token = "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a";
}

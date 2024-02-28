import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  price=25;
  name="star";
  num=26;
  dt=new Date()
  title="radhe sham";
  obj={
    name:"ram"
  }
}

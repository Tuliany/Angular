import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Class med David';
  isDisabled= true;
  counterValue=0;
  name="";
  value ="";

  onSave() {
    alert('Saved!')
  }
  
  increment() {
   this.counterValue++;
  }

  num: number = 0;

  add(): number {
    return this.num++;
  }

  handleInput(event: { target: { value: string; }; }): any {
    this.value = event.target.value;
  }
}

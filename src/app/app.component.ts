import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  todoArray =[]

  todoAdd(value){this.todoArray.push(value);
  todoDelete(value){this.todoArray.pop};
  console.log(this.todoArray)
  }
}

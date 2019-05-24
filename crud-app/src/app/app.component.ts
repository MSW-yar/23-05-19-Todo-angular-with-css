import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Todo-app";

  todoItems: any;
  lists: Object[] = [];
  selected: any;
  marked: any;
  updateditem: any;
  todo: any;
  checkbox: any
  this: any;

  addingtoList() {
    if (this.todoItems === this.todoItems) {
      this.lists.push({
        items: this.todoItems
      });
    }
    this.todoItems = "";
  }
  delete(e) {
    this.lists.splice(this.lists.indexOf(e), 1);
  }
  edditing(e) {
    this.todo.items(e);
  }
  striking(){
     this.todo.items.style.textDecoration = (this.checkbox.checked)? 'line-through':'normal';
  }
  ngOnInit() {}
}

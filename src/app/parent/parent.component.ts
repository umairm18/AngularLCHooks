import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  isChild = false;
  firstName = "";

  constructor() {
    console.log("Parent Constructor called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit is initialized");
  }

  ngOnChanges() {
    console.log("Parent Onchanges");
  }

  ngDoCheck() {
    console.log("Parent DoCheck");
  }

  toggleChild() {
    console.clear();
    this.isChild = !this.isChild;
  }

}
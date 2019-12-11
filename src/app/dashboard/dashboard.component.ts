import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectForm: FormGroup;
  operation: FormControl;


  constructor(private routerservice: RouterService) { }

  ngOnInit() {
    this.operation = new FormControl('', Validators.required)
    this.selectForm = new FormGroup({
      operation: this.operation
    })
  }

  onSubmit() {
    console.log("Operation: " + this.operation.value);
    if (this.operation.value == "addproduct") {
      this.routerservice.routeToAdd();
    }
    if (this.operation.value == "viewproduct") {
      this.routerservice.routeToView();
    } else {
      this.routerservice.routeToDashboard();
    }
  }
}
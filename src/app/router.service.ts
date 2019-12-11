import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToAdd(){
    this.router.navigate(['addproduct']);
  }
  routeToView(){
    this.router.navigate(['viewproduct']);
  }

}

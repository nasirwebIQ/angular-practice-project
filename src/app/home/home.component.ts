import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // private router = inject(Router)
  // constructor(private router: Router){}
  // navigate(){
  //   this.router.navigate(["/about"]);
  // }
}

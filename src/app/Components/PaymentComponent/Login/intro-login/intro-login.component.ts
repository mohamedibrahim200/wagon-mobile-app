import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-login',
  standalone: true,
  imports: [],
  templateUrl: './intro-login.component.html',
  styleUrl: './intro-login.component.css'
})
export class IntroLoginComponent {
constructor(private router: Router) {}
  navigateToSignIn() {
    this.router.navigate(['/SignIn']);
  }
  navigateToSignup() {
    this.router.navigate(['/Signup']);
  }
}


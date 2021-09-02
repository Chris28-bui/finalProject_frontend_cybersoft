import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  username?: string;
  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthService, private router: Router) { }

  ngOnInit(): void {
    //subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result;
        this.getUserDetails();
        // console.log(this.isAuthenticated);
      }
    );
  }
  getUserDetails() {
    if(this.isAuthenticated){
      //fetch the logged in user details (user's claim)

      //user full name is exposed as a property name
      this.oktaAuthService.getUser().then(
        res => {
          this.username = res.name;
        console.log(this.username);
          this.storage.setItem('username', JSON.stringify(this.username));
        }
      )
    }
  }

  onChange($event: any){
    if($event.value == "3"){
      this.router.navigateByUrl("/payment")
    }
    if ($event.value == "1"){
      this.router.navigateByUrl("/home")
    }
  }

  logout(){
    //Terminates the session with okta and removes current tokens
    this.oktaAuthService.signOut();
  }
}

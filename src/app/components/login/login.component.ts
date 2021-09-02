import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

import myAppConfig from '../../config/my-app-config';/* eslint-disable */
//@ts-ignore
import OktaSignIn from '@okta/okta-signin-widget';
/* eslint-enable */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oktaSignin: any;
  constructor(private oktaAuthService: OktaAuthService) {
    this.oktaSignin = new OktaSignIn({
      logo: '../../assets/img/logo-coral.svg',
      features: {
        registration: true,
      },
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    }
    );
  }

  ngOnInit(): void {
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget'}, //this name should be the same as div tag in login.component.html
      (response: any) => {
        if(response.status === 'SUCCESS'){
          this.oktaAuthService.signInWithRedirect();
        }
      }, 
      (error: any) => {
        throw error;
      }
    );
  }

}

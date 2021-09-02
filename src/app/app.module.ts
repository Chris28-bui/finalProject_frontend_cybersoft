import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { PaymentPageComponent } from './components/payment-page/payment-page.component';

import { CoverComponent } from './components/cover/cover.component';
import { IntroComponent } from './components/intro/intro.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import {  CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular'

import myAppConfig from './config/my-app-config';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
// import { NgScrollbarModule } from 'ngx-scrollbar';
import { CourseService } from './services/course.service';
import { CourseCarouselComponent } from './components/course-carousel/course-carousel.component';
import { CourseCategoryComponent } from './components/course-category/course-category.component';
import { CourseCategoryPageComponent } from './components/course-category-page/course-category-page.component';
import { SearchComponent } from './components/search/search.component';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth: OktaAuthGuard, injector: { get: (arg0: typeof Router) => any; }) => {
    const router = injector.get(Router);

    //redirect the user to custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  {path: 'search/:name', component: CourseCategoryPageComponent},
  {path: 'course-category/:name', component: CourseCategoryPageComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'course-detail/:id', component: DetailPageComponent},
  {path: 'payment', component: PaymentPageComponent, canActivate: [OktaAuthGuard]},
  {path: 'home', component: HomePageComponent},
  //empty path
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  //wildcard, if does not match any
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PaymentPageComponent,
    CoverComponent,
    IntroComponent,
    JobsComponent,
    FooterComponent,
    LoginComponent,
    LoginStatusComponent,
    CartDetailsComponent,
    CarouselComponent,
    DetailPageComponent,
    CourseCarouselComponent,
    CourseCategoryComponent,
    CourseCategoryPageComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    ExperimentalScrollingModule,
    HttpClientModule,
    OktaAuthModule,
    CarouselModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    // NgScrollbarModule,
    HttpClientModule,
  ],
  providers: [CourseService, {provide: OKTA_CONFIG, useValue: oktaConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
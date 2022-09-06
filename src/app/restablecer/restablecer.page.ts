import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  isCaptchaValid = false;

  constructor() { }

  ngOnInit() {
  }

  get siteKey(){
    return environment.recaptcha.siteKey;
  }
  
  captchaResolved(ev){
    console.log("captcha resolved", ev);
    this.isCaptchaValid = true;
    
  }


}

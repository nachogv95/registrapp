import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})

export class RestablecerPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  message = '¿Eres un robot?🤖';
  name: string;
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `El link para restablecer tu contraseña a sido enviado a, ${ev.detail.data}.`;
    }
  }

  

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
    if (this.isCaptchaValid = true) {
        document.getElementById("open-modal").style.visibility = "visible";

    }
    
  }
  
  


}

import { Component } from '@angular/core';
import { faMoneyBill, faInfoCircle, faNotesMedical, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  subscribe = faNotesMedical; 
  info = faHandshakeAngle;
  money = faInfoCircle

  goToLink(){
    
  }

}

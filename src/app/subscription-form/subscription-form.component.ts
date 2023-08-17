import { Component } from '@angular/core';
import { Sub } from '../modals/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  constructor(private subService: SubscribersService) { }

  onSubmit(formVal: any) {
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }

    this.subService.checkSubs(subData.email).subscribe(val => {
      console.log(val);
      if (val.empty) {
        this.subService.addSubs(subData);
      } else {
        console.log('Email address is already in use');
      }
    });
  }
}

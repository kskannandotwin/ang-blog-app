import { Component } from '@angular/core';
import { Sub } from '../modals/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  constructor(private subService: SubscribersService) {}

  onSubmit(formVal: any) {
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }
    this.subService.addSubs(subData);
  }
}

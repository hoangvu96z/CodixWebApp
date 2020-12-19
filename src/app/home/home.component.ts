import { Component } from '@angular/core';

import { User } from '@app/_models';
import { LoginService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor(private loginService: LoginService) {
        this.user = this.loginService.userValue;
    }
}
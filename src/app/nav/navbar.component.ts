import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styles:[`
        .nav.nav-bar {font-size:15px}
        #searchForm {padding-right:100px}
        @media (max-width:1200px){#searchForm {dispay:none}}
        li > a.active { color : #f97924 }
    `]
})

export class NavBarComponent{
    constructor(private auth:AuthService){
        
    }

}
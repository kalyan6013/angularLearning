import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl:'./login.component.html',
    styles:[`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]
})

export class LoginComponent{

    username:any
    password:any
    mouseoverLogin

    constructor(private authSerive:AuthService, private router:Router){
        
    }
    
    login(formValues){
        this.authSerive.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
        // console.log(formValues)
    }
    
    cancel(){
        this.router.navigate(['events'])
    }

}
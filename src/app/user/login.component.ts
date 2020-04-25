import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent{

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
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  recover={
    mail:"",
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  enviar(){
    let navigationExtras:NavigationExtras= {
      state:{
        recover:this.recover
      }
    };
    this.router.navigate(['/home', navigationExtras])
  }

}

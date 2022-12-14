import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  constructor(private activerouter:ActivatedRoute, private router:Router) {
    
    this.activerouter.queryParams.subscribe(params=> {
      if(this.router.getCurrentNavigation().extras.state){
        this.data=this.router.getCurrentNavigation().extras.state.user;
      }else {
        this.router.navigate(['/login'])
      }
    });
   }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data: any;

  constructor(private activeRoute:ActivatedRoute, private router:Router) {
    this.activeRoute.queryParams.subscribe(params=> {
      if(this.router.getCurrentNavigation().extras.state){
        this.data=this.router.getCurrentNavigation().extras.state.user;
      } else {
        this.router.navigate['/login']
      }
    });
  }

  ngOnInit() {
  }

}

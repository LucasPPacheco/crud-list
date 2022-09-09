import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RequestUpdate, ResponseUser } from '../user.model';
import { UserService } from '../usersuser.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id!: string;
  request!: ResponseUser;

  constructor(private userService: UserService, private route: ActivatedRoute,  private router: Router) {
    router.events.subscribe((val) => {
      router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.id = route.snapshot.params['id'];
        this.loadUser()
        // if (this.codProSlug !== route.snapshot.params.codProSlug) {
        //   this.codProSlug = route.snapshot.params.codProSlug;
        //   this.loadProduto();

        //}
      });
    });
   }

  ngOnInit(): void {

    

    
        // this.request = {
        //   name: `${res.data.first_name} ${res.data.last_name}`,
        //   job:''
        // }
      //});
  }
  loadUser(){
    this.userService.getUser(this.id).subscribe(res =>{
        console.log(res.data[1].first_name)
        
      });

  }

  atualizar(){

  }

}

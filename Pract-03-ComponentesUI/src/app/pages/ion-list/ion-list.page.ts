import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ion-list',
  templateUrl: './ion-list.page.html',
  styleUrls: ['./ion-list.page.scss'],
})
export class IonListPage implements OnInit {

  users: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.dataService.getUsuarios().subscribe({
      next: (data)=>{
        this.users = data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  favorite(user: any){
    console.log('Favorite', user);
  }

  share(user: any){
    console.log('User', user);
  }

  unread(user: any){
    console.log('Unread', user);
  }

}

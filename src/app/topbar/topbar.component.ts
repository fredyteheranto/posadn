import { Component, OnInit } from '@angular/core';
import {  BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @BlockUI() blockUI: NgBlockUI;
    public activo: boolean = false;
    private password;
    toggleBlocking () {
      this.activo = true;
      this.blockUI.start()
      

   }
   desactivar(){
     if(this.password == '12345'){
       this.activo = false;
       this.blockUI.stop()
     }
   }

}

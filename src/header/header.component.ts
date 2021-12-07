import { Component } from '@angular/core';
import { UserData } from '../shared/userdata.service';

class item {
  name;
  val;
}
@Component({
  selector: 'header-app',
  templateUrl: 'header.component.html',
})
export class Header {
  constructor(private ud: UserData) {
    this.users = this.ud.loadUsers();
  }

  className = 'Header welcomes you';

  users;
  num;

  items: item[] = [
    { name: 'admin', val: 101 },
    { name: 'manager', val: 102 },
    { name: 'QA', val: 103 },
  ];
  sv1 = 'one';
  sv2 = 'admin';
  sv3 = 'three';
}

import { Component } from '@angular/core';


import { InfoList } from './entities/vars/vars'
import { ValuesList } from './entities/vars/vars'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HW-CV';
  public infoList = InfoList;
  public infoListKeys = Object.keys(InfoList);
  public values = ValuesList;
}

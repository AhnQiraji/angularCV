import { Component, Input } from '@angular/core';

import { ValuesList } from '../entities/vars/vars'

@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss'],
})
export class QualityComponent {
  @Input () listKey!: any;
  public values = ValuesList;
}

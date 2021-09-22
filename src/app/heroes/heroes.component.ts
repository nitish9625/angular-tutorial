import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [NgbPopoverConfig]
})
export class HeroesComponent implements OnInit {
  hero:Hero={
    id: 1,
    name: 'Popover create'

  };

  constructor(config: NgbPopoverConfig) { 
    config.placement='right';
    config.triggers='hover';
  }

  ngOnInit(): void {
  }

}

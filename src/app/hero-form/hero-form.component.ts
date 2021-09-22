import { Component, OnInit } from '@angular/core';
import { FormTempalate } from '../form-tempalate';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers  = ['Really Samrt','Super Flexible','super hot','weather changer']
  model = new FormTempalate(18,'Dr Ql', this.powers[0], 'chuck Overstreet');
  submitted = false;
  onSubmit(){this.submitted=true;}

  get diagnostic(){ return JSON.stringify(this.model)}

  constructor() { }

  ngOnInit(): void {

  }

}

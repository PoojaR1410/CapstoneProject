import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component implements OnInit {
  @Input() className!: string;
  @Input() text1!: string;
  @Input() text2!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

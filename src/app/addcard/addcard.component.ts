import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent implements OnInit {

  constructor() { }
  public type:string="option2"
  ngOnInit(): void {
  }

}

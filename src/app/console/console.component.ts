import { Component, OnInit } from '@angular/core';
import { StroageService } from '../service/stroage';
import { HttpService } from '../service/http';


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  username!: string;
  constructor(
    public stroage:StroageService,
    public http:HttpService
    ) {}

  ngOnInit(): void {
    this.username=this.stroage.getStroage("username")
    console.log(this.username);
    this.http.postData2("/api/smallSix/findSmallSixHistory.do",{
      year: '2021',
      type: '1'
    }).then(res=>{
      console.log(res);
      
    })
  }

}

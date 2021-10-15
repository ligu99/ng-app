import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  // 获取分页数据（用户数据）
  public pageData:any={
    endIndex: 50,  // 结束索引
    pageCount: 1,  // 总页数
    pageNo: 1,  // 当前页码，最小为1
    pageSize: 10,  // 每页显示的条数
    recordCount: 10, // 记录总数
    startIndex: 0  // 开始索引
  }

  public listOfData:any[] = [
    {
      shopname: '遠東百貨1',
      type: "總公司",
      cardId: '132465798',
      date:"2019-08-08 09:55:00 至 2019-08-21 20:00:00",
      number:5,
      peoplenum:5000,
      status:"已发布",
      updatetime:"2019-08-20 10:08:13,Annie 蕭安妮 (133)"
    },{
      shopname: '遠東百貨2',
      type: "總公司",
      cardId: '132465798',
      date:"2019-08-08 09:55:00 至 2019-08-21 20:00:00",
      number:5,
      peoplenum:5000,
      status:"已发布",
      updatetime:"2019-08-20 10:08:13,Annie 蕭安妮 (133)"
    },{
      shopname: '遠東百貨3',
      type: "總公司",
      cardId: '132465798',
      date:"2019-08-08 09:55:00 至 2019-08-21 20:00:00",
      number:5,
      peoplenum:5000,
      status:"已发布",
      updatetime:"2019-08-20 10:08:13,Annie 蕭安妮 (133)"
    }
  ];
  
  public getData():void{
    console.log(this.pageData);
  }

  ngOnInit(): void {
  }

}

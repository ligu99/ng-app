/**
 * Created by Administrator on 2017/5/24.
 *   分页组件
 *   @param data={ "last": true,"totalElements": 11,"totalPages": 1,"number": 0,"size": 15,"first": true,"numberOfElements": 11 }
 *   @event change function
 *   使用方法
 *   <pagination (change)="refresh()" [(data)]="pageDate"></pagination>
 */
import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
@Component({
  selector:'pagination',
  template:`
  <div class="page-all">
    <ul class="page-center">
      <li class="page-first"><button (click)="refresh(1)" [disabled]="data.pageNo<=1">首頁</button></li>
      <li class="page-two"><button (click)="refresh((data.pageNo-1))" [disabled]="data.pageNo<=1">上一頁</button></li>
      <li>
        <b>第</b>
        <input type="number" class="input_li" [(ngModel)]="data.pageNo" (change)="refresh(data.pageNo)">
        <b>頁，共 {{data.pageCount}} 頁</b>
      </li>
      <li class="page-above"><button (click)="refresh((data.pageNo+1))" [disabled]="data.pageNo >= this.data.pageCount">下一頁</button></li>
      <li class="page-last"><button (click)="refresh(data.pageCount)" [disabled]="data.pageNo >= this.data.pageCount">尾頁</button></li>
    </ul>
  </div>
    `,
  styleUrls:['./pagination.component.scss']
})
export class Pagination implements OnInit{
  constructor(
  ){}
  //获取父类的变量值
  @Input() data: any = '';

  //反馈到父类
  @Output() dataChange= new EventEmitter();

  //初始化
  ngOnInit(){
  }

  public refresh(page:any):void{
    if(page<=1){
      this.data.pageNo=1
    } else if(page>=this.data.pageCount) {
      this.data.pageNo=this.data.pageCount;
    } else {
      this.data.pageNo=page
    }

    this.dataChange.emit();
  }
}

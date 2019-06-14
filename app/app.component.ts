import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1:number=0;
  num2:number=0;
  op:string;
  flag:number=0;
  res:number=0;

  add0(){
    if(this.flag==0)
      return this.num1=this.num1+0;
    else
      return this.num2=this.num2+0;
  }
  add1(){
    if(this.flag==0)
      return this.num1=this.num1*10+1;
    else
      return this.num2=this.num2*10+1;
  }
  add2(){
    if(this.flag==0)
      return this.num1=this.num1*10+2;
    else
      return this.num2=this.num2*10+2;
  }
  add3(){
    if(this.flag==0)
      return this.num1=this.num1*10+3;
    else
      return this.num2=this.num2*10+3;
  }
  add4(){
    if(this.flag==0)
      return this.num1=this.num1*10+4;
    else
      return this.num2=this.num2*10+4;
  }
  add5(){
    if(this.flag==0)
      return this.num1=this.num1*10+5;
    else
      return this.num2=this.num2*10+5;
  }
  add6(){
    if(this.flag==0)
      return this.num1=this.num1*10+6;
    else
      return this.num2=this.num2*10+6;
  }
  add7(){
    if(this.flag==0)
      return this.num1=this.num1*10+7;
    else
      return this.num2=this.num2*10+7;
  }
  add8(){
    if(this.flag==0)
      return this.num1=this.num1*10+8;
    else
      return this.num2=this.num2*10+8;
  }
  add9(){
    if(this.flag==0)
      return this.num1=this.num1*10+9;
    else
      return this.num2=this.num2*10+9;
  }
  plus(){
    this.flag=1;
    this.op='+';
  }
  minus(){
    this.flag=1;
    this.op='-';
  }
  mul(){
    this.flag=1;
    this.op='*';
  }
  div(){
    this.flag=1;
    this.op='/';
  }
  equal(){
    if(this.op=="+"){
      this. res=this.num1+this.num2
    }
    else if(this.op=="-"){
      this. res=this.num1-this.num2
    }
    else if(this.op=="*"){
      this. res=this.num1*this.num2
    }
    else if(this.op=="/"){
      this. res=this.num1/this.num2
    }
  }
  clear(){
    this.flag=0;
    this.op="";
    this.num1=0;
    this.num2=0;
    this.res=0;
  }
}

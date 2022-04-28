import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-super-hero-profile',
  templateUrl: './super-hero-profile.component.html',
  styleUrls: ['./super-hero-profile.component.scss']
})
export class SuperHeroProfileComponent implements OnInit, OnDestroy {

  isContentLoading: boolean = false;
  counter: number = 0;
  intervalId:any=0;

  constructor() { }
  

  ngOnInit(): void {
    this.isContentLoading=true;
    
    this.intervalId=setInterval(()=>{
      this.incrementCounter();
    },10);
    
  }

  incrementCounter(){
    if(this.counter < 1000){
      this.counter++;
    }else{
      this.isContentLoading=false;
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
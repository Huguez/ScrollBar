import { Component, OnInit, ViewChild } from '@angular/core';
import {  CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  
  @ViewChild( CdkVirtualScrollViewport ) 
  public viewport: CdkVirtualScrollViewport;


  public personas = Array(1000).fill(0);
  public personaIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log( this.personas );
  }

  public final(): void {
    this.viewport.scrollToIndex( this.personas.length ) ;
    // console.log( this.personas.length );
  }

  public inicio(): void {
    this.viewport.scrollToIndex( 0 );
  }
  
  public mitad():void {
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }
  

}

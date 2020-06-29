import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  
  private url:string = `https://restcountries.eu/rest/v2/lang/es`;
  public paises: any = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get( this.url ).subscribe( p => this.paises =  p );
  }
  
  drop( evento:CdkDragDrop<any> ){
    // console.log( evento.currentIndex, " -> ", evento.previousIndex  );
    // let aux
    moveItemInArray( this.paises, evento.previousIndex,evento.currentIndex );
    // imaginemos que tenemos un servicio que guarda en base de datos
  }
}

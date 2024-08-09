import { Component } from '@angular/core';
import { ScriptService } from '../services/script.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  planes: string[] = [
    'innistrad',
    'ixalan',
    'ravnica'
  ]

  elementoPresionado: number = -1;

  
  constructor(
    private scriptService: ScriptService
    ) { }

  ngOnInit(): void {
    this.selectPlane(0)
    
  }

  // Función para manejar el clic en un elemento
  selectPlane(index: number) {
    // Almacena el índice del elemento presionado
    this.elementoPresionado = index;
  }

  showGallery(){
    this.elementoPresionado = -1;
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrl: './categoria-read.component.css'
})
export class CategoriaReadComponent  implements OnInit{

  categorias: Categoria[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes' ];

  constructor(private service: CategoriaService){  }

  ngOnInit(): void {
    this.findAll();

  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.categorias = resposta;
    })
  }


}

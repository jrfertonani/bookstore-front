import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrl: './livro-delete.component.css'
})
export class LivroDeleteComponent {

  id_cat: String = ''

  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor:'',
    texto: ''
  }

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }


  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta
    })
  }


  delete(): void{
    this.service.delete(this.livro.id!).subscribe(() => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Livro deletadocom sucesso!')
    },err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Ouve falha ao deletadocom livro, tente mais tarde!')
    })
  }

  getMessage(){
    return false;
  };




}

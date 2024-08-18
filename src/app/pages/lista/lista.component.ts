import { CommonModule, registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnInit } from "@angular/core";
import { ProdutosService } from "../../shared/services/produtos.service";
import { Produto } from "../../shared/models/produto";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt);
@Component({
  selector: "app-lista",
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
})
export class ListaComponent implements OnInit {
  listaProdutos: Produto[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "unidadeMedida",
    "quantidade",
    "preco",
    "produtoPerecivel",
    "dataValidade",
    "dataFabricacao",
    "acoes",
  ];

  constructor(
    private produtosService: ProdutosService,
    private route: Router
  ) {}

  ngOnInit() {
    this.listaProdutos = this.produtosService.produtos;
  }

  deletarProduto(nomeProduto: string) {
    this.produtosService.deletarProduto(nomeProduto);
    window.location.reload();
  }

  editarProduto(produto: Produto) {
    this.produtosService.selecionarProduto(produto);
    this.route.navigateByUrl("/cadastro");
  }
}

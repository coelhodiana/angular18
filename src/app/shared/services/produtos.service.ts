import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";

@Injectable({
  providedIn: "root",
})
export class ProdutosService {
  produtos: Produto[] = [];

  produtoSelecionado: Produto | null = null;

  constructor() {
    this.produtos = this.buscarProdutosNoLocalStorage();
  }

  // retorna os produtos salvos no localStorage
  buscarProdutosNoLocalStorage(): Produto[] {
    const produtosLocais = localStorage.getItem("produtos");
    if (produtosLocais) {
      return JSON.parse(produtosLocais);
    }
    return [];
  }

  // Salva os produtos no localStorage
  salvarProdutosNoLocalStorage() {
    localStorage.setItem("produtos", JSON.stringify(this.produtos));
  }

  // Retorna um array de produtos salvos no serviço
  buscarProdutos(): Produto[] {
    return this.produtos;
  }

  // Adiciona um novo produto no array de produtos do serviço e atualiza a lista de produtos no localStorage
  criarProduto(produto: Produto) {
    this.produtos.push(produto);
    this.salvarProdutosNoLocalStorage();
  }

  atualizarProduto(produto: Produto) {
    const index = this.produtos.findIndex(
      (item) => item.id === this.produtoSelecionado?.id
    );
    if (index !== -1) {
      this.produtos[index] = produto!;
      this.salvarProdutosNoLocalStorage();
    }
  }

  deletarProduto(nomeProduto: string) {
    const index = this.produtos.findIndex(
      (produto) => produto.nome === nomeProduto
    );
    if (index !== -1) {
      this.produtos.splice(index, 1);
      this.salvarProdutosNoLocalStorage();
    }
  }

  selecionarProduto(produto: Produto) {
    this.produtoSelecionado = produto;
  }
}
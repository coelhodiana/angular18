import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProdutosService } from "../../shared/services/produtos.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Produto } from "../../shared/models/produto";

@Component({
  selector: "app-cadastro",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit, OnDestroy {
  formProduto: any;
  produtoSelecionado: Produto | null = null;

  constructor(
    private produtosService: ProdutosService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.formProduto = this.fb.group({
      id: [0],
      nome: [""],
      unidadeMedida: [1],
      quantidade: [0],
      preco: [0],
      produtoPerecivel: [false],
      dataValidade: [""],
      dataFabricacao: [""],
    });

    this.produtoSelecionado = this.produtosService.produtoSelecionado;

    if(this.produtoSelecionado) {
      this.formProduto.setValue(this.produtoSelecionado)
    }
  }

  ngOnDestroy(): void {
    this.produtosService.produtoSelecionado = null;
  }

  salvarProduto() {
    this.produtosService.criarProduto(this.formProduto.value);
    this.route.navigateByUrl("/lista");
  }

  salvarEdicao() {
    this.produtosService.atualizarProduto(this.formProduto.value);
    this.route.navigateByUrl("/lista");
  }
}

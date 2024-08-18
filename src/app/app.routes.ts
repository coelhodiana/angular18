import { Routes } from "@angular/router";
import { ListaComponent } from "./pages/lista/lista.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";

export const routes: Routes = [
  {
    path: "lista",
    component: ListaComponent,
  },
  {
    path: "cadastro",
    component: CadastroComponent,
  },
];

enum UnidadeMedida{
    litro = 1,
    kg = 2
 }
 
 
 export interface Produto {
     id:number;
     nome: string;
     unidadeMedida: UnidadeMedida;
     quantidade: number;
     preco: number;
     produtoPerecivel: boolean;
     dataValidade: string;
     dataFabricacao: string;
 }
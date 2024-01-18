import { Postagem } from "./Postagem";

export interface Usuario{
id:	number;
nome: string;
Usuário: string;
senha: string;
foto:string;
Postagem?: Postagem | null;
}
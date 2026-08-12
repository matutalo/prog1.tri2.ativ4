import { db } from "./connection"

class Usuario {

    constructor(
        private id: number,
        private usuario: string,
        private senha: string,
        private grupos: string
    ) {

    }
    salvar(){
        const query = db.query(`
            INSERT INTO usuario(usuario, senha, grupos)
                VALUES ($usuario, $senha, $grupos)
            
            `)
            query.run({
                $usuario: this.usuario,
                $senha: this.senha,
                $grupos: this.grupos
            })
    }

}
const u1 = new Usuario(0, "Daniel", "123ja", "admin")

u1.salvar()
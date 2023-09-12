import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {
    
    constructor (private usuarioReposirory :  UsuarioRepository) {}


    @Post()
    async criaUsuario(@Body() dadosUsuarios){
        this.usuarioReposirory.salvar(dadosUsuarios);
        return dadosUsuarios;
    }

    @Get()
    async listaUsuarios() {
        return this.usuarioReposirory.listar();
    }
}
import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {
    
    constructor (private usuarioReposirory :  UsuarioRepository) {}


    @Post()
    async criaUsuario(@Body() dadosUsuarios: CriaUsuarioDTO){
        this.usuarioReposirory.salvar(dadosUsuarios);
        return dadosUsuarios;
    }

    @Get()
    async listaUsuarios() {
        return this.usuarioReposirory.listar();
    }
}
"use strict";
class Cachorro {
    constructor() {
        /*
        atributos ou propriedades
        */
        this.nome = `Luke`;
        this.raca = `poodle`;
        this.cor = `branco`;
        this.idade = 2;
        this.peso = 4;
        this.altura = 0.4;
        this.morde = true;
        this.vacinado = true;
        this.pedigree = true;
    }
}
/**
 * Objeto pé uma instância de uma classe
 */
let c = new Cachorro();
let c2 = new Cachorro();
console.log(c.nome); //Luke
console.log(c2.nome); //Luke

/* ************************************************************************ */
/*                                                                          */
/*                                                                          */
/*  desafio01.js                                                            */
/*                                                                          */
/*  By: Jaqueline Ribeiro <https://github.com/jaqezita>                     */
/*                                                                          */
/*   Created: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*   Updated: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*                                                                          */
/* ************************************************************************ */

/*Faça um programa para calcular o valor de uma viajem. 

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/ 

const preco = 5.79;
const gastoMedio = 12;
const distancia = 100;

console.log ('R$ ' + ((distancia / gastoMedio) * preco));

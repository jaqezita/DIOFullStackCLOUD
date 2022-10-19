/* ************************************************************************ */
/*                                                                          */
/*                                                                          */
/*  desafio02.js                                                            */
/*                                                                          */
/*  By: Jaqueline Ribeiro <https://github.com/jaqezita>                     */
/*                                                                          */
/*   Created: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*   Updated: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*                                                                          */
/* ************************************************************************ */

/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variavéis. Sendo elas: 
    1 - Preço do etanol;
    2 - Preço do gasolina;
    3 - O tipo de combustível do carro por KM;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
let combustivel;
const gastoMedio = 10;
const distancia = 100;


combustivel = precoEtanol; // variavel que alterna o tipo de combustivel 

if (combustivel === precoEtanol)
{
    console.log ('R$ ' + ((distancia / gastoMedio) * precoEtanol));
}
if (combustivel === precoGasolina)
{
    console.log ('R$ ' + ((distancia / gastoMedio) * precoGasolina));
}
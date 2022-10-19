/* ************************************************************************ */
/*                                                                          */
/*                                                                          */
/*  ex01.js                                                                 */
/*                                                                          */
/*  By: Jaqueline Ribeiro <https://github.com/jaqezita>                     */
/*                                                                          */
/*   Created: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*   Updated: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*                                                                          */
/* ************************************************************************ */

/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/

function calculoImc (peso, altura)
{
    return peso / (altura * altura);
}

function referenciaMedica (imc)
{
if (imc < 18.5)
{
    return 'Abaixo do peso';
}
else if (imc > 18.5 && imc < 25)
{
    return 'Peso normal';
}
else if (imc > 25 && imc < 30)
{
    return 'Acima do peso'
}
else if (imc > 30 && imc < 40)
{
    return 'Obeso'
}
else
    return 'Obesidade grave'
}

function main ()
{
let peso = 95.6;
let altura = 1.57;
const imc = calculoImc (peso, altura);

console.log(referenciaMedica(imc));
}

main();
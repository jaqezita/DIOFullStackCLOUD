/* ************************************************************************ */
/*                                                                          */
/*                                                                          */
/*  ex00.js                                                                 */
/*                                                                          */
/*  By: Jaqueline Ribeiro <https://github.com/jaqezita>                     */
/*                                                                          */
/*   Created: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*   Updated: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*                                                                          */
/* ************************************************************************ */

/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

let nota1 = 9.9;
let nota2 = 5.8;
let nota3 = 6.8;

media = (nota1 + nota2 + nota3) / 3; 

if (media < 5){
    console.log('Reprovação')
}
else if (media > 5 && media < 7)
{
    console.log('Recuperação')
}
else
{
    console.log('Passou de semestre')
}
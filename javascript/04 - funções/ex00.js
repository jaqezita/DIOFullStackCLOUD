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

function calcularMedia(nota1, nota2, nota3)
{
    return (nota1 + nota2 + nota3) / 3;
}

function calcularNota(media)
{
    if (media < 5){
        return 'Reprovação';
    }
    else if (media > 5 && media < 7)
    {
        return 'Recuperação';
    }
    else
    {
        return 'Passou de semestre';
    } 
}
    function main()
{
    const nota1 = 8;
    const nota2 = 1.7;
    const nota3 = 9.2;

    const media = calcularMedia(nota1, nota2, nota3);
    
    console.log(calcularNota(media));
}

main ();
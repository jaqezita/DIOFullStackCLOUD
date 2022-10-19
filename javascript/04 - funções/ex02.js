/* ************************************************************************ */
/*                                                                          */
/*                                                                          */
/*  ex02.js                                                                 */
/*                                                                          */
/*  By: Jaqueline Ribeiro <https://github.com/jaqezita>                     */
/*                                                                          */
/*   Created: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*   Updated: 2022/10/17 20:00:28 by Jaqueline Ribeiro                      */
/*                                                                          */
/* ************************************************************************ */

/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function formaPagamento(preco, pagamento)
{
if (pagamento === 'debito')
{
   return preco.toFixed(2) - (preco * 0.1);
}
else if (pagamento === 'dinheiro' || pagamento === 'pix')
{
   return preco.toFixed(2) - (preco * 0.15);
}
else if (pagamento === '2x')
{
   return preco.toFixed(2);
}
else
{
   return preco.toFixed(2) + (preco * 0.1);
}
}

function main()
{
let preco = 59.99;
let pagamento = 'pix';

console.log(formaPagamento(preco, pagamento));
}

main();
# Link do Projeto: 
> O link do projeto concluído: https://desafio-03-rho.vercel.app/

# Explicando algumas funcionalidades:

Adicionei algumas pequenas funcionalidades no carrinho de compras para trazer um pouco mais de realismo com um real carrinho de compras (não sei se era permitido), como: 
* Botão de remover uma unidade de um item;
* Botão de remover toda as unidades de um item;
* Botão de finalizar a compra (o botão apenas simula uma operação de compra apagando a lista, não utilizei requisições para simular);

> * Também adicionei componentes de carregamento pelo fato de que em alguns momentos os dados da API demoram a ser carregados. Além disso, o componente tem a funcionalidade de mostrar erro caso dê problema ao carregar os dados, pedindo ao usuário que cheque sua conexão a internet e atualize a página.
> * A conexão com a API foi feita com AXIOS;
> * Utilizei o VUEX para armazenar dados em nível global e facilitar o compartilhamento de dados entre os componentes;
> * O projeto foi feito utilizando pré-processador SASS para melhor organização da folha de estilos. O site é responsivo.
> * Componentizei o App ao máximo para melhor entendimento, além de poder reutilizar alguns componentes, como o 'loading'.
 






# Desafio 3 - Vaga de Pessoa Desenvolvedora Frontend Jr

Olá para esse desafio estamos buscando alguém que consiga combinar habilidades para:

- Elaborar wireframes propondo iterações mais objetivas e consistentes entre cliente e sistema;
- Converter wireframes em componentes e páginas que serão reutilizados pela equipe;
- Transcrever iterações em funcionalidades junto com o time.
- Colaborar com a experiência do usuário propondo melhorias no uso do sistema.

### Desafio

Imagine que você conheceu o dono de uma loja, chamado Nicollas Petit e seu estilista Alexs Dubois ambos querendo construir um e-commerce. Eles já possuem todas as informações cadastradas de seus produtos e estão disponibilizando para você em uma [API](https://fakestoreapi.com/). 


#### Casos de uso

1) Exibir listagem de produtos disponibilizando opções de ordenação e filtros por categoria ( 1 ou mais ), se possível disponibilizar filtro por rate (nota do produto).
   
2) Disponibilize a opção de selecionar o produto para o carrinho de compra.

3) Exibir detalhes do carrinho de compra. Mostre o valor total dos produtos, descrição, thumbnail, valor unitário e quantidade.

#### Requisitos 

- Nesse desafio você não poderá usar um framework css;
- O projeto deve ser entregue com Vue.js;


#### Como enviar

- Crie um fork do projeto;
- Crie um diretório com seu-nome incluindo o seu nome no formato lowercase usando hífen (-) quando necessário;
- Crie os arquivos que achar necessário;
- Envie o PULL-REQUEST;
- Esperamos que você se divirta e aprenda algo fazendo esse desafio. Se não conseguir algum detalhe, pode nos mandar mesmo assim, que avaliaremos com todo o prazer (e talvez possamos-lhe auxiliar no que faltou).
- Esse repositório ficará disponível para receber o seu PR até `2022-05-31T23:59:59-03:00`.

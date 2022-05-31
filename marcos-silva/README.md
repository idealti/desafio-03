
# IDEAL PETIT STORE

Simulação de um e-commerce para o desafio da IdealTI.


## Demo

Você pode ver o deploy do projeto clicando [aqui.](https://ideal-petit.netlify.app/)

Tenha um pouco de paciência com a API. :)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a657e3cc-c01b-45a6-97c3-51b027b61e9f/deploy-status)](https://app.netlify.com/sites/ideal-petit/deploys)



### Funcionalidades

- Adicionar um produto ao carrinho
- Listagem dos produtos
- Buscas por diferentes filtros


### Stack utilizada

- VueJS
- Vuex
- SASS

### Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/marcosebsilva/ideal-challenge
```

Entre no diretório do projeto

```bash
  cd ideal-challenge
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  git switch dev && npm run serve
```


## Aprendizados

Ok, vamo lá.

Essa foi a minha primeira experiência usando algum outro framework de JS que não fosse o React (ou baseado no React, como o Next).


Pela sintaxe ser diferente do que estou acostumado, fui obrigado a ver alguns conceitos de frontend de uma forma mais **"pura"**, como gerenciamento de estado, routing, ciclos de vida, etc.

Existe um oceano gigantesco de decisões que giram em torno de entender como esses conceitos funcionam e pude praticar bastante coisa sobre eles - e isso só me fez **esbarrar na superfície** de tudo que dá pra aprender aqui.

Tiveram vários momentos em que fiquei insatisfeito com o que tinha feito apesar de estar funcionando porque aquilo "parecia estranho", mas acho que isso faz parte do aprendizado. Um exemplo disso foi o custom hook pra pegar os produtos, que até agora eu tenho minhas dúvidas sobre ter sido a melhor opção ou não, apesar de fazer mais sentido do que as versões anteriores o que, **de novo** faz parte do aprendizado.

A coisa que me deixou mais insatisfeito foi não ter me dedicado aos testes durante o prazo regular, principalmente pelo fato de a API ficar meio capenguinha as vezes. Eles com certeza serão feitos posteriormente.


Além de todo esse TCC, gostei muito do Vue! Não vejo a hora de aprender mais sobre ele - e sobre o frontend como um todo.


## Melhorias

- Testes e2e
- Design responsivo para mobile



## Apêndice

[Figma](https://www.figma.com/file/JtBFGHKjienZBtTfB5GU6I/ideal-challenge?node-id=48%3A143) - layout desenvolvido por mim mesmo e que serviu mais como uma base do que como um modelo a ser seguido pixel perfect.



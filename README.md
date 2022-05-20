## Detalhes
- Para criar um e-commerce com a melhor performance, eu utilizaria nuxt, mas neste desafio utilizei Vue.js demostrando as funcionalidades de um e-commerce assim como foi requerido
- Projeto iniciado com Vite.js, com template vue-typescript
- Busquei implementar uma melhor estrutura na aplicação, seguindo boas práticas, com objetivo de melhorar a legibilidade do código e sua manutenção
- Otimizei ao máximo para a aplicação fazer a menor quantidade de requisições à API possível, porém, sempre em mente a não dependência da API fornecida, criando estrutura que pode facilmente se adaptar à outras APIs
- Utilizei o pré-processsador SCSS
- Usei axios para controlar chamadas API
- Criei rotas home e cart, com header e filtros estáticos, utilizando vue-router
- Formatei todos os preços para padrão R$
- Adicionei filtros para todas as categorias fornecidas pela API e ordenação por preço e avaliação 
- Pinia para gerenciamente e compartilhamento de estado, utilizando localStorage para salvar informações do carrinho

### REPORT
- Até o momento em que atualizei esse REAME.md, existe um problema de reatividade do Pinia, em que estou tentando resolver, já consegui identificá-lo, mas não solucioná-lo.

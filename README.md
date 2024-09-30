## Sobre o projeto

Neste projeto, implementei um conjunto de funcionalidades e estilizações em um sistema de e-commerce utilizando React. A aplicação acessa uma lista de produtos a partir de uma API externa e simula um carrinho de compras com gerenciamento de itens. Utilizei também práticas de estilização avançadas com SASS, garantindo que a interface fosse responsiva, seguindo um design previamente definido no Figma.

## Funcionalidades implementadas

### 1. Estilização
Todos os componentes básicos foram estilizados utilizando SASS. Apliquei técnicas avançadas de CSS para garantir que a aplicação fosse completamente responsiva, adaptando-se a diferentes resoluções de tela e dispositivos. A estilização foi feita em conformidade com o layout fornecido no Figma, garantindo uma experiência de usuário fluida e visualmente agradável.

### 2. Integração com API e busca de produtos
Utilizei o hook `useEffect` para consumir a API de produtos e armazenar os dados no estado apropriado da aplicação. Com a lista de produtos obtida, implementei uma funcionalidade de busca que permite ao usuário filtrar os itens com base no texto inserido. A lógica de busca foi integrada diretamente ao formulário, que já capturava as entradas do usuário.

### 3. Gerenciamento do carrinho e persistência no localStorage
Implementei o gerenciamento completo do carrinho de compras, permitindo a adição e remoção de itens, bem como a atualização dos totais conforme os produtos são manipulados. Utilizei o `useEffect` para persistir o estado do carrinho no `localStorage`, garantindo que os dados sejam mantidos mesmo após o usuário recarregar a página.

### 4. Modal
Implementei um modal simples para exibir detalhes do carrinho e outras funcionalidades da aplicação. O modal foi configurado para abrir e fechar com base em estados controlados via JSX e condicionais.

### 5. Comportamentos avançados do modal
Além da funcionalidade básica, refinei o comportamento do modal aplicando fechamento ao clicar fora da área do modal e também ao pressionar a tecla "Esc". Para facilitar a manutenção e reaproveitamento de código, criei hooks personalizados que gerenciam esses comportamentos.

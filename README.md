## Lista de Compras App
Codificação de um aplicativo React Native simples que permite ao usuário criar uma lista de compras e marcar itens como concluídos. O aplicativo usa o pacote "react-native-swipe-list-view" para criar uma lista de compras deslizável, onde o usuário pode excluir itens deslizando-os para a esquerda.

- Como Usar
Para usar este aplicativo, siga estas etapas:

Clone ou baixe este repositório em seu computador.
Instale as dependências usando o comando npm install.
Inicie o aplicativo usando o comando npm start.
Execute o aplicativo em um emulador ou dispositivo físico.

- Funcionalidades
O aplicativo possui as seguintes funcionalidades:

Adicionar um item à lista de compras
Excluir um item da lista de compras
Tecnologias Utilizadas
Este aplicativo foi desenvolvido usando as seguintes tecnologias:

- React Native
- JavaScript
- Bibliotecas Externas
O aplicativo usa as seguintes bibliotecas externas:

react-native-swipe-list-view: Para criar uma lista de compras deslizável.


#### Descrição do Código:
Importação de Módulos e Componentes:

O código começa importando módulos necessários e componentes de 'react', 'react-native' e 'react-native-swipe-list-view'.
Componente App:

O componente App é a função principal que renderiza a interface do usuário do aplicativo.
Estado:

Utiliza o hook useState para gerenciar o estado dos itens da lista de compras e o texto do input atual.
Funções adicionarCompra e removerCompra:

adicionarCompra: Adiciona um novo item à lista de compras com um ID único baseado no timestamp atual e limpa o input.
removerCompra: Remove um item da lista de compras baseado no seu ID.
Renderizando Itens da Lista:

Utiliza o componente SwipeListView para renderizar os itens da lista de compras e permitir que sejam removidos deslizando para o lado.
Estilos:

Usa o StyleSheet.create para definir os estilos dos componentes da UI.
Estrutura do Código:
Estados:

compras: Uma array para armazenar os itens da lista de compras.
itemCompra: Uma string para armazenar o texto do item de compra atual.
Funções:

adicionarCompra: Adiciona um item à lista de compras.
removerCompra: Remove um item da lista de compras.
renderCompra: Renderiza um item da lista de compras.
renderHiddenItem: Renderiza o botão de deletar quando um item da lista é deslizado.
Componentes de UI:

TextInput: Para inserir um novo item de compra.
Button: Para adicionar o item à lista de compras.
SwipeListView: Para mostrar os itens da lista de compras e suportar a ação de deslizar para deletar.
Estilos:

São definidos no objeto styles, usando StyleSheet.create para otimizar a performance dos estilos.

Um aplicativo React Native que utiliza hooks para o gerenciamento de estado e funções para renderizar a UI, manipular eventos e atualizar o estado. É um aplicativo simples e não segue um padrão de arquitetura complexo, mas demonstra bem os princípios básicos do desenvolvimento com React Native.

Implementado Testes em Testing Library

teste escrito para um aplicativo React Native usando a biblioteca de testes @testing-library/react-native. Este teste específico está verificando se um item pode ser adicionado à lista de compras no aplicativo.

#### Estrutura do Teste:
Importação dos Módulos Necessários:

O teste começa importando o React e as funções necessárias da biblioteca de testes, além do componente App que será testado.
Bloco describe:

- Um bloco describe é utilizado para agrupar testes relacionados. Neste caso, todos os testes dentro deste bloco estão relacionados ao componente App.
Teste Individual it:

- Dentro do bloco describe, há um teste it que descreve um caso de teste específico: verificar se um item pode ser adicionado à lista de compras.
Passos do Teste:
Renderizar o Componente:

- O componente App é renderizado, e várias funções de consulta são extraídas do objeto retornado para ajudar a interagir e verificar o estado do componente.
Verificar a Ausência do Item:

O teste primeiro verifica se o item "Maçã" não está presente na lista de compras. Isso é feito para assegurar que o item não estava na lista antes de tentar adicioná-lo.
Interagir com o Componente:

- O teste simula um usuário digitando "Maçã" no campo de texto e pressionando o botão para adicionar o item à lista de compras. Isso é feito usando as funções fireEvent.changeText e fireEvent.press.
Verificar a Presença do Item:

- Finalmente, o teste verifica se o item "Maçã" foi adicionado à lista de compras. Se o item estiver presente, o teste passará; caso contrário, falhará.
O que está sendo testado:
Interatividade:

A capacidade do usuário de interagir com o campo de texto e o botão.
Funcionalidade de Adição:

A funcionalidade que permite adicionar um item à lista de compras.
Renderização:

Se o item adicionado é renderizado na tela.

```
npm test
```

#### Conclusão:
Este é um teste de integração que verifica se várias partes do aplicativo estão funcionando juntas corretamente. Ele não só testa a lógica de adição mas também verifica se o item é renderizado corretamente na interface do usuário. A biblioteca @testing-library/react-native é usada por sua abordagem simples e centrada no usuário para testar componentes React Native.

### Autor:
Emerson Amorim

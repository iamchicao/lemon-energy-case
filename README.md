# Lemon - Teste Frontend - Dialog

A Lemon está desenvolvendo sua nova biblioteca de componentes UI.

Neste teste, você será encarregado de desenvolver um dos componentes desta biblioteca. A descrição e as referências de design necessárias para o desenvolvimento encontram-se abaixo.

O teste deve ser realizado em React. Além das bibliotecas react e react-dom, você poderá utilizar bibliotecas que auxiliem no setup do projeto e na escrita de CSS (e.g. styled-components, sass, emotion, etc), mas o código relativo ao componente deve ser de sua autoria. É importante que possamos avaliar sua capacidade de estilizar uma página com CSS, então não utilize frameworks que abstraiam o CSS (ex. Tailwind, Google Material, Bootstrap)

Ao final do teste, você deverá entregar para nós:

- O código-fonte do componente;
- Uma ou mais páginas demonstrando cada uma das as funcionalidades do componente;
- Testes automatizados do componente.

## Funcionamento
1. Possui duas camadas, uma que ocupa toda a tela e não permite a interação com o conteúdo que esconde, e outra onde o conteúdo é apresentado.
2. O **Dialog** apresenta todo seu conteúdo até uma certa altura da tela. Qualquer conteúdo que exceda essa altura deve criar um comportamento de scroll no corpo do componente.
3. O componente principal **Dialog** deve controlar sua visualização a partir da prop `isOpen` e aceitar um callback `onClose` que será chamado em todas as ações do usuário que fecham o Dialog: 
    - Clicar no botão de fechar (via ícone clicável);
    - Clicar na camada de overlay se a prop `closeOnOverlayClick` for `true`;
    - Pressionar a tecla ESC.

Abaixo você encontra a descrições dessas e de outras props do componente que você deverá desenvolver.

### **props**

- `title` *(string?)* - Conteúdo a ser apresentado na parte superior do conteúdo do Dialog, com formatação diferenciada. **Não é obrigatória**.
- `isOpen` *(boolean)* - Diz se o Dialog está aberto (quando `true`) ou não (quando `false`). **Obrigatória**.
- `onClose` *(function)* - Ação de callback sempre que o Dialog for fechado. **Obrigatória.**
- `closeOnOverlayClick` *(boolean)* - Quando `true`, permitirá que o Dialog seja fechado quando o usuário clicar no overlay. **Obrigatória.**
- `children` *(`React.ReactNode`?)*: **conteúdo do Dialog. **Não é obrigatória.**
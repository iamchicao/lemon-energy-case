// Você será encarregado de desenvolver o componente ** Dialog.**
// Não é necessário desenvolver as animações de entrada e saída do Dialog e este só deve ser desenvolvido para o breakpoint especificado no design.
// Além do componente Dialog, você pode desenvolver quantos componentes forem necessários para implementar o design e comportamentos esperados.O seu componente deve respeitar os comportamentos descritos no Figma e na documentação abaixo.
// Ao final do desenvolvimento, documente a forma de uso dos seus componentes.
// Visualmente, o Dialog é composto por uma camada onde seu conteúdo é apresentado, e uma camada de overlay que sobrepõe todo o conteúdo *da página*, **independente de onde o Dialog for usado**.

// Figma de referência: https://www.figma.com/file/kL6ez15Ab41AOxlR07FbeA/Lemon---Teste-Frontend---Dialog?t=iydZYOQvtXn8ycre-0

// ### Funcionamento

// 1. Possui duas camadas, uma que ocupa toda a tela e não permite a interação com o conteúdo que esconde, e outra onde o conteúdo é apresentado.
// 2. O **Dialog** apresenta todo seu conteúdo até uma certa altura da tela. Qualquer conteúdo que exceda essa altura deve criar um comportamento de scroll no corpo do componente.
// 3. O componente principal **Dialog** deve controlar sua visualização a partir da prop `isOpen` e aceitar um callback `onClose` que será chamado em todas as ações do usuário que fecham o Dialog:
//     - Clicar no botão de fechar (via ícone clicável);
//     - Clicar na camada de overlay se a prop `closeOnOverlayClick` for `true`;
//     - Pressionar a tecla ESC.

// Abaixo você encontra a descrições dessas e de outras props do componente que você deverá desenvolver.

// ### **props**

// - `title` *(string?)* - Conteúdo a ser apresentado na parte superior do conteúdo do Dialog, com formatação diferenciada. **Não é obrigatória**.
// - `isOpen` *(boolean)* - Diz se o Dialog está aberto (quando `true`) ou não (quando `false`). **Obrigatória**.
// - `onClose` *(function)* - Ação de callback sempre que o Dialog for fechado. **Obrigatória.**
// - `closeOnOverlayClick` *(boolean)* - Quando `true`, permitirá que o Dialog seja fechado quando o usuário clicar no overlay. **Obrigatória.**
// - `children` *(`React.ReactNode`?)*: **conteúdo do Dialog. **Não é obrigatória.**

// Criar o componente Dialog de acordo com o Figma: https://www.figma.com/file/kL6ez15Ab41AOxlR07FbeA/Lemon---Teste-Frontend---Dialog?t=iydZYOQvtXn8ycre-0

import React from "react";
import PropTypes from "prop-types";
import LemonImage from "../../assets/lemon.png"

import { DialogContainer, DialogOverlay, DialogContent, Image, TextContent } from "./Dialog.styled"


const Dialog = ({ title, isOpen, onClose, closeOnOverlayClick, children }) => {
  return (
    <DialogContainer isOpen={isOpen}>
      <DialogOverlay onClick={closeOnOverlayClick ? onClose : null} />
      <DialogContent>
        <div className="dialog-header">
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="dialog-content">
          <TextContent>
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa
            gentis num é. Si u mundo tá muito paradis? Toma um mé que o mundo vai
            girarzis! Suco de cevadiss deixa as pessoas mais interessantis. Mé
            faiz elementum girarzis, nisi eros vermeio. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis. Quem num gosta di mé, boa
            gentis num é. A ordem dos tratores não altera o pão duris. Aenean
            aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé, boa
            gentis num é. Aenean aliquam molestie leo, vitae iaculis nisl. Aenean
            aliquam molestie leo, vitae iaculis nisl. Aenean aliquam molestie
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa
            gentis num é. Si u mundo tá muito paradis? Toma um mé que o mundo vai
            girarzis! Suco de cevadiss deixa as pessoas mais interessantis. Mé
            faiz elementum girarzis, nisi eros vermeio. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis.
          </TextContent>
          <Image src={LemonImage} alt="Lemon" />
          <TextContent>
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa
            gentis num é. Si u mundo tá muito paradis? Toma um mé que o mundo vai
            girarzis! Suco de cevadiss deixa as pessoas mais interessantis. Mé
            faiz elementum girarzis, nisi eros vermeio. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis. Quem num gosta di mé, boa
            gentis num é. A ordem dos tratores não altera o pão duris. Aenean
            aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé, boa
            gentis num é.
          </TextContent>
        </div>
      </DialogContent>
    </DialogContainer>
  );
}

Dialog.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnOverlayClick: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Dialog;
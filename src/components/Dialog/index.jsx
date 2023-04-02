import React from "react";
import PropTypes from "prop-types";
import LemonImage from "../../assets/lemon.png";
import {
  DialogContainer,
  DialogOverlay,
  DialogContent,
  Image,
  Content,
  Title,
  CloseButton
} from "./Dialog.styled";

// O Dialog deve receber o título, se está aberto ou não, a função de fechar e se deve fechar ao clicar no overlay

const Dialog = ({ title, isOpen, onClose, closeOnOverlayClick, children }) => {
  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <DialogOverlay />
      <DialogContent>
        {/* Aqui vem o title na esquerda e o x para fechar na direita */}
        <Title>Como é a Lemon</Title>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Content>
          <h1>
            Você não é apenas um pagador de contas. Chega de pagar caro na conta
            de luz e não saber o porquê, ou de receber sua conta em papel todo
            mês e não entender nada do que está escrito. Acreditamos que o
            futuro é feito de decisões que tomamos agora e decidimos transformar
            a experiência com energia no Brasil. Somos incansáveis na busca das
            melhores soluções, por isso chega de consumir uma energia que faz
            mal para o nosso planeta. Com a Lemon, você sempre – e é sempre
            mesmo – vai ter uma energia mais barata, mais sustentável e mais
            digital pro seu negócio.
          </h1>
          <Image src={LemonImage} alt="Lemon" />
          <h1>
            Você não é apenas um pagador de contas. Chega de pagar caro na conta
            de luz e não saber o porquê, ou de receber sua conta em papel todo
            mês e não entender nada do que está escrito. Acreditamos que o
            futuro é feito de decisões que tomamos agora e decidimos transformar
            a experiência com energia no Brasil. Somos incansáveis na busca das
            melhores soluções, por isso chega de consumir uma energia que faz
            mal para o nosso planeta. Com a Lemon, você sempre – e é sempre
            mesmo – vai ter uma energia mais barata, mais sustentável e mais
            digital pro seu negócio.
          </h1>
          {children}
        </Content>
      </DialogContent>
    </DialogContainer>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnOverlayClick: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Dialog;

import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import LemonImage from "../../assets/lemon.png";
import {
  DialogContainer,
  DialogOverlay,
  DialogContent,
  Image,
  Content,
  Title,
  CloseButton,
} from "./Dialog.styled";

const Dialog = ({ title, isOpen, onClose, closeOnOverlayClick, children }) => {
  const handleOverlayClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget && closeOnOverlayClick) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <DialogContainer isOpen={isOpen}>
      <DialogOverlay onClick={handleOverlayClick} />
      <DialogContent onKeyDown={handleKeyDown} tabIndex={0}>
        <Title>{title}</Title>
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
        <CloseButton onClick={onClose}>X</CloseButton>
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

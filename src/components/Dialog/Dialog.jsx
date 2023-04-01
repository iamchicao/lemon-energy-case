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
import styled from "styled-components";

//DialogContainer, DialogOverlay, DialogContent

export const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DialogOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const DialogContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 500px;
  max-width: 100%;
  z-index: 1000;
`;

// Criar uma estilizacao para a classe Image, a image deve ocupar 100% do espaço
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContent = styled.p`
  font-size: 18px;
`;

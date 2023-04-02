import styled from "styled-components";

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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const Content = styled.p`
  font-size: 8px;
  font-family: "Inter", sans-serif;
`;

export const Title = styled.h1`
  font-size: 22x;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;


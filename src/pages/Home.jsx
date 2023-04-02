import { useState } from "react";
import Header from "../components/Header";
import Dialog from "../components/Dialog";
import { Menu, Button } from "./Home.styled";	

export const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Header />
      <Menu>
        <Button onClick={handleOpen}>Abrir Dialog</Button>
      </Menu>
      {open && (
          <Dialog
            title="Sobre a Lemon"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
          </Dialog>
        )}
    </div>
  );
};

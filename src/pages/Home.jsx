import { useState } from "react";
import Header from "../components/Header";
import Dialog from "../components/Dialog";

export const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="menu">
        <button onClick={handleOpen}>Abrir Dialog</button>
        {open && (
          <Dialog
            title="Sobre a Lemon"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
          </Dialog>
        )}
      </div>
    </div>
  );
};

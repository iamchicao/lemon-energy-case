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
      {/* Menu que traz a opção de abrir o Dialog */}
      <div className="menu">
        <button onClick={handleOpen}>Abrir Dialog</button>
        <Dialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

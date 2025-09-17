import { useState, createContext } from "react";
export const FiguresContext = createContext();
export function FigureProvider({ children }) {
  const [figure_data, setFiguredata] = useState({
    time: 0,
    win: 0,
    losses: 0,
    total: 0,
  });

  return (
    <FiguresContext.Provider value={{ figure_data, setFiguredata }}>
      {children}
    </FiguresContext.Provider>
  );
}

import { createContext, useState } from "react";

export const LayoutRefContext = createContext({});

export const LayoutRefProvider = ({ children }) => {
  const [layoutRef, setLayoutRef] = useState(null);

  return (
    <LayoutRefContext.Provider value={{ layoutRef, setLayoutRef }}>
      {children}
    </LayoutRefContext.Provider>
  );
};

export default LayoutRefProvider;

import { useContext } from "react";
import { LayoutRefContext } from "../context/LayoutRefProvider";

const useLayoutRef = () => {
  return useContext(LayoutRefContext);
};

export default useLayoutRef;

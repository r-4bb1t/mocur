import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface DrawerContextProps {
  openedNodeIndex: string;
  setOpenedNodeIndex: Dispatch<SetStateAction<string>>;
}

export const DrawerContext = createContext<DrawerContextProps>({
  openedNodeIndex: "",
  setOpenedNodeIndex: () => {},
});

const DrawerContextProvider = ({ children }: { children: ReactNode }) => {
  const [openedNodeIndex, setOpenedNodeIndex] = useState("");
  return (
    <DrawerContext.Provider value={{ openedNodeIndex, setOpenedNodeIndex }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;

export const useDrawerContext = () => useContext(DrawerContext);

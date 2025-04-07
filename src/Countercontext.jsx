import { createContext, useContext } from "react";

export const Countercontext = createContext()

export const Contexthook = () => useContext(Countercontext)
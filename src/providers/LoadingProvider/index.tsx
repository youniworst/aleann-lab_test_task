import { createContext, useState, ReactNode, FC } from "react";
import { LoadingContextProps, LoadingProviderProps } from "./types";

export const LoadingContext = createContext<LoadingContextProps>({
  loading: false,
  setLoading: null,
});

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

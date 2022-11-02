import { Dispatch, ReactNode, SetStateAction } from "react";

export type LoadingContextProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>> | null;
};

export type LoadingProviderProps = {
  children: ReactNode;
};

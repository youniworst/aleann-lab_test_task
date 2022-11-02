import { ReactNode } from "react";
import { IJob } from "../../models/jobModel";

export type JobsDataContextProps = {
    totalList: IJob[];
};

export type JobsDataProviderProps = {
  children: ReactNode;
};

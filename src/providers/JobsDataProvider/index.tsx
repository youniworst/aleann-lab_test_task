import { createContext, useState, ReactNode, FC, useEffect } from "react";
import $api from "../../axios";
import { useLoading } from "../../hooks";
import { IJob } from "../../models/jobModel";
import { JobsDataContextProps, JobsDataProviderProps } from "./types";

export const JobsDataContext = createContext<JobsDataContextProps>({
    totalList: [],
});

export const JobsDataProvider: FC<JobsDataProviderProps> = ({ children }) => {
  const [totalList, settotalList] = useState<IJob[]>([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading && setLoading(true);
    $api
      .get("")
      .then((res) => {
        settotalList(res.data);
      })
      .finally(() => setLoading && setLoading(false));
  }, []);

  const value = { totalList };
  return (
    <JobsDataContext.Provider value={value}>
      {children}
    </JobsDataContext.Provider>
  );
};

import { useContext } from "react";
import { JobsDataContext } from "../providers";

export function useJobsData() {
  const context = useContext(JobsDataContext);
  if (!context) {
    throw new Error("useJobsData must be used within JobsDataProvider");
  }
  return context;
}
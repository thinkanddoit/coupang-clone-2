import { AxiosError } from "axios";
import { QueryKey, useQuery as useOriginQuery } from "react-query";

export const useQuery = <TResultData>(
  queryKey: QueryKey,
  queryFn: () => Promise<TResultData>,
  options?: any
) => {
  return useOriginQuery<TResultData, AxiosError>(queryKey, queryFn, options);
};

export const useMutation = () => {
  // useMutation 적용
};

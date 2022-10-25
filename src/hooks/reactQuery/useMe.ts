import { UserService } from "../../services";
import { UserInfo } from "../../types/userInfo";
import { useQuery } from "../useReactQuery";
import { queryKeys } from "./queryKeys";

export const useMe = () => {
  const { isError, isLoading, error, data } = useQuery<UserInfo>(
    queryKeys.ME,
    UserService.me
  );

  return { isError, isLoading, data, error };
};

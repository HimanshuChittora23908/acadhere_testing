import QUERY_KEYS from "./queryKeys";
import { useQuery } from "react-query";
import {
  getContestList,
  getHackathonList,
  getNoticeBoardList,
  getClassroomList,
} from "../services";

export const useContestList = (params) => {
  return useQuery(
    [QUERY_KEYS.GET_CONTEST_LIST, params.id],
    () => getContestList(params),
    {
      retry: false,
    }
  );
};

export const useHackathonList = (params) => {
  return useQuery(
    [QUERY_KEYS.GET_HACKATHON_LIST, params.id],
    () => getHackathonList(params),
    {
      retry: false,
    }
  );
};

export const useNoticeBoardList = (params) => {
  return useQuery(
    [QUERY_KEYS.GET_NOTICE_BOARD_LIST, params.id],
    () => getNoticeBoardList(params),
    {
      retry: false,
    }
  );
};

export const useClassroomList = (params) => {
  return useQuery(
    [QUERY_KEYS.GET_CLASSROOM_LIST, params.token],
    () => params.token,
    {
      retry: false,
    }
  );
};

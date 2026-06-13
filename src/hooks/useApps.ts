import { useQuery } from "@tanstack/react-query";

import { getApps } from "@/services/api";

export function useApps() {
  return useQuery({
    queryKey: ["apps"],

    queryFn: getApps,

    staleTime: 1000 * 60 * 5,
  });
}
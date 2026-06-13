import { useQuery } from "@tanstack/react-query";

import { getGraph } from "@/services/api";

export function useGraph(
  appId: string
) {
  return useQuery({
    queryKey: [
      "graph",
      appId,
    ],

    queryFn: () =>
      getGraph(appId),

    enabled: !!appId,

    staleTime:
      1000 * 60 * 5,
  });
}
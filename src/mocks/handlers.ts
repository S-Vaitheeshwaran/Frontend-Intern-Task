import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/apps", async () => {
    await new Promise((r) => setTimeout(r, 1000));

    return HttpResponse.json([
      {
        id: "1",
        name: "supertokens-golang",
      },
      {
        id: "2",
        name: "supertokens-java",
      },
      {
        id: "3",
        name: "supertokens-python",
      },
    ]);
  }),

  http.get("/api/apps/:id/graph", async () => {
    await new Promise((r) => setTimeout(r, 1200));

    return HttpResponse.json({
      nodes: [
        {
          id: "1",
          position: { x: 100, y: 100 },
          data: {
            label: "Redis",
            status: "Healthy",
            value: 20,
          },
        },
        {
          id: "2",
          position: { x: 500, y: 100 },
          data: {
            label: "Postgres",
            status: "Healthy",
            value: 35,
          },
        },
        {
          id: "3",
          position: { x: 300, y: 350 },
          data: {
            label: "MongoDB",
            status: "Down",
            value: 50,
          },
        },
      ],

      edges: [
        {
          id: "e1-2",
          source: "1",
          target: "2",
        },
        {
          id: "e2-3",
          source: "2",
          target: "3",
        },
      ],
    });
  }),
];
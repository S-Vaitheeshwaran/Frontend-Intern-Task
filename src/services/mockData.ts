import type {
  AppItem,
  GraphResponse,
} from "@/types/graph";

export const apps: AppItem[] = [
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
  {
    id: "4",
    name: "supertokens-ruby",
  },
  {
    id: "5",
    name: "supertokens-go",
  },
];

export const graphs: Record<
  string,
  GraphResponse
> = {
  "1": {
    nodes: [
      {
        id: "redis",
        position: {
          x: 420,
          y: 500,
        },
        data: {
          label: "Redis",
          status: "Down",
          value: 40,
          description: "Redis Cache",
        },
        type: "service",
      },

      {
        id: "postgres",
        position: {
          x: 980,
          y: 180,
        },
        data: {
          label: "Postgres",
          status: "Healthy",
          value: 20,
          description: "Primary Database",
        },
        type: "service",
      },

      {
        id: "mongodb",
        position: {
          x: 1080,
          y: 620,
        },
        data: {
          label: "MongoDB",
          status: "Down",
          value: 50,
          description: "Analytics Database",
        },
        type: "service",
      },
    ],

    edges: [],
  },

  "2": {
    nodes: [
      {
        id: "java-api",
        position: {
          x: 700,
          y: 350,
        },
        data: {
          label: "Java API",
          status: "Healthy",
          value: 30,
          description: "Spring Boot Service",
        },
        type: "service",
      },
    ],

    edges: [],
  },

  "3": {
    nodes: [
      {
        id: "python-api",
        position: {
          x: 700,
          y: 350,
        },
        data: {
          label: "Python API",
          status: "Healthy",
          value: 35,
          description: "FastAPI Service",
        },
        type: "service",
      },
    ],

    edges: [],
  },

  "4": {
    nodes: [
      {
        id: "ruby-api",
        position: {
          x: 700,
          y: 350,
        },
        data: {
          label: "Ruby API",
          status: "Healthy",
          value: 25,
          description: "Ruby on Rails Service",
        },
        type: "service",
      },
    ],

    edges: [],
  },

  "5": {
    nodes: [
      {
        id: "go-api",
        position: {
          x: 700,
          y: 350,
        },
        data: {
          label: "Go API",
          status: "Healthy",
          value: 15,
          description: "Go Microservice",
        },
        type: "service",
      },
    ],

    edges: [],
  },
};
# Frontend Engineering Intern Task – Application Graph Builder

## Overview

This project is a frontend implementation of an Application Graph Builder dashboard built using React, TypeScript, React Flow, React Query, Zustand, and Tailwind CSS.

The application visualizes infrastructure services such as PostgreSQL, Redis, and MongoDB in a graph-based layout while providing an interactive sidebar for application selection.

## Features

* Application sidebar with search functionality
* Service visualization using React Flow
* Custom service cards for:

  * PostgreSQL
  * Redis
  * MongoDB
* State management using Zustand
* Data fetching and caching using React Query
* Responsive dark-themed UI
* TypeScript support throughout the project
* Component-based architecture

## Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Styling

* Tailwind CSS

### State Management

* Zustand

### Data Fetching

* React Query (@tanstack/react-query)

### Graph Visualization

* React Flow (@xyflow/react)

### Icons

* Lucide React
* React Icons

## Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
cd app-graph-builder
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Architecture

### React Query

Used for managing and caching application graph data.

Custom Hooks:

* useApps()
* useGraph()

### Zustand

Used for global state management.

Stores:

* selectedAppId
* selectedNodeId

### React Flow

Used to render graph nodes and relationships.

Custom Node:

* ServiceNode

Graph Container:

* GraphCanvas

## Design Decisions

* Component-based architecture for maintainability.
* Zustand chosen for lightweight global state management.
* React Query chosen for efficient data fetching and caching.
* React Flow chosen for graph visualization and node management.
* Tailwind CSS used for rapid and consistent UI development.

## Future Improvements

* Real backend integration
* Drag-and-drop node creation
* Dynamic service metrics
* Node editing capabilities
* Graph persistence
* Authentication and user management

## Author

Vaitheeshwaran S

Frontend Engineering Intern Assignment Submission

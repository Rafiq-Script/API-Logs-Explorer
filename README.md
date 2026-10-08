# API Logs Project

A professional React, Vite, and TypeScript starter template for an API event log.

The project intentionally contains no API endpoints, active `fetch` calls, sample records, or credentials. The browser displays a short guide for connecting your own data source.

## Run locally

Node.js LTS 20 or later is required.

```powershell
npm install
npm run dev
```

Open the address printed by Vite after the server starts, usually `http://localhost:5173`.

## Build for a server

```powershell
npm run build
```

The static production files will be created in `dist/`. Deploy this directory behind IIS, Nginx, or any other static web server.

## Connect an API

1. Copy `src/api.example.ts` to `src/api.ts`.
2. Uncomment the ready-to-adapt `fetch` example and adjust its types and response mapping for your API.
3. Copy `.env.example` to `.env.local` and set your API endpoint. Add a token only if your API requires one.
4. Import `getApiLogs` into `src/App.tsx` and render the records in your log table.

`src/api.example.ts` is entirely commented out. The application makes no network requests until you explicitly enable and connect that code.

The `.gitignore` file excludes `node_modules`, `dist`, archives, and `.env` files.

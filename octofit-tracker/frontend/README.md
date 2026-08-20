# OctoFit Tracker frontend

The presentation tier uses React 19, Vite, Bootstrap, and `react-router-dom`.

## API configuration

In Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` (copy `.env.example` and replace the placeholder):

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend then calls `https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/...`.
When the variable is unset, a browser opened at localhost uses `http://localhost:8000/api/...`; a Codespaces preview uses the Vite `/api` proxy to reach port `8000`, avoiding `localhost` URL mismatches.

## Run locally

Start the API in one terminal and the presentation tier in another:

```bash
npm run dev --prefix octofit-tracker/backend
npm run dev --prefix octofit-tracker/frontend
```

The frontend expects the API to be running on port `8000`.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

import express from 'express';
import cors from 'cors';
import './config/database.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

type Resource = Record<string, unknown>;


const resources: Record<string, Resource[]> = {
  users: [],
  teams: [],
  activities: [],
  leaderboard: [],
  workouts: [],
};

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-backend', apiBaseUrl });
});

for (const resourceName of Object.keys(resources)) {
  const resourcePath = `/api/${resourceName}`;

  app.get(`${resourcePath}/`, (_request, response) => {
    response.json(resources[resourceName]);
  });

  app.post(`${resourcePath}/`, (request, response) => {
    const resource = {
      id: crypto.randomUUID(),
      ...request.body,
    };

    resources[resourceName].push(resource);
    response.status(201).json(resource);
  });
}

app.use((_request, response) => {
  response.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});
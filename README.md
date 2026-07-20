# Florida Life Insurance Workbook Practice Quiz

This project uses a Node.js backend so each user has a separate account profile, practice history, chapter preferences, and adaptive question focus.

## Run locally

1. Install Node.js 20+
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000`

## Azure-first deployment (recommended)

Use Azure App Service with your free trial and $200 credit.

1. In VS Code, sign in with `Azure: Sign In`
2. Create App Service (Node 20, Free tier F1)
3. Add GitHub secrets:
	- `AZURE_WEBAPP_NAME`
	- `AZURE_WEBAPP_PUBLISH_PROFILE`
4. Push to `main` to trigger `.github/workflows/azure-webapp-deploy.yml`

Detailed steps are in [AZURE_SETUP.md](AZURE_SETUP.md).

## Existing static deploy path

GitHub Pages workflow is still present for static hosting, but full account-based functionality requires the Node backend.

## Current storage model

- User data is stored in `data/users.json`
- This works for initial rollout and testing
- For long-term production scale, migrate to Azure Database (PostgreSQL or Cosmos DB)


# Azure Setup (VS Code + Free Trial Credits)

This project can be deployed to Azure App Service using your free trial and $200 credit.

## 1. Connect Azure Account in VS Code

1. Install the recommended extensions in this workspace.
2. Open Command Palette and run: `Azure: Sign In`.
3. Complete browser login with your Azure account.
4. In the Azure panel, confirm your subscription appears.

## 2. Create Azure Resources

Use these values unless you prefer different names:

- Resource group: `rg-life-quiz`
- App Service plan: `asp-life-quiz-free`
- Web app name: `<unique-name>-life-quiz`
- Runtime: `Node 20 LTS`
- Region: nearest region to your users

In VS Code:

1. Open Azure view.
2. Right-click "App Service" and choose "Create New Web App...".
3. Select your subscription and create/select `rg-life-quiz`.
4. Choose Node runtime.
5. Use Free tier (`F1`) initially.

## 3. Configure App Settings

In App Service > Configuration, set:

- `WEBSITE_NODE_DEFAULT_VERSION` = `~20`
- `SCM_DO_BUILD_DURING_DEPLOYMENT` = `true`

## 4. GitHub Actions Deploy

This repository includes `azure-webapp-deploy.yml` workflow.

Set these secrets in GitHub repo settings:

- `AZURE_WEBAPP_PUBLISH_PROFILE`: publish profile XML from Azure Web App
- `AZURE_WEBAPP_NAME`: your exact Azure web app name

Then push to `main` to deploy automatically.

## 5. Verify Deployment

1. Open `https://<your-webapp-name>.azurewebsites.net`.
2. Sign in to quiz with a test account.
3. Complete a short session and submit.
4. Sign out and sign in with another name to verify account separation.

## Notes for Free Trial

- App Service Free (`F1`) is enough for initial testing.
- Your `$200` credit can cover upgrades later (B1 or higher) and database services.
- For long-term account persistence at scale, replace file storage with Azure Database (PostgreSQL or Cosmos DB).

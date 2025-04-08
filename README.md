# Challenge Frontend
## Prerequisites
- Node 22+
- npm 11.2+
## Execute the project locally

```bash
npm  i
npm run dev
```
## Simulate the deploy environment
``` bash
npm run build
npm run start
```
## Run Cypress tests
``` bash
npm run cy:run
```
## Deploy
The project is integrated with GitHub actions, and every time a commit is realized to the main branch, a pipeline is triggered in GitHub Actions, that runs the Cypress test .If all tests pass, the project is deployed to Vercel.

The project can be accessed through this link: [https://front-challenge-phi.vercel.app](https://front-challenge-phi.vercel.app)

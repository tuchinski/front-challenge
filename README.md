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
O projeto está integrado com o github, e toda vez que um commit é realizado na main, é iniciada uma pipeline no github actions, que roda os testes do cypress e caso todos os testes estejam ok, realiza o deploy para o vercel.

Podemos acessar o projeto atual através deste link: https://front-challenge-phi.vercel.app

The project is integrated with GitHub actions, and every time a commit is realized to the main branch, a pipeline is triggered in GitHub Actions, that runs the Cypress test .If all tests pass, the project is deployed to Vercel.

The project can be accessed through this link: [https://front-challenge-phi.vercel.app](https://front-challenge-phi.vercel.app)
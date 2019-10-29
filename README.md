## GraphQL CLI Basic Full stack Template

Starter backend template using GraphQL CLI.

### Usage
The project has been created using GraphQL CLI. Run the project using the following steps. 
- Start the database
```
docker-compose up -d
```
- Generate resources(schema and resolvers) and create database
```
yarn graphql generate --db
yarn graphql generate --backend
```
- Start the server
```
yarn start
```

- Generate queries, mutations and subscriptions for client-side project
```
yarn graphql generate --client
```
- Generate React components
```
yarn graphql codegen
```
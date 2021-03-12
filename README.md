# CC18 TypeORM Review

Steps to run this project:

1. Run `npm i` command
2. Create a Database
3. Setup database settings inside `ormconfig.json` file

# Basic Review

## 1. Open the Tasks.ts (inside the entity folder) - create the columns following the instructions in the comments.

## 2. Open index.ts (src/index.ts) Import createConnection from typeorm and run the server (I've installed nodemon - if you want to use hot-reloading).

- Your database should have the columns you have created on step #1

## 3. Open controller/TasksController.ts 

 Write the body of getTasks - this should return all tasks from the database
 
 I have already imported and set an endpoint for your controler in src/routes.ts
 
 - Use Postman or Insomnia to test your response - it should be an empty array, status 200.

## 4. Do the same thing for the post request (you should be able to add a new task)

- This time instead of using Postman, open run the front-end server and use the buttoms/forms to interact w/ your back-end
- CORS error? Fix it!

# Advanced/Optional Homework

- Do the same for Editing Taks - test using the front end
- Implement the logic for tasks completed and delete tasks - you have to write the front end logic for those as well.

Good job on your first month!!!
Keep hacking



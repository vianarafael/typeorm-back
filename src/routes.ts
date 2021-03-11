import { Router, Request, Response } from 'express';

const routes = Router();


routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "What's up CC18?" })
})

export default routes;
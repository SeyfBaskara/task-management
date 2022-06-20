import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (_req: Request, res: Response) => {
   res.send('Express + TypeScript Server')
})

export default app

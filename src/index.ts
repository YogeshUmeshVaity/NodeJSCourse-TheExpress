import express, { NextFunction, Request, Response } from 'express'

const app = express()

app.get(
  '/user/:id',
  (request: Request, response: Response, next: NextFunction) => {
    console.log(`The user id is ${request.params.id}`)
    next()
  },
  (request: Request, response: Response) => {
    response.send(`Requested user id is ${request.params.id} `)
  }
)

app.listen(3000)

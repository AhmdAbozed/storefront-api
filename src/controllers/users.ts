import { user, usersStore } from "../models/users.js"
import express from "express"
import { Request, Response } from 'express'

const store = new usersStore()

const create = async (req: Request, res: Response) => {
  try {
    const user: user = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    }
    console.log(user)
    const suser = await store.create(user)

    res.send(JSON.stringify(suser));
  }
  catch (err) {
    throw new Error(`user creation error:${err}`)
  }
}

const index = async (_req: Request, res: Response) => {
  try {
    const users = await store.index()

    res.send(JSON.stringify(users));
  }
  catch (err) {
    throw new Error(`users index error: ${err}`)
  }
}


const remove = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    const user = await store.delete(req.params.id)

    res.send(JSON.stringify(user));
  }
  catch (err) {
    throw new Error(`user deletion error:${err}`)
  }
}

const read = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    const user = await store.read(req.params.id)

    res.send(JSON.stringify(user));
  }
  catch (err) {
    throw new Error(`user deletion error:${err}`)
  }
}

const usersRoutes = (app: express.Application)=>{
  app.get('/users', index);
  app.get('/users/:id', read);
  app.post('/users', create);
  app.post('/users/remove/:id', remove);
}

export default usersRoutes

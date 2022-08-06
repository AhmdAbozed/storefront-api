import { user, usersStore } from "../models/users.js"
import express from "express"
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const store = new usersStore()

const { tokenSecret } = process.env

const create = async (req: Request, res: Response) => {
  try {
    const user: user = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    }

    const suser = await store.create(user)
    const token = jwt.sign({ user: suser }, tokenSecret as string)
    res.setHeader('Authorization', `Bearer ${token}`)
    res.send(suser);
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
    const user = await store.delete(req.params.id)

    res.send(JSON.stringify(user));
  }
  catch (err) {
    throw new Error(`user deletion error:${err}`)
  }
}

const read = async (req: Request, res: Response) => {
  try {
    const user = await store.read(req.params.id)

    res.send(JSON.stringify(user));
  }
  catch (err) {
    throw new Error(`user deletion error:${err}`)
  }
}

const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
  try {

    if (req.headers.authorization) {
      const token: string = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, tokenSecret as string)
      next()
    } else throw("error");
  } catch (error) {
    res.status(401)
    res.send("JWT auth failed.")
  }
}

const usersRoutes = (app: express.Application) => {
  app.get('/users', verifyAuthToken, index);
  app.get('/users/:id', verifyAuthToken, read);
  app.post('/users', create);
  app.post('/users/remove/:id', verifyAuthToken, remove);
}

export { usersRoutes, verifyAuthToken }

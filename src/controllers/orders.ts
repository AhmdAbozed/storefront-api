
import { order, ordersStore } from "../models/orders.js"
import express from "express"
import { Request, Response } from 'express'
import { verifyAuthToken } from "./users.js"

const store = new ordersStore()

const endpoint = async (req: Request, res: Response)=>{
  try{
    res.send("Orders endpoint")
  }
  catch (err) {
    throw new Error(`order endpoint error:${err}`)
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const sproduct = await store.create(req.params.user_id, "active")

    res.send(JSON.stringify(sproduct));
  }
  catch (err) {
    throw new Error(`order creation error:${err}`)
  }
}

const ordersByUser = async (req: Request, res: Response) => {
    try {
      const product = await store.ordersByUser(req.params.id)
  
      res.send(JSON.stringify(product));
    }
    catch (err) {
      throw new Error(`ordersByUser error:${err}`)
    }
  }

  const productsRoutes = (app: express.Application)=>{
    app.get('/orders/', verifyAuthToken, endpoint )
    app.get('/orders/:id', verifyAuthToken, ordersByUser);
    app.post('/orders/:user_id', verifyAuthToken, create);
  }

  export default productsRoutes;
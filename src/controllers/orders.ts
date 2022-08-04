
import { order, ordersStore } from "../models/orders.js"
import express from "express"
import { Request, Response } from 'express'

const store = new ordersStore()

const create = async (req: Request, res: Response) => {
  try {
    const sproduct = await store.create(req.params.user_id)

    res.send(JSON.stringify(sproduct));
  }
  catch (err) {
    throw new Error(`order creation error:${err}`)
  }
}

const ordersByUser = async (req: Request, res: Response) => {
    try {
      console.log(req.params.id)
      const product = await store.ordersByUser(req.params.id)
  
      res.send(JSON.stringify(product));
    }
    catch (err) {
      throw new Error(`ordersByUser error:${err}`)
    }
  }

  const productsRoutes = (app: express.Application)=>{
    app.get('/orders/:id', ordersByUser);
    app.post('/orders/:user_id', create);
  }

  export default productsRoutes;
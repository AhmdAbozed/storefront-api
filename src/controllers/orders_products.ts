import { order_product, orders_productsStore } from "../models/orders_products.js"
import express from "express"
import { Request, Response } from 'express'

const store = new orders_productsStore()

const endpoint = async (req: Request, res: Response)=>{
  try{
    res.send("Orders_products endpoint")
  }
  catch (err) {
    throw new Error(`order endpoint error:${err}`)
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const sproduct = await store.create(req.params.user_id, req.params.order_id, req.params.product_id, req.params.quantity)

    res.send(JSON.stringify(sproduct));
  }
  catch (err) {
    throw new Error(`order creation error:${err}`)
  }
}

const productsByOrder = async (req: Request, res: Response) => {
  try {

    const product = await store.productsByOrder(req.params.id)

    res.send(JSON.stringify(product));
  }
  catch (err) {
    throw new Error(`ordersByUser error:${err}`)
  }
}

const orders_productsRoutes = (app: express.Application) => {
  app.get('/orders_products', endpoint)
  app.get('/orders_products/:id', productsByOrder);
  app.post('/orders_products/:user_id&:order_id&:product_id&:quantity', create);
}

export default orders_productsRoutes;
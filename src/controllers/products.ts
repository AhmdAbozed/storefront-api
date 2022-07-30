import { product, productsStore } from "../models/products.js"
import express from "express"
import { Request, Response } from 'express'

const store = new productsStore()

const index = async (_req: Request, res: Response) => {
  try {
    const products = await store.index()

    res.send(JSON.stringify(products));
  }
  catch (err) {
    throw new Error(`products index error: ${err}`)
  }
}

const create = async (req: Request, res: Response) => {
  try {
    console.log(req)
    const product: product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    }
    console.log(product)
    const sproduct = await store.create(product)

    res.send(JSON.stringify(product));
  }
  catch (err) {
    throw new Error(`product creation error:${err}`)
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    const product = await store.delete(req.params.id)

    res.send(JSON.stringify(product));
  }
  catch (err) {
    throw new Error(`product deletion error:${err}`)
  }
}

const productsRoutes = (app: express.Application)=>{
  app.get('/products', index);
  app.post('/products', create);
  app.post('/products/remove/:id', remove);
}

export default productsRoutes

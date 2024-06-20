from fastapi import FastAPI,  Depends
from sqlalchemy.orm import Session
from database import  database
from models import products, orders
from schemas import Product, ProductCreate, Order, OrderCreate


app = FastAPI()


async def get_db():
    async with database.transaction():
        yield database

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.post("/products/", response_model=Product)
async def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    query = products.insert().values(name=product.name, price=product.price, quantity=product.quantity, image_url=product.image_url)
    last_record_id = await db.execute(query)
    return {**product.dict(), "id": last_record_id}

@app.get("/products/", response_model="List[Product]")  
async def read_products(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    query = products.select().offset(skip).limit(limit)
    return await db.fetch_all(query)

@app.post("/orders/", response_model=Order)
async def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    query = orders.insert().values(product_id=order.product_id, customer_name=order.customer_name, customer_email=order.customer_email, quantity=order.quantity)
    last_record_id = await db.execute(query)
    return {**order.dict(), "id": last_record_id}

@app.get("/orders/", response_model="List[Order]")  
async def read_orders(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    query = orders.select().offset(skip).limit(limit)
    return await db.fetch_all(query)

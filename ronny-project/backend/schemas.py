from pydantic import BaseModel

class ProductBase(BaseModel):
    name: str
    price: float
    quantity: int
    image_url: str

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True

class OrderBase(BaseModel):
    product_id: int
    customer_name: str
    customer_email: str
    quantity: int

class OrderCreate(OrderBase):
    pass

class Order(OrderBase):
    id: int

    class Config:
        orm_mode = True

from sqlalchemy import Table, Column, Integer, String, Float, ForeignKey, MetaData
from database import metadata, engine

products = Table(
    "products",
    metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("name", String, index=True),
    Column("price", Float),
    Column("quantity", Integer),
    Column("image_url", String)
)

orders = Table(
    "orders",
    metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("product_id", Integer, ForeignKey("products.id")),
    Column("customer_name", String),
    Column("customer_email", String),
    Column("quantity", Integer)
)

metadata.create_all(engine)

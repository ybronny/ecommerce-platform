from sqlalchemy import create_engine, MetaData
from database import Database

DATABASE_URL = "sqlite:///./electronics_store.db"

database = Database(DATABASE_URL)
metadata = MetaData()

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
metadata.create_all(engine)

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()


origins = [
    "http://localhost:3000",  
]


class Electronic(BaseModel):
    id: int
    name: str
    price: float
    quantity: int
    image_url:str

class Purchase(BaseModel):
    image_url: str
    id: int
    name: str
    price: float

electronics = [
    Electronic(image_url="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbIarKR_VueCAI_futP-Tl4TfAPQS80BSfLERwYwRjRHwFpGHzZI5Xd9WPp0lMxZvl1YruKlbxUkxp6LDtNhPqdwZmbgOHvRGDGc3hlEDD3v_J4Ac8yKpc9CHZEYLOHXUencr5i_8&usqp=CAc", id=1, name="Laptop", price=999.99, quantity=20),
    Electronic(image_url="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTtOOxdZ6jmWFgy3bjqWt36in-qpUM4QApyD1UpL-GuI1mdNP92PiJLeDFDtuY3j2FSLjC2-yLiRxFJYIFIbzi5swIr9qQlIqx26s0UIPOsl9ExzDORR95o7gf_iG0HcUj5vz5QHDWvJNw&usqp=CAc",id=2, name="Smartphone", price=499.99, quantity=20),
    Electronic(image_url="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQz1nEZa-SiU7LUBX4CPkuRKizelzTKcZULeHh7HN3F-VdUho49BkLYlUA6YaeFANMApnH9ieU7HPS_Z8fSJPkWzDjggKdox6mPWz7Paz93R7ikaKueTky_8zvZ6Anpo7iwOVdW64SxCA&usqp=CAc",id=3, name="Tablet", price=299.99, quantity=20),
    Electronic(image_url="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAW9_qQOP9zG0Sbe-Vbs--AjzIlYSZkLAw0BykJhfSI2kLawhW9WJ-z562JgKXDdHTEGnHgJCWZKuWEcz_mlnS9earjbN9lGJi6dpvilJI9Bz_SkMExxDHSH8uTEyIiqk6pDXBZA&usqp=CAc",d=4, name="Smartwatch", price=199.99, quantity=20),
    Electronic(image_url="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeFXWanibRa_CT7-ip5MkOAuULlEUF5FR2O1NAex_Jsd0oPolDtRv6HMVddopKvHELD0TS7XM8I7asFbk8CCSYDHcPrz6p1ycUCZvcjPs1i2wW1-iNE9XDIj_PBU9EIR2SxajBHhU&usqp=CAc",id=5, name="Headphones", price=99.99, quantity=20),
    Electronic(image_url= 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnlBLgj8boWlC8PDr49_53Lu2Pzzb1yI7U7DzH-ROF9lEU2a4xSjxkfAO8RI59eaJ5A97cry8Akejmm3p7titH7eeMtsh4nC1egBopwoprtM15qJ86MwiMDZY645sW&usqp=CAc', id= 6, name= 'Television', price= 250.99, quantity= 20),
    Electronic( image_url= 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFzHYuARwS3AoF23URFVp6cEUSe64gu0B9Y5fRs8T0RRyT1wqk', id= 7, name= 'Earphones', price=17.90, quantity=20),
    Electronic( image_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8LSMpkMRtR5QSWMtZyMm5RO9uaYxlCGtwAttZ_ZKZiJSJ7Db7uqm&usqp=CAE&s', id= 8, name= 'Earpods', price= 210.20, quantity=20 ),
    Electronic(image_url= 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsLW38-hDBC_To8xD3MtktKTQpIUU1GDhnZA7bWs2dpIGQZg4pY3RhJ1_sizEEdHQMrRHfpTFuX_VsqY0xlPDu3KVgd45aDrGhUhXXP3VlNG2yJsXQCm_vKuwaXzeqThL7r-pX4c8&usqp=CAc', id= 9, name= 'Playstation 5', price= 600.50, quantity=20 ),
    Electronic( image_url='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0LNtHB2WXyiVIFnRjclAIW0AXPSqxAfYuA3fnAgCvjKRTk35-MR0Pv5xp5gnj24keUTCOvXIyQUWwPMvnthQzpcLY6wVbtzkE3Mok2v2ycTJtNbHovTwHHRGE15McnZX4aQ6i--A&usqp=CAc', id= 10, name= 'Fridge', price=499.00, quantity=20),
    Electronic( image_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2S7c61hEnxdX3JGzDw0HNzv95En8RS37mob_3umPgPhCb9XDRHXst&usqp=CAE&s', id=11, name= 'Charger block', price= 15.00, quantity= 20),
    Electronic(image_url= 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeGKeVUAVTLO-knldRBx43kUnGeafqqBtX-uDsOew6TZwo1RUFAWuveo7U0AUzbUMjLNn0TNQahEBR9ZjV-8GqSamSlnBs6RvvFxYo5NLr72ImV6OiqzxhRjYaYmMAYcu0WwbRgao&usqp=CAc', id=12, name= 'Microwaves', price=92.00, quantity=20)
    

]

cart: List[Purchase] = []

@app.get("/electronics", response_model=List[Electronic])
def get_electronics():
    return electronics

@app.post("/buy/{item_id}", response_model=Purchase)
def buy_item(item_id: int):
    for item in electronics:
        if item.id == item_id:
            if item.quantity > 0:
                item.quantity -= 1
                purchase = Purchase(id=item.id, name=item.name, price=item.price)
                cart.append(purchase)
                return purchase
            else:
                raise HTTPException(status_code=400, detail="Item out of stock")
    raise HTTPException(status_code=404, detail="Item not found")

@app.get("/cart", response_model=List[Purchase])
def get_cart():
    return cart

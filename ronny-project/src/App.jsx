import React, { useState } from 'react';
import { SimpleGrid, Container, Text, Stack, List, ListItem, Box, Image, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import ElectronicsCard from '../src/ElectronicsCard';
import "../src/index.css"

const initialElectronics = [
  { image_url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbIarKR_VueCAI_futP-Tl4TfAPQS80BSfLERwYwRjRHwFpGHzZI5Xd9WPp0lMxZvl1YruKlbxUkxp6LDtNhPqdwZmbgOHvRGDGc3hlEDD3v_J4Ac8yKpc9CHZEYLOHXUencr5i_8&usqp=CAc", id: 1, name: 'Laptop', price: 999.99, quantity: 30 },
  { image_url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTtOOxdZ6jmWFgy3bjqWt36in-qpUM4QApyD1UpL-GuI1mdNP92PiJLeDFDtuY3j2FSLjC2-yLiRxFJYIFIbzi5swIr9qQlIqx26s0UIPOsl9ExzDORR95o7gf_iG0HcUj5vz5QHDWvJNw&usqp=CAc', id: 2, name: 'Smartphone', price: 599.99, quantity: 25 },
  { image_url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQz1nEZa-SiU7LUBX4CPkuRKizelzTKcZULeHh7HN3F-VdUho49BkLYlUA6YaeFANMApnH9ieU7HPS_Z8fSJPkWzDjggKdox6mPWz7Paz93R7ikaKueTky_8zvZ6Anpo7iwOVdW64SxCA&usqp=CAc', id: 3, name: 'Tablet', price: 299.99, quantity: 20 },
  { image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAW9_qQOP9zG0Sbe-Vbs--AjzIlYSZkLAw0BykJhfSI2kLawhW9WJ-z562JgKXDdHTEGnHgJCWZKuWEcz_mlnS9earjbN9lGJi6dpvilJI9Bz_SkMExxDHSH8uTEyIiqk6pDXBZA&usqp=CAc', id: 4, name: 'Smartwatch', price: 199.99, quantity: 20 },
  { image_url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeFXWanibRa_CT7-ip5MkOAuULlEUF5FR2O1NAex_Jsd0oPolDtRv6HMVddopKvHELD0TS7XM8I7asFbk8CCSYDHcPrz6p1ycUCZvcjPs1i2wW1-iNE9XDIj_PBU9EIR2SxajBHhU&usqp=CAc', id: 5, name: 'Headphones', price: 149.99, quantity: 20 },
  { image_url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnlBLgj8boWlC8PDr49_53Lu2Pzzb1yI7U7DzH-ROF9lEU2a4xSjxkfAO8RI59eaJ5A97cry8Akejmm3p7titH7eeMtsh4nC1egBopwoprtM15qJ86MwiMDZY645sW&usqp=CAc', id: 6, name: 'Television', price: 250.99, quantity: 20 },
  { image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFzHYuARwS3AoF23URFVp6cEUSe64gu0B9Y5fRs8T0RRyT1wqk', id: 7, name: 'Earphones', price: 17.90, quantity: 20 },
  { image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8LSMpkMRtR5QSWMtZyMm5RO9uaYxlCGtwAttZ_ZKZiJSJ7Db7uqm&usqp=CAE&s', id: 8, name: 'Earpods', price: 210.20, quantity: 20 },
  { image_url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsLW38-hDBC_To8xD3MtktKTQpIUU1GDhnZA7bWs2dpIGQZg4pY3RhJ1_sizEEdHQMrRHfpTFuX_VsqY0xlPDu3KVgd45aDrGhUhXXP3VlNG2yJsXQCm_vKuwaXzeqThL7r-pX4c8&usqp=CAc', id: 9, name: 'Playstation 5', price: 600.50, quantity: 20 },
  { image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0LNtHB2WXyiVIFnRjclAIW0AXPSqxAfYuA3fnAgCvjKRTk35-MR0Pv5xp5gnj24keUTCOvXIyQUWwPMvnthQzpcLY6wVbtzkE3Mok2v2ycTJtNbHovTwHHRGE15McnZX4aQ6i--A&usqp=CAc', id: 10, name: 'Fridge', price: 499.00, quantity: 20 },
  { image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2S7c61hEnxdX3JGzDw0HNzv95En8RS37mob_3umPgPhCb9XDRHXst&usqp=CAE&s', id: 11, name: 'Charger block', price: 15.00, quantity: 20 },
  { image_url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeGKeVUAVTLO-knldRBx43kUnGeafqqBtX-uDsOew6TZwo1RUFAWuveo7U0AUzbUMjLNn0TNQahEBR9ZjV-8GqSamSlnBs6RvvFxYo5NLr72ImV6OiqzxhRjYaYmMAYcu0WwbRgao&usqp=CAc', id: 12, name: 'Microwaves', price: 92.00, quantity: 20 },
];

function App() {
  const [electronics, setElectronics] = useState(initialElectronics);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', address: '' });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleBuy = (item) => {
    setElectronics(electronics.map(el => el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el));
    setCart([...cart, item]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const filteredCards = electronics.filter((item) =>
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
       <Text fontSize="4xl" mt="4" mb="8" color={'purple'} position={"block"}>WELCOME TO THE BEST-SELLING MOBILE SHOP</Text>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success" type="submit" >Search</button>
          </form>
        </div>
      </nav>
      <Container maxW="container.xl">
  
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredCards.map(item => (
            <ElectronicsCard key={item.id} item={item} onBuy={handleBuy} />
          ))}
        </SimpleGrid>
        <Text fontSize="3xl" mt="8">Cart</Text>
        <Stack mt="4">
          <List spacing={3}>
            {cart.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <Image src={item.image_url} alt={item.name} boxSize="50px" objectFit="cover" mr="4" />
                <Box>
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                </Box>
              </ListItem>
            ))}
          </List>
          <Text fontSize="2xl" mt="4">Total: ${totalPrice.toFixed(2)}</Text>
        </Stack>
        <Text fontSize="3xl" mt="8">Order Details</Text>
        <form onSubmit={handleSubmitOrder}>
          <Stack spacing={4} mt="4">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button colorScheme="purple" type="submit">Submit Order</Button>
          </Stack>
        </form>
        {orderSubmitted && (
          <Box mt="8" p="4" bg="green.100" borderRadius="md">
            <Text fontSize="2xl">Order Submitted Successfully!</Text>
            <Text>Name: {customerInfo.name}</Text>
            <Text>Email: {customerInfo.email}</Text>
            <Text>Address: {customerInfo.address}</Text>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default App;

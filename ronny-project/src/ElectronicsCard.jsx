import { Box, Image, Text, Button, Stack } from '@chakra-ui/react';

const ElectronicsCard = ({ item, onBuy }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" m="4">
    <Image src={item.image_url} alt={item.name} boxSize="200px" objectFit="cover" />
    <Stack mt="6" spacing="3">
      <Text fontWeight="bold" fontSize="xl">{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Button colorScheme="purple" onClick={() => onBuy(item)} disabled={item.quantity <= 0}>
        {item.quantity > 0 ? 'Buy' : 'Out of Stock'}
      </Button>
    </Stack>
  </Box>
  
);


export default ElectronicsCard;

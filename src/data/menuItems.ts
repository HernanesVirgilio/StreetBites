import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Hamburguers
  {
    id: '1',
    name: 'Burguer Clássico',
    description: 'Carne bovina, alface, tomate, cebola, queijo e molho especial',
    price: 120,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'hamburger'
  },
  {
    id: '2',
    name: 'Burguer Deluxe',
    description: 'Dupla carne, bacon, queijo, cogumelos, alface e molho barbecue',
    price: 180,
    image: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'hamburger'
  },
  {
    id: '3',
    name: 'Burguer Frango',
    description: 'Peito de frango grelhado, alface, tomate e maionese',
    price: 110,
    image: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'hamburger'
  },
  {
    id: '4',
    name: 'Burguer Vegetariano',
    description: 'Hambúrguer de vegetais, alface, tomate, abacate e molho especial',
    price: 95,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'hamburger'
  },
  
  // Sanduíches
  {
    id: '5',
    name: 'Sanduíche Club',
    description: 'Peru, bacon, alface, tomate, queijo em pão tostado',
    price: 85,
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sandwich'
  },
  {
    id: '6',
    name: 'Sanduíche Mediterrâneo',
    description: 'Frango grelhado, queijo feta, azeitonas, tomate e pesto',
    price: 90,
    image: 'https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sandwich'
  },
  {
    id: '7',
    name: 'Sanduíche Vegetariano',
    description: 'Abacate, tomate, pepino, alface e hummus em pão integral',
    price: 70,
    image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sandwich'
  },
  
  // Takeaways
  {
    id: '8',
    name: 'Combo Frango Assado',
    description: 'Meio frango assado, batatas fritas, salada e refrigerante',
    price: 200,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'takeaway'
  },
  {
    id: '9',
    name: 'Combo Peixe Grelhado',
    description: 'Peixe grelhado, arroz, legumes e salada',
    price: 220,
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'takeaway'
  },
  {
    id: '10',
    name: 'Combo Vegetariano',
    description: 'Curry de vegetais, arroz integral, salada e sumo natural',
    price: 150,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'takeaway'
  }
];
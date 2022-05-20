import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

type cartItemsReducerType = {
  cart: { items: Item[] }
};

const Cart = () => {
  const cartItems = useSelector((state: cartItemsReducerType) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

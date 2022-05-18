import { createSlice } from '@reduxjs/toolkit';

export type Item = {
    id: string;
    title: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

type initialStateType = {
    id: string;
    items: Item[];
    totalQuantity: number;
}

const initialState: initialStateType = {
    id: "",
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart() {

        }
    }
});

export default cartSlice;
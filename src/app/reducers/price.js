import { UPDATE_PRICE } from '../actions/product';

export default function price(price = '', action) {
  switch (action.type) {
    case UPDATE_PRICE:
      return action.value || 0;
    default:
      return price;
  }
}
import { UPDATE_DISCOUNT } from '../actions/product';

export default function discount(discount = '', action) {
  switch (action.type) {
    case UPDATE_DISCOUNT:
      return action.value || 0;
    default:
      return discount;
  }
}
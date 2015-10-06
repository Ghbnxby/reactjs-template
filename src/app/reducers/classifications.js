import { UPDATE_CLASSIFICATIONS } from '../actions/product';

export default function classifications(classifications = [], action) {
  switch (action.type) {
    case UPDATE_CLASSIFICATIONS:
      return action.array || [];
    default:
      return classifications;
  }
}
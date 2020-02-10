import {
   SET_DELIVERY_QUOTING,
   SET_ITEMS_QUOTING,
   SET_ADDITIONALS_QUOTING
} from './actions';

const initalState = {
   quoting: {}
};

export default function(state = initalState, action) {
   switch (action.type) {
      case SET_DELIVERY_QUOTING:
         return {
            ...state
         };
      case SET_ITEMS_QUOTING:
         return {
            ...state
         };

      case SET_ADDITIONALS_QUOTING:
         return {
            ...state
         };

      default:
         return state;
   }
}

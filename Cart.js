import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from  './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemsList = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.name} - {item.amount}
    </li>
  ));

  return (
    <Modal onClass={props.onClose}>
      <ul className={classes['cart-items']}>{cartItemsList}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};


export default Cart;
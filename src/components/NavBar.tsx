import { useSelector, useDispatch } from "react-redux";
import { changeDropDownMenuState } from "../store/shop";
import Item from "./Item";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const checkedItems = useSelector(
    (state: any) => state.shop.checkedItemsNumber
  );
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.shop.cartItems);
  const cartDropDownIsOpen = useSelector(
    (state: any) => state.shop.cartDropDownIsOpen
  );

  function changeDropDownCartOpenStatus() {
    dispatch(changeDropDownMenuState());
  }

  return (
    <>
      <div className="nav-bar-container" onClick={changeDropDownCartOpenStatus}>
        <div className="cart-icon">Cart:</div>
        <div>{checkedItems}</div>
      </div>
      <div className="drop-down-menu">
        {cartItems.length >= 1 &&
          cartDropDownIsOpen &&
          cartItems.map((item: any, index: number) => {
            return <Item item={item} index={index} key={item.id + "cart"} />;
          })}
      </div>
    </>
  );
};

export default NavBar;

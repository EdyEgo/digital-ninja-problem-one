import { useSelector, useDispatch } from "react-redux";
import { changeDropDownMenuState } from "../store/shop";
import Item from "./Item";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const checkedItems = useSelector(
    (state: any) => state.shop.checkedItemsNumber
  );
  const dispatch = useDispatch();


  const itemsList = useSelector((state: any) => state.shop.shopItems);

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
        {cartDropDownIsOpen &&
          itemsList.map((item: any, index: number) => {
            if (item.checked) {
              return <Item item={item} index={index} key={item.id} />;
            }
          })}
      </div>
    </>
  );
};

export default NavBar;

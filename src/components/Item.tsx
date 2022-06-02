import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/shop";

interface ItemProps {
  item: any;
  index: number;
}

const ItemComponent: React.FC<ItemProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  function changeItemsCheckedstatus(
    isChecked: boolean,
    item: any,
    index: number
  ) {
    if (!isChecked) {
      dispatch(addItemToCart({ itemIndex: index }));
      return;
    }
    dispatch(removeItemFromCart({ itemIndex: index, item }));
  }

  return (
    <div
      className="item cursor-pointer"
      onClick={() => {
        changeItemsCheckedstatus(item.checked, item, index);
      }}
    >
      <span className="name no-pointer-events"> {item.name} </span>
      {item.checked && (
        <div className="container-checked">
          <div className="no-pointer-events">Check </div>
          <div>&#10004;</div>
        </div>
      )}
      {item.checked === false && (
        <div className="container-checked">
          <div className="no-pointer-events">Uncheck </div>
          <div>x</div>
        </div>
      )}
    </div>
  );
};

export default ItemComponent;

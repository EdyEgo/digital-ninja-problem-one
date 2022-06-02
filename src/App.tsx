import Nav from "./components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckedOnItem } from "./store/shop";

function App() {
  const itemsList = useSelector((state: any) => state.shop.shopItems);
  const dispatch = useDispatch();

  function changeItemsCheckedstatus(index: number) {
    dispatch(changeCheckedOnItem(index));
  }
  return (
    <div className="App ">
      <Nav />
      <div className="shop-items items-center">
        {itemsList.map((item: any, index: number) => {
          return (
            <div
              className="item cursor-pointer"
              onClick={() => {
                changeItemsCheckedstatus(index);
              }}
            >
              <span className="name no-pointer-events"> {item.name} </span>
              {item.checked && (
                <span className="no-pointer-events">Check &#10004;</span>
              )}
              {item.checked === false && (
                <span className="no-pointer-events">Uncheck x</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

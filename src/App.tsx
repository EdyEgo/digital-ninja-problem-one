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
      <h1 className="title">Shop Items:</h1>
      <div className="shop-items items-center">
        {itemsList.map((item: any, index: number) => {
          return (
            <div
              className="item cursor-pointer"
              key={item.id}
              onClick={() => {
                changeItemsCheckedstatus(index);
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
        })}
      </div>
    </div>
  );
}

export default App;

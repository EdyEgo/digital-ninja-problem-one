import Nav from "./components/NavBar";
import { useSelector } from "react-redux";
import Item from "./components/Item";

function App() {
  const itemsList = useSelector((state: any) => state.shop.shopItems);

  return (
    <div className="App">
      <Nav />
      <h1 className="title">Shop Items:</h1>
      <div className="shop-items items-center">
        {itemsList.map((item: any, index: number) => {
          return <Item item={item} index={index} key={item.id + "app"} />;
        })}
      </div>
    </div>
  );
}

export default App;

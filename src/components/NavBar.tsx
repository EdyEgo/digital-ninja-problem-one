import { useSelector } from "react-redux";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const checkedItems = useSelector(
    (state: any) => state.shop.checkedItemsNumber
  );

  return <div className="nav-bar-container">items checked {checkedItems}</div>;
};

export default NavBar;

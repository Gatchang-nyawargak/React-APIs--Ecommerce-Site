import { GrFormSearch } from "react-icons/gr";
import './index.css'

const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
      <li><a href="#">CATALOG</a></li>
      <li><a href="#">ABOUT US</a></li>
    </ul>
    <GrFormSearch />
    </div>
  );
};
export default Navbar;
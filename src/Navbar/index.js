import { CiSearch } from "react-icons/ci";
import './index.css'

const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
      <li><a href="#">CATALOG</a></li>
      <li><a href="#">ABOUT US</a></li>
    </ul>
    <CiSearch />
    </div>
  );
};
export default Navbar;
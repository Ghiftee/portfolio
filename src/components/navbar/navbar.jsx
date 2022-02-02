import './navbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">GIGI</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+0000000</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>gigibetine@gmail.com</span>
          </div>
        </div>
        <div className="right">This is right</div>

      </div>
    </div>
  );
}

import './contact.scss';
import {
  Person, Mail, Twitter, GitHub,
} from '@material-ui/icons';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="hand-shake" />
      </div>
      <div className="right">
        <h2> Contact </h2>
        <p>
          Do you like my works and want to get in touch?
          You can reach me via any of the following platforms:
        </p>
        <div className="itemContainer">
          <Twitter className="icon" />
          <span>@iGhiftee</span>
        </div>
        <div className="itemContainer">
          <Person className="icon" />
          <span>+2348126339349</span>
        </div>
        <div className="itemContainer">
          <GitHub className="icon" />
          <span>github.com/ghiftee</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>gigibetine@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

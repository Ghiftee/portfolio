import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">GIGI</a>
        </div>
        <div className="right">
          <a href="#intro" className="hamburger">Home</a>
          <a href="#portfolio" className="hamburger">Portfolio</a>
          <a href="#testimonials" className="hamburger">Testimonials</a>
          <a href="#contact" className="hamburger">Contact</a>
        </div>
      </div>
    </div>
  );
}

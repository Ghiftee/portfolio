import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Fullstack software developer. ', 'Content Creator. ', 'Tech Enthusiast. '],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/picture.jpeg" alt="Giftie" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am</h2>
          <h1>Gift Uwhubetine</h1>
          <h3>
            <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow-down" />
        </a>
      </div>
    </div>
  );
}

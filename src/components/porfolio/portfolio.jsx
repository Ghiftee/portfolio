import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { webPortfolio, articlePortfolio } from '../../data';

export default function portfolio() {
  const [selected, setSelected] = useState('web');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'web',
      title: 'Web Applications',
    },
    {
      id: 'articles',
      title: 'Articles',
    },
  ];
  useEffect(() => {
    switch (selected) {
      case 'web':
        setData(webPortfolio);
        break;
      case 'articles':
        setData(articlePortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d}>
            <img
              src={d.img}
              alt="leaderboard"
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

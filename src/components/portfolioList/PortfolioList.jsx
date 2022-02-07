import PropTypes from 'prop-types';
import './portfolioList.scss';

function PortfolioList(
  {
    id, title, active, setSelected,
  },

) {
  return (
    <li>
      <button
        type="button"
        className={active ? 'portfolioList active' : 'portfolioList'}
        onClick={() => setSelected(id)}
      >
        {title}
      </button>
    </li>
  );
}

PortfolioList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default PortfolioList;

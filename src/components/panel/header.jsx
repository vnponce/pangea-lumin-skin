import React, { useContext } from 'react';
import { func } from "prop-types";
import { MyContext } from "../../store/context";


const proptypes = {
  triggerGetProducts: func.isRequired,
};

const defaultProps = {};

const Header = ({ triggerGetProducts })  => {
  const { currenciesCollection: { currencies }, dispatch } = useContext(MyContext);
  return (
    <header className= "">
      <button className="close-icon" onClick={() => dispatch({type: 'HIDE_PANEL'})} >X</button>
      <span className="uppercase">your cart</span>
      <select className="currency form-select w-1/5 h-8 block mt-1 bg-white border-2 mb-6" onChange={e => triggerGetProducts(e.target.value)}>
        {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
      </select>
    </header>
  );
};

Header.prototype = proptypes;
Header.defaultProps = defaultProps;
export default Header;
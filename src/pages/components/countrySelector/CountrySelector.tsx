import React from "react";
import ReactFlagsSelect from "react-flags-select";
import './style.css';
import DropDownIcon from '../../../assets/icons/dropdown.svg';

const CountrySelector = () => {
  const [selected, setSelected] = React.useState("US");
 
  return (
    <>   
     <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        className="countrySelect"
      />
    </>
  );
};

export default CountrySelector;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDollarSign,
  faCartPlus,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

const BoxContent = ({ value, icon, label }) => (
  <div class="box">
    <div className="box-content">
      <div className="icon-with-label">
        <FontAwesomeIcon icon={icon} size="lg" />
        <span style={{ marginLeft: "20px" }}>{label}</span>
      </div>
      <span style={{ marginLeft: "44px", fontSize: "40px" }}>{value}</span>
    </div>
  </div>
);

const TotalBoxRenderer = ({ totalCounts }) => {
  const {
    totalProducts,
    totalStoreValue,
    outOfStockQuantity,
    numberOfCategory,
  } = totalCounts;
  return (
    <div class="totalBox">
      <BoxContent
        value={totalProducts}
        icon={faCartShopping}
        label='Total Products'
      />
      <BoxContent
        value={totalStoreValue}
        icon={faDollarSign}
        label='Total store value'
      />
      <BoxContent
        value={outOfStockQuantity}
        icon={faCartPlus}
        label='Out of stocks'
      />
      <BoxContent
        value={numberOfCategory}
        icon={faGlobe}
        label='No of category'
      />
    </div>
  );
};

export default TotalBoxRenderer;

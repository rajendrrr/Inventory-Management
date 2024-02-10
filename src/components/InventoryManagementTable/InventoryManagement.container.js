import React, { useState } from 'react';

import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import InventoryManagementComponent from './InventoryManagement';
import TotalBoxRenderer from '../TotalCards';

import '../../App.css';

const InventoryManagementContainer = () => {
  const [checked, setChecked] = useState(false);
  const [totalCounts, setTotalCounts] = useState({
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStockQuantity: 0,
    numberOfCategory: 0,
  })
  return (
    <div className="container">
      <div className="top-right">
        <span style={{ marginRight: '10px' }}>Admin</span>
        <Switch
          style={{backgroundColor: checked ? 'lightGreen' : 'grey'}}
          defaultChecked={false}
          onChange={(checked) => setChecked(checked)}
        />
        <span style={{ marginLeft: '10px' }}>User</span>
        <span className='top-right-action-separator'>|</span>
        <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
      </div>
      <h1 className='header'>Inventory Stats</h1>
      <TotalBoxRenderer totalCounts={totalCounts} />
      <InventoryManagementComponent isAdminViewEnabled={!checked} setTotalCounts={setTotalCounts} />
    </div>
  );
};

export default InventoryManagementContainer;

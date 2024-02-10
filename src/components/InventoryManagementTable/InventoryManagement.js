import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import DataTable from "react-data-table-component";

import EditModal from "./EditModal";
import { updateTotalCountValues } from "./InventoryManagement.helpers";
import { getColumns } from "./InventoryManagementTable.columns";

import "../../App.css";

const InventoryManagementComponent = ({ isAdminViewEnabled, setTotalCounts }) => {
  const [tableData, setTableData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [rowDataToEdit, setRowDataToEdit] = useState({});

  const getTableDataAndTotalValues = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
      );
      setTableData(response.data);
      updateTotalCountValues(setTotalCounts, response.data);
    } catch (err) {
      console.error(err);
    }
  }, [setTotalCounts]);

  useEffect(() => {
    getTableDataAndTotalValues();
  }, []);

  const conditionalRowStyles = [
    {
      when: (cell) => {
        const disabled = cell.disabled;
        return disabled;
      },
      style: {
        opacity: "0.6",
      },
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        fontSize: "20px",
      },
    },
  };

  return (
    <div className="header">
      <DataTable
        data={tableData}
        columns={getColumns({
          tableData,
          setTableData,
          updateTotalCountValues,
          setTotalCounts,
          isAdminViewEnabled,
          setModalVisible,
          setRowDataToEdit,
        })}
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
        theme="dark"
      />
      {modalVisible && (
        <EditModal
          rowData={rowDataToEdit}
          setModalVisible={setModalVisible}
          tableData={tableData}
          setTableData={setTableData}
          setTotalCounts={setTotalCounts}
        />
      )}
    </div>
  );
};

export default InventoryManagementComponent;

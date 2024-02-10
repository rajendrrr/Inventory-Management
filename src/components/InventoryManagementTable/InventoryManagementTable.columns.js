import _ from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  handleDeleteRow,
  handleOpenPopUp,
  handleToggleDisability,
} from "./InventoryManagement.helpers";

export const getColumns = ({
  tableData,
  setTableData,
  updateTotalCountValues,
  setTotalCounts,
  isAdminViewEnabled,
  setModalVisible,
  setRowDataToEdit,
}) => [
  {
    name: "Name",
    selector: ({ name }) => name,
  },
  {
    name: "Category",
    selector: ({ category }) => category,
  },
  {
    name: "Price",
    selector: ({ price }) => price,
  },
  {
    name: "Quantity",
    selector: ({ quantity }) => quantity,
  },
  {
    name: "Value",
    selector: ({ value }) => value,
  },
  {
    name: "ACTION",
    cell: (row) => {
      const disabled = !isAdminViewEnabled || row.disabled;
      const iconStyles = `icon-styles ${
        disabled ? "icon-disabled-styles" : ""
      }`;
      return (
        <div className="action-buttons">
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            disabled={disabled}
            onClick={() =>
              !disabled
                ? handleOpenPopUp({ row, setModalVisible, setRowDataToEdit })
                : _.noop()
            }
            className={`icon-styles ${
              disabled ? "icon-disabled-styles" : ""
            } edit-font-styles`}
          />
          <FontAwesomeIcon
            icon={faEye}
            size="lg"
            disabled={!isAdminViewEnabled}
            onClick={() =>
              isAdminViewEnabled
                ? handleToggleDisability({ row, tableData, setTableData })
                : _.noop()
            }
            className={`icon-styles ${
              !isAdminViewEnabled ? "icon-disabled-styles" : ""
            } view-font-styles`}
          />
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            disabled={!isAdminViewEnabled}
            onClick={() =>
              isAdminViewEnabled
                ? handleDeleteRow({
                    row,
                    tableData,
                    setTableData,
                    updateTotalCountValues,
                    setTotalCounts,
                  })
                : _.noop()
            }
            className={`icon-styles ${
              !isAdminViewEnabled ? "icon-disabled-styles" : ""
            } delete-font-styles`}
          />
        </div>
      );
    },
  },
];

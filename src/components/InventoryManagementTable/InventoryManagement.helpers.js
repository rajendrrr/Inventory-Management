import _ from 'lodash';

const getTotalStoreValue = data => _.reduce(data, (acc, { price, quantity } = {}) => {
    const priceValue = price.substring(1);
    return acc + (priceValue * quantity);
}, 0);

const getOutOfStockQuantity = data => _.reduce(data, (acc, { quantity } = {}) => {
    if (quantity === 0) return acc + 1;
    return acc;
}, 0);

const getNumberOfCategory = data => {
    const uniqueCategorySet = new Set(_.map(data, ({ category } = {}) => category));
    return _.size([...uniqueCategorySet]);
}

export const updateTotalCountValues = (setTotalCounts, tableData) => {
  setTotalCounts({
    totalProducts: _.size(tableData),
    totalStoreValue: getTotalStoreValue(tableData),
    outOfStockQuantity: getOutOfStockQuantity(tableData),
    numberOfCategory: getNumberOfCategory(tableData),
  });
};

export const handleOpenPopUp = ({ row, setModalVisible, setRowDataToEdit }) => {
  setModalVisible(true);
  setRowDataToEdit(row);
};

export const handleToggleDisability = ({ row, tableData, setTableData }) => {
  const updatedTableData = _.map(tableData, (item) => {
    if (row.name === item.name) return { ...item, disabled: true };
    return item;
  });
  setTableData(updatedTableData);
};
export const handleDeleteRow = ({
  row,
  tableData,
  setTableData,
  updateTotalCountValues,
  setTotalCounts,
}) => {
  const updatedTableData = _.filter(
    tableData,
    (item) => item.name !== row.name
  );
  setTableData(updatedTableData);
  updateTotalCountValues(setTotalCounts, updatedTableData);
};

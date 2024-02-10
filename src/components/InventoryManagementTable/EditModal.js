import React from "react";
import { Modal, Input, InputNumber, Form } from "antd";

import _ from "lodash";
import { updateTotalCountValues } from "./InventoryManagement.helpers";

const EditModal = ({
  setModalVisible,
  rowData,
  tableData,
  setTableData,
  setTotalCounts,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    const values = form.getFieldsValue();
    const updatedTableData = _.map(tableData, (item) => {
      if (_.isEqual(item.name, rowData.name))
        return { ...values, price: `$${values.price}`, name: item.name };
      return item;
    });
    setTableData(updatedTableData);
    form.resetFields();
    setModalVisible(false);
    updateTotalCountValues(setTotalCounts, updatedTableData);
  };

  const handleCancel = () => {
    form.resetFields();
    setModalVisible(false);
  };

  const getModalTitle = () => (
    <div className="modal-title">
      <span className="modal-header">Edit Product</span>
      <span>{rowData.name}</span>
    </div>
  );

  return (
    <Modal
      title={getModalTitle()}
      open
      onOk={handleOk}
      onCancel={handleCancel}
      className="modal-style"
    >
      <Form form={form} layout="vertical">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            style={{ marginRight: "10px", flex: "1" }}
            label="Category"
            name="category"
            initialValue={rowData.category}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ flex: "1" }}
            label="Price"
            name="price"
            initialValue={rowData.price.substring(1)}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            style={{ marginRight: "10px", flex: "1" }}
            label="Quantity"
            name="quantity"
            initialValue={rowData.quantity}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            style={{ flex: "1" }}
            label="Value"
            name="value"
            initialValue={rowData.value}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default EditModal;

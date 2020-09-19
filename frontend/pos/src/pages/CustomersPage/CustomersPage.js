import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideTable from "./SideTable";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import "./CustomersPage.css";
import NewTable from "./NewTable";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function CustomersPage() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    console.log("the modal should open");
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="customersPage container">
      <div className="customersPage__Left">
        <div className="customersPage__table">
          <button
            class="btn btn-primary"
            color=""
            type="submit"
            onClick={handleOpen}
          >
            <PeopleAltIcon />
            New Customer
          </button>
          <NewTable />
        </div>
      </div>

      <div className="customersPage__Right">
        <SideTable />
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={handleClose}
        contentLabel="Example Modal"
        className="modal__container"
      >
        <div className="modal__head">
          <p>New Customer</p>
          <CloseIcon onClick={handleClose} />
        </div>
        <div className="modal__body">
          <form className="modal_form">
            <div className="modal__formControl">
              <label for="barcode">
                Name <span style={{ color: "red", margin: ".1rem" }}>*</span>
              </label>
              <input type="text" name="name" required />
            </div>
            <div className="modal__formControl">
              <label for="name">
                Phone<span style={{ color: "red", margin: ".1rem" }}>*</span>
              </label>
              <input type="text" name="phone" required />
            </div>
          </form>
          <div className="modal__Action">
            <button class="btn btn-danger" onClick={handleClose}>
              Cancel
            </button>
            <button class="btn btn-success" type="submit">
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

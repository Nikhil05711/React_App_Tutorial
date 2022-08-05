import React, { useEffect, useState } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:3000`,
});

function Product_Modal({ closeModal, setData }) {
  const [token, setToken] = useState(null);

  const [input, setInput] = useState({
    id: "",
    Category_Name: "",
    Product_Name: "",
    MRP: "",
    Selling_Price: "",
    image: "",
    action: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInput((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const handleForm = () => {
    if (
      input.id === "" ||
      input.Category_Name === "" ||
      input.Product_Name === "" ||
      input.MRP === "" ||
      input.Selling_Price === ""
    ) {
      alert("Please fill the details");
    } else {
      setData((data) => [...data, input]);
    }
  };

  return (
    <div>
      <div>
        <div className="modal-dialog  rubberBand  animated" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle-1">
                Card Image
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => closeModal(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div class="form-group row">
                <label for="example-text-input" class="col-sm-4 col-form-label">
                  ID
                </label>
                <div class="col-sm-8">
                  <input
                    class="form-control"
                    type="text"
                    value={input.id}
                    name="id"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="example-text-input" class="col-sm-4 col-form-label">
                  Category_Name
                </label>
                <div class="col-sm-8">
                  <input
                    class="form-control"
                    type="text"
                    value={input.Category_Name}
                    name="Category_Name"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="example-text-input" class="col-sm-4 col-form-label">
                  Product_Name
                </label>
                <div class="col-sm-8">
                  <input
                    class="form-control"
                    type="text"
                    value={input.Product_Name}
                    name="Product_Name"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="example-text-input" class="col-sm-4 col-form-label">
                  MRP
                </label>
                <div class="col-sm-8">
                  <input
                    class="form-control"
                    type="text"
                    value={input.MRP}
                    name="MRP"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="example-text-input" class="col-sm-4 col-form-label">
                  Selling_Price
                </label>
                <div class="col-sm-8">
                  <input
                    class="form-control"
                    type="text"
                    value={input.Selling_Price}
                    name="Selling_Price"
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => closeModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleForm}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Modal;

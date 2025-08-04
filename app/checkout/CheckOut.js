"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CheckOut({ quantity, onQuantityChange }) {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  // Product details - you might want to pass these as props or fetch them
  const productPrice = 555; // Example price, replace with your actual price
  const productName = "My face natural bathing bar"; // Example product name

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    if (storedInfo) {
      setShippingInfo(storedInfo);
    }
  }, []);

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    onQuantityChange(Math.max(1, quantity - 1));
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      onQuantityChange(value);
    }
  };

  // Calculate total price
  const totalPrice = (productPrice * quantity).toFixed(2);

  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "600px", overflow: "hidden" }}
    >
      <div className="row no-gutters">
        <div
          className="col-md-4"
          style={{ display: "flex", position: "relative", paddingRight: 0 }}
        >
          <img
            src="/assets/images/gallery/gallery-12.jpg"
            alt="product image"
            style={{ objectFit: "cover", borderRadius: "unset" }}
            className="card-img w-100 h-auto"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <div style={{ fontSize: "0.9em" }} className="card-text text-black">
              {/* Price display */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="fw-bold">Price:</span> ₹
                  {productPrice.toFixed(2)}
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={decreaseQuantity}
                    style={{ width: "30px" }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control text-center mx-2"
                    style={{
                      width: "50%",
                      padding: "3px 13px 5px 27px",
                    }}
                    value={quantity}
                    disabled
                    onChange={handleQuantityChange}
                    min="1"
                  />
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={increaseQuantity}
                    style={{ width: "30px" }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total price */}
              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span className="fw-bold">Total:</span>
                <span>₹{totalPrice}</span>
              </div>

              {/* Shipping information */}
              <div className="d-flex border-bottom w-100 py-2">
                <div className="col-4">
                  <b>Full Name:</b>
                </div>
                <div className="col-8">{shippingInfo.name || "N/A"}</div>
              </div>
              <div className="d-flex border-bottom w-100 py-2">
                <div className="col-4">
                  <b>Phone:</b>
                </div>
                <div className="col-8">{shippingInfo.phone || "N/A"}</div>
              </div>
              <div className="d-flex border-bottom w-100 py-2">
                <div className="col-4">
                  <b>Email:</b>
                </div>
                <div className="col-8">{shippingInfo.email || "N/A"}</div>
              </div>
              <div className="d-flex w-100 py-2">
                <div className="col-4">
                  <b>Address:</b>
                </div>
                <div className="col-8">{shippingInfo.address || "N/A"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function OrderDetailPage({ params }) {
  const { id } = params;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/myOrders/${id}`,
          {
            withCredentials: true,
          }
        );
        setOrder(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-5 w-100 h-100 d-flex justify-content-center align-items-center">
          <div 
                    className="spinner-border" 
                    style={{ color: '#1a6d31' }} 
                    role="status"
                >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!order) {
    return <p>No order found.</p>;
  }

  const {
    shippingInfo,
    paymentInfo,
    _id,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxAmount,
    shippingAmount,
    totalAmount,
    orderStatus,
    createdAt,
  } = order;

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div
        style={{ minHeight: "80vh", marginTop: "100px" }}
        className="container"
      >
        <div className="mb-4 w-100 d-flex justify-content-between align-items-center py-4">
          <Link
            href="/orders"
            className="btn"
            style={{
              backgroundColor: "#1a6d31",
              borderColor: "#1a6d31",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

          <h1 className="text-center ">Order Details</h1>
          <div style={{ width: "20px", height: "20px" }}></div>
        </div>
        <div className="mb-4 row">
          <div className="col-md-4">
            <h5 className="mb-3">Order Details</h5>
            <p>
              <strong>Order ID:</strong> {_id?.slice(-6)}
            </p>
            <p>
              <strong>Status:</strong> {orderStatus}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(createdAt).toLocaleString()}
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Shipping Details</h5>
            <p>
              <strong>Name:</strong> {shippingInfo.fullName}
            </p>
            <p>
              <strong>Phone No:</strong> {shippingInfo.phoneNo}
            </p>
            <p>
              <strong>Address:</strong> {shippingInfo.address},{" "}
              {shippingInfo.city}, {shippingInfo.zipCode},{" "}
              {shippingInfo.country}
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Payment Info</h5>
            <p>
              <strong>Method:</strong> {paymentMethod}
            </p>
            <p>
              <strong>Payment ID:</strong> {paymentInfo.id || "N/A"}
            </p>
            <p>
              <strong>Total Amount:</strong> ₹{" "}
              {orderItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </p>
          </div>
        </div>

        <div className="table-responsive">
         <table className="table" style={{ 
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)'
}}>
  <thead style={{ backgroundColor: '#ffffffff', color: '#212529' }}>
    <tr>
      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Item Name</th>
      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Quantity</th>
      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Price</th>
      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Total</th>
    </tr>
  </thead>
  <tbody>
    {orderItems.map((item) => (
      <tr key={item._id} style={{ borderBottom: '1px solid #f0f0f0' }}>
        <td style={{ padding: '12px 16px', fontWeight: '500' }}>{item.name}</td>
        <td style={{ padding: '12px 16px', color: '#555' }}>{item.quantity}</td>
        <td style={{ padding: '12px 16px', color: '#555' }}>₹ {item.price.toLocaleString('en-IN')}</td>
        <td style={{ padding: '12px 16px', fontWeight: '600', color: '#1a6d31' }}>
          ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
        </td>
      </tr>
    ))}
    {/* Grand Total Row */}
    {orderItems.length > 0 && (
      <tr style={{ backgroundColor: '#f8f8f8' }}>
        <td colSpan="3" style={{ 
          padding: '12px 16px', 
          textAlign: 'right',
          fontWeight: '600'
        }}>
          Grand Total:
        </td>
        <td style={{ 
          padding: '12px 16px',
          fontWeight: '700',
          color: '#1a6d31'
        }}>
          ₹ {orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('en-IN')}
        </td>
      </tr>
    )}
  </tbody>
</table>
          <div className="text-end mt-3">
            <strong>
              Grand Total: ₹{" "}
              {orderItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </strong>
          </div>
        </div>
      </div>
    </Layout>
  );
}

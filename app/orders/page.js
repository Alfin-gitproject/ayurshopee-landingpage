"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5); // Set default items per page
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/myOrders`;

    const fetchOrders = async () => {
      try {
        const response = await axios.get(apiUrl, {
          withCredentials: true,
        });
        console.log(response);
        setOrders(response.data.data);
      } catch (error) {
        console.log("error fetching", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
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

  // Filter orders by search term
  const filteredOrders = orders.filter((order) => {
    return (
      order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.totalAmount.toString().includes(searchTerm)
    );
  });

  // Get current orders for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Previous and Next button clicks
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredOrders.length / ordersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle change of orders per page
  const handleItemsPerPageChange = (e) => {
    setOrdersPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div
          style={{ marginTop: "100px" }}
          className="d-flex justify-content-center flex-column align-items-center text-center py-4"
        >
          <h1>Orders</h1>
          <div
            style={{ gap: "10px" }}
            className="d-flex justify-content-between w-100 align-items-center container"
          >
            {/* Search Box */}
            <input
              type="text"
              style={{ maxWidth: "200px", width: "100%" }}
              className="form-control mb-4"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Dropdown for selecting items per page */}
            <div className="mb-4">
              <select
                id="itemsPerPage"
                className="form-select"
                value={ordersPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>

          {filteredOrders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <>
              <div style={{ overflow: "auto", width: "100%" }} className="container">
  <table className="table align-middle" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
    <thead style={{ backgroundColor: '#ffffff', color: '#212529' }}>
      <tr>
        <th style={{ minWidth: '100px', padding: '12px 16px' }}>Order ID</th>
        <th style={{ minWidth: '150px', padding: '12px 16px' }}>
          <i className="bi bi-calendar3 me-2"></i>
          Date & Time
        </th>
        <th style={{ minWidth: '100px', padding: '12px 16px' }}>Amount</th>
        <th style={{ minWidth: '120px', padding: '12px 16px' }}>Status</th>
        <th style={{ minWidth: '100px', padding: '12px 16px' }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {currentOrders.map((order) => (
        <tr key={order._id} style={{ borderBottom: '1px solid #f0f0f0' }}>
          <td style={{ padding: '12px 16px' }}>
            <span style={{ 
              backgroundColor: '#f8f9fa', 
              color: '#1a6d31',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: '500'
            }}>
              {order._id.slice(-6)}
            </span>
          </td>
          <td style={{ padding: '12px 16px' }}>
            <div className="d-flex flex-column">
              <span style={{ fontWeight: '500' }}>
                {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
              <small style={{ color: '#6c757d' }}>
                {new Date(order.createdAt).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </small>
            </div>
          </td>
          <td style={{ padding: '12px 16px', fontWeight: '600' }}>
            ₹{" "}
            {order.orderItems
              ? order.orderItems.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                ).toLocaleString('en-IN')
              : order.totalAmount.toLocaleString('en-IN')}
          </td>
          <td style={{ padding: '12px 16px' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: '500',
              backgroundColor: 
                order.orderStatus === 'completed' ? '#d4edda' :
                order.orderStatus === 'pending' ? '#fff3cd' :
                order.orderStatus === 'cancelled' ? '#f8d7da' :
                '#e2e3e5',
              color:
                order.orderStatus === 'completed' ? '#155724' :
                order.orderStatus === 'pending' ? '#856404' :
                order.orderStatus === 'cancelled' ? '#721c24' :
                '#383d41'
            }}>
              {order.orderStatus}
            </span>
          </td>
          <td style={{ padding: '12px 16px' }}>
            <Link
              href={`/orders/${order._id}`}
              className="btn btn-sm"
              style={{
                backgroundColor: "#1a6d31",
                color: "white",
                padding: '6px 12px',
                borderRadius: '4px',
                border: 'none',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#145a2a'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a6d31'}
            >
              <i className="bi bi-eye-fill me-1"></i> View
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
              {/* Bootstrap Pagination */}
              <nav aria-label="Page navigation example pb-3">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      style={{ height: "auto" }}
                      aria-label="Previous"
                      onClick={handlePrev}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  {Array.from(
                    {
                      length: Math.ceil(filteredOrders.length / ordersPerPage),
                    },
                    (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className={`page-link ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          style={{
                            "--bs-pagination-active-bg": "rgb(26, 109, 49)", // Gray background for active state
                            "--bs-pagination-active-border-color": "#6c757d", // Gray border
                            "--bs-pagination-active-color": "#fff", // White text for contrast
                            backgroundColor:
                              currentPage === index + 1 ? "" : "rgb(26, 109, 49)", // Light gray for inactive
                            color: currentPage === index + 1 ? "" : "#fbfdffff", // Dark gray text for inactive
                            borderColor: "#dee2e6", // Light gray border
                            height: "auto",
                            width: "36px",
                          }}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                  <li
                    className={`page-item ${
                      currentPage ===
                      Math.ceil(filteredOrders.length / ordersPerPage)
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      aria-label="Next"
                      style={{ height: "auto" }}
                      onClick={handleNext}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

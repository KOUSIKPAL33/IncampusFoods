import React from 'react'
import Navbar from './Navbar'
import Myorderscard from './Myorderscard'
import { useEffect, useState, useContext } from 'react';
import baseurl from '../Url';


function Myorders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("authToken");

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'preparing':
        return 'info';
      case 'out for delivery':
        return 'primary';
      case 'delivered':
        return 'success';
      default:
        return 'secondary';
    }
  };
  const handleCancelOrder=()=>{
    console.log("button clicked")
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${baseurl}/order/get`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [token]);
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f1f3f6", marginTop: '5rem', width: "max-content" }} className='container'>
        <h1
          className="text-center fw-bold fs-1 text-primary"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
            letterSpacing: "1px",
            marginBottom: "30px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}
        >
          🛒 My Orders
        </h1>

        {orders.map((order, index) => (
          <div key={index} className="p-3 mb-4 border rounded bg-light">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">Order #{index + 1}</h5>
              <span className={`badge bg-${getStatusColor(order.status)} text-capitalize`}>
                {order.status}
              </span>
            </div>

            <p className="mb-1">
              <strong>Placed on:</strong> {new Date(order.createdAt).toLocaleString()}
            </p>
            <p className="mb-2"><strong>Delivery Location:</strong> {order.deliveryLocation}</p>

            {/* Render Items */}
            <div className="row flex-wrap gap-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="col-auto">
                  <Myorderscard {...item} />
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p><strong>Total Price:</strong> ₹{order.totalAmount}</p>
              <span
                className={`btn ${order.status === 'pending' ? 'btn-outline-danger' : 'btn-secondary disabled'}`}
                style={{ pointerEvents: order.status === 'pending' ? 'auto' : 'none' }}
                onClick={handleCancelOrder}
              >
                {order.status === 'pending' ? 'Cancel Order' : 'Locked'}
              </span>

            </div>
          </div>
        ))}


      </div>
    </>
  )
}

export default Myorders

import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "ORD1234",
      items: "Organic Bananas, Fresh Milk",
      total: 15.99,
      status: "Delivered",
      date: "2024-02-20",
    },
    {
      id: "ORD5678",
      items: "Whole Grain Bread, Organic Eggs",
      total: 10.49,
      status: "Pending",
      date: "2024-02-22",
    },
    {
      id: "ORD9101",
      items: "Fresh Apples, Yogurt",
      total: 8.99,
      status: "Cancelled",
      date: "2024-02-18",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📦 Your Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 border border-gray-300 text-left">Order ID</th>
              <th className="py-3 px-4 border border-gray-300 text-left">Items</th>
              <th className="py-3 px-4 border border-gray-300 text-left">Total</th>
              <th className="py-3 px-4 border border-gray-300 text-left">Status</th>
              <th className="py-3 px-4 border border-gray-300 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border border-gray-300">
                <td className="py-3 px-4 border border-gray-300">{order.id}</td>
                <td className="py-3 px-4 border border-gray-300">{order.items}</td>
                <td className="py-3 px-4 border border-gray-300 font-bold">${order.total.toFixed(2)}</td>
                <td className="py-3 px-4 border border-gray-300">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-200 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 border border-gray-300">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

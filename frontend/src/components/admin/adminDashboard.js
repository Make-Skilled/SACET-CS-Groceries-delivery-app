import React from "react";

const AdminDashboard = () => {
  const stats = [
    { id: 1, title: "Total Orders", value: "1,245", color: "bg-blue-500" },
    { id: 2, title: "Total Revenue", value: "$58,340", color: "bg-green-500" },
    { id: 3, title: "Total Users", value: "3,520", color: "bg-yellow-500" },
    { id: 4, title: "Total Products", value: "245", color: "bg-purple-500" },
  ];

  const recentOrders = [
    { id: "#ORD1023", customer: "John Doe", amount: "$25.99", status: "Delivered", date: "2024-02-22" },
    { id: "#ORD1024", customer: "Alice Smith", amount: "$18.50", status: "Pending", date: "2024-02-21" },
    { id: "#ORD1025", customer: "Michael Brown", amount: "$32.99", status: "Cancelled", date: "2024-02-20" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Admin Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className={`p-6 rounded-lg text-white ${stat.color} shadow-md`}>
            <h2 className="text-2xl font-semibold">{stat.value}</h2>
            <p className="text-lg">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🛒 Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 border border-gray-300">Order ID</th>
                <th className="py-3 px-4 border border-gray-300">Customer</th>
                <th className="py-3 px-4 border border-gray-300">Amount</th>
                <th className="py-3 px-4 border border-gray-300">Status</th>
                <th className="py-3 px-4 border border-gray-300">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border border-gray-300">
                  <td className="py-3 px-4 border border-gray-300">{order.id}</td>
                  <td className="py-3 px-4 border border-gray-300">{order.customer}</td>
                  <td className="py-3 px-4 border border-gray-300 font-bold">{order.amount}</td>
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
    </div>
  );
};

export default AdminDashboard;

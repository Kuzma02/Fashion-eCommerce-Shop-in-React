import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const navigate = useNavigate();
  const orders = [
    {
      id: "1",
      date: "2023-10-01",
      total: 150.0,
      status: "Delivered",
    },
    {
      id: "2",
      date: "2023-09-15",
      total: 200.0,
      status: "Shipped",
    },
    {
      id: "3",
      date: "2023-09-01",
      total: 100.0,
      status: "Processing",
    },
  ];

  useEffect(() => {
    if (!user?.id) {
      toast.error("Please login to view this page");
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-screen-2xl mx-auto pt-20 px-5">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Order ID</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Total</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-3 px-4 border-b text-center">{order.id}</td>
                <td className="py-3 px-4 border-b text-center">{order.date}</td>
                <td className="py-3 px-4 border-b text-center">
                  ${order.total.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {order.status}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <Link
                    to={`/order/${order.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;

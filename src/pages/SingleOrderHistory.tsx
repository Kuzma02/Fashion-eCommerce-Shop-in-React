import React from 'react';
import { useParams } from 'react-router-dom';

const SingleOrderHistory = () => {
  const { id } = useParams<{ id: string }>();

  const order = {
    id: '1',
    date: '2023-10-01',
    total: 150.0,
    status: 'Delivered',
    items: [
      {
        name: 'Product 1',
        quantity: 2,
        price: 50.0,
      },
      {
        name: 'Product 2',
        quantity: 1,
        price: 50.0,
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto pt-20 px-5">
      <h1 className="text-3xl font-bold mb-8">Order Details</h1>
      <div className="bg-white border border-gray-200 p-5 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Order ID: {order.id}</h2>
        <p className="mb-2">Date: {order.date}</p>
        <p className="mb-2">Total: ${order.total.toFixed(2)}</p>
        <p className="mb-2">Status: {order.status}</p>
        <h3 className="text-xl font-semibold mt-6 mb-4">Items</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Product Name</th>
              <th className="py-3 px-4 border-b">Quantity</th>
              <th className="py-3 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-b">{item.name}</td>
                <td className="py-3 px-4 border-b text-center">{item.quantity}</td>
                <td className="py-3 px-4 border-b text-right">${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleOrderHistory;
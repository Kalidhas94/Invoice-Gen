export default function CustomerForm({ customer, setCustomer }) {
  return (
    <div className="bg-slate-600 p-4 rounded text-white">
      <h3 className="font-semibold mb-2">Customer Details</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={customer.name}
        onChange={(e) =>
          setCustomer({ ...customer, name: e.target.value })
        }
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={customer.email}
        onChange={(e) =>
          setCustomer({ ...customer, email: e.target.value })
        }
        className="border p-2 w-full mb-2 rounded"
      />

      <textarea
        placeholder="Enter Address"
        value={customer.address}
        onChange={(e) =>
          setCustomer({ ...customer, address: e.target.value })
        }
        className="border p-2 w-full rounded"
      />
    </div>
  );
}

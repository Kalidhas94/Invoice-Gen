export default function BillingForm({ billing, setBilling }) {
  return (
    <div className="bg-slate-600 p-4 rounded text-white">
      <h3 className="font-semibold mb-2">Bill From</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={billing.name}
        onChange={(e) =>
          setBilling({ ...billing, name: e.target.value })
        }
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={billing.email}
        onChange={(e) =>
          setBilling({ ...billing, email: e.target.value })
        }
        className="border p-2 w-full mb-2 rounded"
      />

      <textarea
        placeholder="Enter Address"
        value={billing.address}
        onChange={(e) =>
          setBilling({ ...billing, address: e.target.value })
        }
        className="border p-2 w-full rounded"
      />
    </div>
  );
}

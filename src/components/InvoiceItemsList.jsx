export default function InvoiceItemsList({
  items,
  updateItem,
  addItem,
  removeItem,
}) {
  return (
    <div className="mt-6 bg-slate-600 p-4 rounded text-white">
      <div className="grid grid-cols-5 gap-3 font-semibold mb-2">
        <span>Item</span>
        <span>Quantity</span>
        <span>Price / Rate</span>
        <span>Amount</span>
        <span>Action</span>
      </div>

      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-5 gap-3 mb-2">
          <input
            type="text"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) =>
              updateItem(index, "name", e.target.value)
            }
            className="border p-2 rounded"
          />

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateItem(index, "quantity", Number(e.target.value))
            }
            className="border p-2 rounded"
          />

          <input
            type="number"
            value={item.rate}
            onChange={(e) =>
              updateItem(index, "rate", Number(e.target.value))
            }
            className="border p-2 rounded"
          />

          <div className="p-2" >
            ₹ {(item.quantity * item.rate).toFixed(2)}
          </div>

          <button
            onClick={() => removeItem(index)}
            className="bg-red-400 text-white rounded px-2"
          >
            🗑
          </button>
        </div>
      ))}

      <button
        onClick={addItem}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </div>
  );
}

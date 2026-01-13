export default function InvoiceControls({
  generatePDF,
  printInvoice,
  currency,
  setCurrency,
  taxRate,
  setTaxRate,
  discountRate,
  setDiscountRate,
}) {
  return (
    <div className="bg-slate-600 p-4 rounded shadow space-y-4 w-1/4">
      <div className="flex gap-2">
        <button
          onClick={generatePDF}
          className="flex-1 bg-blue-600 text-white py-2 rounded"
        >
          Download
        </button>

        <button
          onClick={printInvoice}
          className="flex-1 bg-green-600 text-white py-2 rounded"
        >
          Print
        </button>
      </div>

      <div className="font-semibold">
        <label className="text-white font-semibold">Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="₹">INR</option>
          <option value="$">USD</option>
          <option value="€">EUR</option>
        </select>
      </div>

      <div className="font-semibold">
        <label className="text-white font-semibold">Tax Rate (%)</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="font-semibold">
        <label className="text-white font-semibold">Discount Rate (%)</label>
        <input
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>
    </div>
  );
}

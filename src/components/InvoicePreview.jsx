export default function InvoicePreview({
  customer,
  billing,
  items,
  subtotal,
  taxAmount,
  discountAmount,
  total,
  currency,
  invoiceNumber,
  date,
}) {
  return (
    <div className="bg-slate-300">
      <div style={{ width: "794px", padding: 32, fontFamily: "Arial" }}>
        <div className="flex justify-between">
          <div>
            <h2>My Invoice</h2>
            <p>Invoice #: {invoiceNumber}</p>
          </div>
          <div>
            <p>Amount Due</p>
            <h2>{currency} {total.toFixed(2)}</h2>
          </div>
        </div>

        <hr className="my-2 bg-slate-900 thickness-10" />

        <div className="flex justify-between gap-2">
          <div>
            <b>Billed To:</b>
            <p>{customer.name}</p>
            <p>{customer.address}</p>
            <p>{customer.email}</p>
          </div>
          <div>
            <b>Billed From:</b>
            <p>{billing.name}</p>
            <p>{billing.address}</p>
            <p>{billing.email}</p>
          </div>
          <div>
            <b>Date:</b>
            <p>{date}</p>
          </div>
        </div>

        <table width="100%" style={{ marginTop: 20 }} className="table table-striped bg-slate-600">
          <thead className="table-header bg-slate-700 text-white">
            <tr style={{ textAlign: "left" }} className="pt-5">
              <th className="pb-4 pl-3">QTY</th>
              <th className="pb-4 pl-3">DESCRIPTION</th>
              <th className="pb-4 pl-3">PRICE</th>
              <th className="pb-4 pl-3">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="table-body bg-slate-500 text-white">
            {items.map((i, idx) => (
              <tr key={idx} style={{ textAlign: "left", verticalAlign: "top" }}>
                <td className="pb-4 pl-3">{i.quantity}</td>
                <td className="pb-4 pl-3">{i.name}</td>
                <td className="pb-4 pl-3">{currency} {i.rate}</td>
                <td className="pb-4 pl-3">{currency} {i.quantity * i.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 20, textAlign: "right" }}>
          <p>SUBTOTAL: {currency} {subtotal}</p>
          <p>TAX: {currency} {taxAmount}</p>
          <p>DISCOUNT: {currency} {discountAmount}</p>
          <h3>TOTAL: {currency} {total}</h3>
        </div>
      </div>
    </div>);
}

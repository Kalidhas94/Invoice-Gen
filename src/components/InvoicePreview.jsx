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
      <div cla style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>My Invoice</h2>
          <p>Invoice #: {invoiceNumber}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p>Amount Due</p>
          <h2>{currency} {total.toFixed(2)}</h2>
        </div>
      </div>

      <hr />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
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

      <table width="100%" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>QTY</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, idx) => (
            <tr key={idx}>
              <td>{i.quantity}</td>
              <td>{i.name}</td>
              <td>{currency} {i.rate}</td>
              <td>{currency} {i.quantity * i.rate}</td>
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
</div>  );
}

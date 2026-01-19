import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import CustomerForm from "./components/CustomerForm";
import BillingForm from "./components/BillingForm";
import InvoiceItemsList from "./components/InvoiceItemsList";
import InvoiceSummary from "./components/InvoiceSummary.1";
import InvoiceControls from "./components/InvoiceControls";
import InvoicePreview from "./components/InvoicePreview";

export default function App() {
  const [customer, setCustomer] = useState({ name: "", email: "", address: "" });
  const [billing, setBilling] = useState({ name: "", email: "", address: "" });

  const [items, setItems] = useState([
    { name: "", quantity: 1, rate: 0 },
  ]);

  const [currency, setCurrency] = useState("₹");
  const [taxRate, setTaxRate] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const updateItem = (i, key, value) => {
    const copy = [...items];
    copy[i][key] = value;
    setItems(copy);
  };

  const addItem = () =>
    setItems([...items, { name: "", quantity: 1, rate: 0 }]);

  const removeItem = (i) =>
    setItems(items.filter((_, index) => index !== i));

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.rate,
    0
  );
  const discountAmount = (subtotal * discountRate) / 100;
  const taxAmount = ((subtotal - discountAmount) * taxRate) / 100;
  const total = subtotal - discountAmount + taxAmount;

  const generatePDF = () => {
    html2canvas(document.getElementById("invoice-preview")).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        210,
        (canvas.height * 210) / canvas.width
      );
      pdf.save(`Invoice-${invoiceNumber}.pdf`);
    });
  };

  const printInvoice = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen p-6 print:p-0">
      <div className="max-w-7xl mx-auto flex gap-6 bg-slate-400 p-6 rounded shadow print:hidden">
        {/* LEFT FORM */}
        <div className="bg-slate-300 p-6 rounded shadow w-3/4">
          <h1 className="text-xl font-bold mb-4 text-gray-800">My Invoice Gen</h1>

          <div className="flex justify-between mb-4 bg-slate-600 p-4 rounded text-white">
            <p>Invoice #: {invoiceNumber}</p>
            <p>Date: {date}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <CustomerForm customer={customer} setCustomer={setCustomer} />
            <BillingForm billing={billing} setBilling={setBilling} />
          </div>

          <InvoiceItemsList
            items={items}
            updateItem={updateItem}
            addItem={addItem}
            removeItem={removeItem}
          />

          <InvoiceSummary
            subtotal={subtotal}
            taxAmount={taxAmount}
            discountAmount={discountAmount}
            total={total}
            currency={currency}
          />
        </div>

        {/* RIGHT PANEL */}
        <InvoiceControls
          generatePDF={generatePDF}
          printInvoice={printInvoice}
          currency={currency}
          setCurrency={setCurrency}
          taxRate={taxRate}
          setTaxRate={setTaxRate}
          discountRate={discountRate}
          setDiscountRate={setDiscountRate}
        />
      </div>

      {/* PDF / PRINT CONTENT */}
      {/* 
          1. We remove "hidden" so html2canvas can "see" it.
          2. We move it off-screen with absolute positioning so it doesn't clutter the UI.
          3. On print, we bring it back to top-left and show it.
      */}
      <div className="absolute top-0 left-[-9999px] print:left-0 print:top-0 print:w-full print:static print:z-50">
        <div id="invoice-preview">
          <InvoicePreview
            customer={customer}
            billing={billing}
            items={items}
            subtotal={subtotal}
            taxAmount={taxAmount}
            discountAmount={discountAmount}
            total={total}
            currency={currency}
            invoiceNumber={invoiceNumber}
            date={date}
          />
        </div>
      </div>
    </div>
  );
}

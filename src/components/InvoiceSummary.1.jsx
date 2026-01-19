export default function InvoiceSummary({
    subtotal, taxAmount, discountAmount, total, currency,
}) {
    return (
        <div className="mt-6 text-right p-4 bg-slate-600 rounded text-white">
            <p>
                Subtotal: {currency} {subtotal.toFixed(2)}
            </p>
            <p>
                Discount: {currency} {discountAmount.toFixed(2)}
            </p>
            <p>
                Tax: {currency} {taxAmount.toFixed(2)}
            </p>

            <hr className="my-2" />

            <p className="text-lg font-bold">
                Total: {currency} {total.toFixed(2)}
            </p>
        </div>
    );
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// Shown the way Indian stores write it: "Rs. 8,450.00".
export function formatPrice(value: number) {
  return `Rs. ${value.toLocaleString("en-IN")}.00`;
}

export function formatInr(value: number) {
  return inr.format(value);
}

export function discountPercent(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round((1 - price / compareAt) * 100);
}

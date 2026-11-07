const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// Indian rupee with Indian digit grouping: "₹8,450".
export function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function formatInr(value: number) {
  return inr.format(value);
}

export function discountPercent(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round((1 - price / compareAt) * 100);
}

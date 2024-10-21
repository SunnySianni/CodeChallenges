const originalPrice = 100;

function applyDiscount(price, discountCallback, discountType) {
    const discountedPrice = discountCallback(price);
    console.log(`Original price: $${price.toFixed(2)}`);
    console.log(`Discount type: ${discountType}`);
    console.log(`Final price: $${discountedPrice.toFixed(2)}`);
    console.log('---');
    return discountedPrice;
}

function regularCustomerDiscount(price) {
    return price * 0.95; // 5% discount
}

function premiumCustomerDiscount(price) {
    return price * 0.90; // 10% discount
}

function seasonalDiscount(price) {
    return price * 0.85; // 15% discount
}

function vipCustomerDiscount(price) {
    return price * 0.80; // 20% discount
}

// Call applyDiscount for each discount type
console.log("Regular Customer Discount:");
applyDiscount(originalPrice, regularCustomerDiscount, "Regular Customer");

console.log("Premium Customer Discount:");
applyDiscount(originalPrice, premiumCustomerDiscount, "Premium Customer");

console.log("VIP Customer Discount:");
applyDiscount(originalPrice, vipCustomerDiscount, "VIP Customer");

console.log("Seasonal Discount:");
applyDiscount(originalPrice, seasonalDiscount, "Seasonal");
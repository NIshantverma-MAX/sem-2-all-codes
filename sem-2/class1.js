function calculateTotal1(quantity) {
    let pricePerItem = prompt("Enter price per item:");
    let total = quantity * pricePerItem;

    if (quantity >= 10) {
        total = total - (total * 0.10);
    }

    total = total + (total * 0.18);
    return total;
}

console.log(calculateTotal1(12));
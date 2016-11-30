const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 500;

var bankAccount = 800;

function purchasePrice() {
    var amt = PHONE_PRICE + ACCESSORY_PRICE;
    amt += calculateTax(amt);
    console.log(amt);

    return amt;
}

function calculateTax(amt) {
    return amt * TAX_RATE;
}

function formatPrice(price) {
    price = "$" + price.toFixed(2);
    console.log(price);

    return price;
}

while(bankAccount > 0) {
    console.log("---------------------")
    console.log("Starting bank account: " + bankAccount);
    var purchase = purchasePrice();
    formatPrice(purchase);

    bankAccount -= purchase;
    console.log("Ending bank account: " + bankAccount);


}

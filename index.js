var customerName = "John";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
  }
  function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
  }
  function overwriteBestCustomer() {
    bestCustomer = "new best customer";
    return bestCustomer;
  }
  const leastFavoriteCustomer = "Alice";
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer1 = "Bob"; 
    return leastFavoriteCustomer1;
  }
console.log(customerName);
console.log(setBestCustomer())
console.log(upperCaseCustomerName());
console.log(changeLeastFavoriteCustomer()); 
console.log(overwriteBestCustomer());

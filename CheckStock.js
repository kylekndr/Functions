// Search Function that reflects items in stock and those that have been discontinued:
var SearchInventory = {
  P3719: 2,
  P2500: 5,
  P3721: 3,
  P3924: 1,
  P3810: 2,
  P3651: 4,
  P3404: 2,
  P3203: 1,
  P3716: 9,
  PG2250: 6
};
function CheckStock(InStock) {
  // Your Code Here
  if (SearchInventory.hasOwnProperty(InStock)){
  return SearchInventory[InStock];
  }
  else {
  return "Discontinued";
  }
}
// Search inventory by inputting item number below:
CheckStock("P3719");
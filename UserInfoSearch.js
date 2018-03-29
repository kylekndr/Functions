// User Information entry search function

function UserInfoSearch(entry) {
  var result = "";
  var PersonalInfo = {
    firstname:"Sherlock",
    lastname:"Holmes",
    addressnumber:"221B",
    street:"Baker",
    city:"London",
    country:"England"
  };
result = PersonalInfo[entry];
  return result;
}

// Change the below value to test
UserInfoSearch("lastname");
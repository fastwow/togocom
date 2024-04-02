export const formatDate = (date) => {
  // Extract day, month, and year from the date object
  var day = date.getDate();
  var month = date.getMonth() + 1; // Month is zero-based
  var year = date.getFullYear();

  // Add leading zeros if day or month is less than 10
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // Concatenate in DD/MM/YYYY format
  return day + "/" + month + "/" + year;
};

// Example usage
var today = new Date();
var formattedDate = formatDate(today);
console.log(formattedDate);

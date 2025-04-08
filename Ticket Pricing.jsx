function getTicketPrice(age) {
  if (age <= 12) {
      return 10;
  } else if (age <= 17) {
      return 15;
  } else {
      return 20;
  }
}

console.log(getTicketPrice(10)); // 10
console.log(getTicketPrice(15)); // 15
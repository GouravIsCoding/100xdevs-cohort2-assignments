/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let listAns = [];
  const hash = new Map();
  for (let transaction of transactions) {
    hash.set(
      transaction.category,
      hash.get(transaction.category)
        ? hash.get(transaction.category) + transaction.price
        : transaction.price
    );
  }
  for ([key, value] of hash.entries()) {
    listAns.push({ category: key, totalSpent: value });
  }

  return listAns;
}

module.exports = calculateTotalSpentByCategory;

const express = require("express");
const router = express.Router();
const data = [
  {
    expenseId: "I4sX4LV3z2ICsa45sNpq",
    paid_by: "Aarya",
    date: "2022-10-11",
    amount: 509.0,
    mode_of_payment: "COD",
    expenseName: "Fruits",
    quantity: 2,
    subTotal: 100.0,
    description: "done",
    paid_to: "Yash",
  },
  {
    expenseId: "I4sX4LV3z2ICsa45sNwr4",
    paid_by: "Balram",
    date: "2022-10-11",
    amount: 560.0,
    mode_of_payment: "COD",
    expenseName: "Fruits",
    quantity: 2,
    subTotal: 100.0,
    description: "done",
    paid_to: "Yash",
  },
  {
    expenseId: "I4sX4LV3z2I6673ja45sNpq",
    paid_by: "Ekta",
    date: "2022-10-11",
    amount: 590.0,
    mode_of_payment: "COD",
    expenseName: "Fruits",
    quantity: 2,
    subTotal: 100.0,
    description: "done",
    paid_to: "Yash",
  },
];
router.get("/get-expense", (req, res) => {
  res.status(200).json({ success: true, statusCode: 200, data: data });
});

module.exports = router;

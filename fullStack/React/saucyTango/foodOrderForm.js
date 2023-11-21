import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful! \n Your order was ${order} \nPlease show your confirmation number for pickup`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label for="phone">Phone number</label>
      <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <label for="address">Address</label>
      <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <label for="order">Order</label>
      <input id="order" type="text" value={order} onChange={(e) => setOrder(e.target.value)} />
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;

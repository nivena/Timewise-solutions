<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Order Online - Timewise Solutions</title>
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Order Online</h1>
  </header>

  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="order-online.html">Order Online</a></li>
      <li><a href="contact-us.html">Contact Us</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main>
    <section id="order-form">
      <h2>Place Your Order</h2>
      <form action="/submit-order" method="post">
        <label for="service">Select Service:</label>
        <select id="service" name="service">
          <option value="blockchain">Blockchain Solutions</option>
          <option value="accounting">Accounting Solutions</option>
          <option value="business">Business Solutions</option>
        </select>

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="100">

        <input type="submit" value="Submit Order">
      </form>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <p>Copyright © 2023 Timewise Solutions</p>
  </footer>

  <script src="../scripts/main.js"></script>
</body>
</html>

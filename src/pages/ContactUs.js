<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Us - Timewise Solutions</title>
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Contact Us</h1>
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
    <section id="contact-form">
      <h2>Get in Touch</h2>
      <form action="/submit-contact" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">

        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <input type="submit" value="Send Message">
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

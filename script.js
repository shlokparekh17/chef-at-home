// Booking Form Validation & Confirmation
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const chef = document.getElementById("chef").value;

  if (!name || !email || !date || !time || !chef) {
    alert("⚠️ Please fill in all required fields!");
    return;
  }

  alert(`✅ Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nChef: ${chef}\n\nThank you for choosing Chef @ Home!`);

  document.getElementById("bookingForm").reset();
});

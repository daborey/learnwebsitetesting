// Car data
const cars = [
    { name: "Car 1", price: "$80,000" },
    { name: "Car 2", price: "$85,000" },
    { name: "Car 3", price: "$90,000" },
    { name: "Car 4", price: "$95,000" },
    { name: "Car 5", price: "$100,000" },
    { name: "Car 6", price: "$110,000" },
    { name: "Car 7", price: "$120,000" },
    { name: "Car 8", price: "$130,000" },
    { name: "Car 9", price: "$140,000" },
    { name: "Car 10", price: "$150,000" },
  ];
  
  // Add cars dynamically to the page
  const carList = document.getElementById("car-list");
  
  cars.forEach((car) => {
    // Create car card
    const card = document.createElement("div");
    card.className = "car-card";
  
    card.innerHTML = `
      <img src="images/square.jpg" alt="${car.name}" class="car-image">
      <div class="info">
        <h2>${car.name}</h2>
        <p class="price">${car.price}</p>
      </div>
    `;
  
    carList.appendChild(card);
  });
  
  // Modal functionality
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("car-image")) {
      modal.style.display = "block";
      modalImg.src = e.target.src; // Set modal image source
      modalImg.alt = e.target.alt; // Set modal image alt
    }
  });
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
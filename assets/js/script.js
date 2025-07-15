// City list
const cities = ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås"];

// Elements on index.html
const input = document.getElementById("cityInput");
const dropdown = document.getElementById("cityDropdown");

// Populate city dropdown
function populateDropdown(list) {
  dropdown.innerHTML = "";
  list.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    dropdown.appendChild(option);
  });
}

// Filter cities by input
function filterCities() {
  const query = input.value.toLowerCase();
  const filtered = cities.filter(city => city.toLowerCase().includes(query));
  populateDropdown(filtered);
}

if (input && dropdown) {
  populateDropdown(cities);
  input.addEventListener("input", filterCities);
}

// Save form data and redirect
function saveAndRedirect() {
  const searchData = {
    city: input.value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    adults: document.getElementById("adults").value,
    children: document.getElementById("children").value,
  };
  localStorage.setItem("searchData", JSON.stringify(searchData));
  // alert("Search saved! Redirecting...");
  window.location.href = "accommodation.html";
}

// Form submission handler
const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    saveAndRedirect();
  });
}

// Load saved data into accommodation.html inputs
function loadSavedData() {
  const saved = localStorage.getItem("searchData");
  if (!saved) return;
  const data = JSON.parse(saved);

  ["cityInput", "startDate", "endDate", "adults", "children"].forEach(id => {
    const el = document.getElementById(id);
    if (el && data[id]) el.value = data[id];
  });
}

const resultsForm = document.getElementById("resultsForm");
if (resultsForm) {
  document.addEventListener("DOMContentLoaded", loadSavedData);
}


// On accommodation.html, load saved data when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("resultsForm")) {
    loadSavedData();
  }

  // Select a hotel via button
  document.querySelectorAll(".hotel-card button").forEach(button => {
    button.style.cursor = "pointer";
    button.addEventListener("click", () => {
      const card = button.closest(".hotel-card");
      if (!card) return;

      const selectedHotel = card.getAttribute("data-hotel-name");
      if (!selectedHotel) return;

      const searchData = JSON.parse(localStorage.getItem("searchData")) || {};
      searchData.selectedHotel = selectedHotel;
      localStorage.setItem("searchData", JSON.stringify(searchData));

      window.location.href = "experience.html";
    });
  });



  

});
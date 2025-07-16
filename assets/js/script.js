/* jshint esversion: 11 */
/* global google */

// City list
const cities = ["Stockholm", "Gothenburg", "Malmö"];

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

// Set today's date as min for date inputs
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    if (startDateInput) startDateInput.setAttribute('min', today);
    if (endDateInput) endDateInput.setAttribute('min', today);
});


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

// Google Maps and Places integration
let map;
let service;
const allMarkers = [];

async function initMap() {
    if (!document.getElementById("map")) return;

    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: 59.32393, lng: 18.06995 },
        zoom: 12,
    });

    service = new google.maps.places.PlacesService(map);

    // Dynamic place lookup
    const dynamicPlaces = [
        // Cities
        {
            query: "Stockholm",
            icon: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            type: "city"
        },

        {
            query: "Gothenburg",
            icon: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            type: "city"
        },

        {
            query: "Malmö",
            icon: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            type: "city"
        },

        // Hotels
        {
            query: "Scandic Continental",
            price: "1215kr",
            rating: "8.7",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Stockholm"
        },
        {
            query: "Scandic Gamla Stan",
            price: "1119kr",
            rating: "8.0",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Stockholm"
        },
        {
            query: "Scandic Malmen",
            price: "1340kr",
            rating: "7.7",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Stockholm"
        },
        {
            query: "Scandic Crown",
            price: "1199",
            rating: "9.3",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Gothenburg"
        },
        {
            query: "Scandic Europa",
            price: "1240",
            rating: "8.2",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Gothenburg"
        },
        {
            query: "Scandic Opalen",
            price: "1120kr",
            rating: "8.9",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Gothenburg"
        },
        {
            query: "Scandic Rubinen",
            price: "990",
            rating: "7.9",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Gothenburg"
        },
        {
            query: "Scandic Triangeln",
            price: "1170",
            rating: "9.1",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Malmö"
        },
        {
            query: "Scandic Malmö City",
            price: "1170",
            rating: "8.4",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Malmö"
        },
        {
            query: "Scandic Stortorget",
            price: "990",
            rating: "8.3",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Malmö"
        },
        {
            query: "Scandic Kramer",
            price: "1240",
            rating: "8.1",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Malmö"
        },
        {
            query: "Scandic Park",
            price: "1120",
            rating: "8.7",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            type: "hotel",
            city: "Stockholm"
        },


        // Attractions
        {
            query: "Vasa Museum",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Royal Palace Stockholm",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Stockholm City Hall",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Skansen Open-Air Museum",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "ABBA The Museum",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Liseberg Amusement Park",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Universeum",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Gothenburg Museum of Art",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Haga",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Malmö Castle",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Ribergsborgsstranden",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Malmö Konstmuseum",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },
        {
            query: "Folkets Park",
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            type: "attraction"
        },



        // Restaurants
        {
            query: "Restaurant Pelikan Stockholm",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            type: "restaurant"
        },
        {
            query: "Meatballs for the People",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            type: "restaurant"
        },
        {
            query: "Restaurant Sjömagasinet",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            type: "restaurant"
        },
        {
            query: "Magazzino",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            type: "restaurant"
        },
        {
            query: "Bastard",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            type: "restaurant"
        },
        {
            query: "Saltimporten Canteen",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            type: "restaurant"
        },


    ];

    dynamicPlaces.forEach(placeItem => {
        service.findPlaceFromQuery(
            {
                query: placeItem.query,
                fields: ["name", "geometry", "formatted_address"],
            },
            (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
                    const place = results[0];
                    const marker = new google.maps.Marker({
                        map,
                        position: place.geometry.location,
                        title: place.name,
                        icon: placeItem.icon,
                    });
                    const infoWindow = new google.maps.InfoWindow({
                        content: `
              <div>
                <h3>${place.name}</h3>
                <p>${place.formatted_address}</p>
                ${placeItem.price ? `<p>From <strong>${placeItem.price}</strong> per night</p>` : ""}
                ${placeItem.rating ? `<p>Rating: <strong>${placeItem.rating}</strong></p>` : ""}
              </div>
            `,
                    });
                    marker.addListener("click", () => infoWindow.open(map, marker));
                    allMarkers.push({ marker, type: placeItem.type || "other", title: place.name, city: placeItem.city });
                    console.log(`Added: ${place.name}`);
                } else {
                    console.error(`Not found: "${placeItem.query}"`);
                }
            }
        );
    });
    document.getElementById("filterSelect").addEventListener("change", () => {
        const selectedType = document.getElementById("filterSelect").value;
        allMarkers.forEach(({ marker, type }) => {
            marker.setMap(selectedType === "all" || selectedType === type ? map : null);
        });
    });
    document.getElementById("cityInput").addEventListener("change", function () {
        const cityName = this.value.trim().toLowerCase();

        const match = allMarkers.find(
            m => m.type === "city" && m.title.toLowerCase() === cityName
        );

        if (match) {
            map.setCenter(match.marker.getPosition());
            map.setZoom(13);
        } else {
            console.warn("City not found in markers:", cityName);
        }
    });


}

// Load saved data when DOM is ready 
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("resultsForm")) {
        loadSavedData();
    }

    // Filter hotel cards by city
    const searchData = JSON.parse(localStorage.getItem("searchData"));
    if (searchData && searchData.city) {
        const city = searchData.city.toLowerCase();
        document.querySelectorAll(".hotel-card").forEach(card => {
            const cardCity = card.getAttribute("data-city");
            if (!cardCity || cardCity.toLowerCase() !== city) {
                card.style.display = "none";
            } else {
                card.style.display = "";
            }
        });
    }
    document.getElementById("cityInput").addEventListener("change", () => {
        const city = document.getElementById("cityInput").value;
        filterMarkersByCity(city);
    });
});    

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
        
        alert(`You selected ${selectedHotel}. Redirecting to Experience page...`);

        window.location.href = "experience.html";
    });
});

// Select an experience via button
document.querySelectorAll(".experience-card button").forEach(button => {
    button.style.cursor = "pointer";
    button.addEventListener("click", () => {
        const card = button.closest(".experience-card");
        if (!card) return;

        const selectedExperience = card.getAttribute("data-experience-name");
        if (!selectedExperience) return;

        const searchData = JSON.parse(localStorage.getItem("searchData")) || {};
        searchData.selectedExperience = selectedExperience;
        localStorage.setItem("searchData", JSON.stringify(searchData));

        alert(`You selected ${selectedExperience}. Redirecting to Booking page...`);

        window.location.href = "book.html";
    });
});

function filterMarkersByCity(cityName) {
    const cityLower = cityName.toLowerCase();
    allMarkers.forEach(({ marker, type, title, city }) => {
        if (city && city.toLowerCase() === cityLower) {
            marker.setMap(map);
        } else {
            marker.setMap(null);
        }
    });
}



// Wait until Google Maps is fully loaded
if (google?.maps?.importLibrary) {
    initMap();
} else {
    // Fallback: wait for the dynamic loader to finish
    window.google = window.google || {};
    window.google.maps = window.google.maps || {};
    window.google.maps.__ib__ = () => {
        initMap();
    };
}
async function fetchFlightData(flightNumber) {
    try {
        const response = await fetch('flights.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const flightData = await response.json();
        const flight = flightData.find(f => f.flightNumber === flightNumber);
        if (flight) {
            displayFlightInfo(flight);
        } else {
            alert('Flight not found');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert(`Error fetching flight data: ${error.message}`);
    }
}

function displayFlightInfo(flight) {
    const flightsContainer = document.getElementById('flights-container');

    if (document.querySelector(`#flight-${flight.flightNumber}`)) {
        alert('This flight is already displayed.');
        return;
    }

    const flightCard = document.createElement('div');
    flightCard.classList.add('flight-card');
    flightCard.id = `flight-${flight.flightNumber}`;

    flightCard.innerHTML = `
        <button class="delete-button"><ion-icon name="close"></ion-icon></button>
        <div class="details">
            <div class="airport">${flight.departure.city}</div>
            <div>${new Date(flight.departure.scheduledTime).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
            <div class="time">${new Date(flight.departure.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div>Terminal: ${flight.departure.terminal}</div>
            <div>Gate: ${flight.departure.gate}</div>
        </div>
        <div class="flight-number">${flight.flightNumber}</div>
        <div class="details">
            <div class="airport">${flight.arrival.city}</div>
            <div>${new Date(flight.arrival.scheduledTime).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
            <div class="time">${new Date(flight.arrival.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div>Terminal: ${flight.arrival.terminal}</div>
            <div>Gate: ${flight.arrival.gate}</div>
        </div>
    `;

    const hr = document.createElement('hr');

    flightCard.querySelector('.delete-button').addEventListener('click', () => {
        flightsContainer.removeChild(flightCard);
        flightsContainer.removeChild(hr);
    });

    flightsContainer.appendChild(flightCard);
    flightsContainer.appendChild(hr);
}

document.getElementById('flight-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const flightNumber = document.getElementById('flight-number').value.trim().toUpperCase();
    fetchFlightData(flightNumber);
    document.getElementById('flight-number').value = '';
});

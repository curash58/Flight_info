Sure, here's the updated README with your email address included:

---

# Flight Information App

A simple web application to fetch and display flight information. The application supports both light and dark modes.

## Features

- Fetch flight data from a local JSON file.
- Display detailed flight information.
- Prevent duplicate flight information display.
- Delete flight information cards.
- Toggle between light and dark modes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Sample Flight Data](#sample-flight-data-flightsjson)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- Basic understanding of HTML, CSS, and JavaScript.

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/flight-information-viewer.git
    cd flight-information-viewer
    ```

2. **Open `index.html` in your web browser.**

    Simply double-click the `index.html` file or open it using your browser’s file open option.

## Usage

1. **Enter a flight number in the input field.**
2. **Click the "Search" button to fetch and display the flight information.**
3. **To delete a flight card, click the "close" icon on the top-right corner of the card.**
4. **Toggle between light and dark modes by clicking the crescent moon button.**

## File Structure

- `index.html` - The main HTML file that sets up the structure of the webpage.
- `styles.css` - The CSS file containing styles for light and dark modes.
- `flight.js` - The JavaScript file that handles the flight search functionality.
- `darkmode.js` - The JavaScript file that manages the dark mode toggle functionality.
- `flights.json` - A JSON file containing sample flight data.

## Configuration

The main files used in this project are:

- `index.html`: The main HTML file that structures the web page.
- `styles.css`: The CSS file that styles the web page.
- `flight.js`: The JavaScript file that handles the flight search functionality.
- `darkmode.js`: The JavaScript file that manages the dark mode toggle functionality.
- `flights.json`: The JSON file that contains the flight data.

## Documentation

### `index.html`

Sets up the structure of the webpage, including:
- A form for entering flight numbers.
- A container for displaying flight information.
- A button for toggling dark mode.

### `styles.css`

Defines the styles for both light and dark modes, including:
- Base styles for the body, container, headings, form, and flight cards.
- Specific styles for dark mode, applied when the `darkmode` class is active on the body.
- Styles for the dark mode toggle button.

### `flight.js`

Contains the JavaScript to:
- Fetch flight data based on the entered flight number.
- Display flight information in a structured card format.
- Prevent duplicate flight information display.
- Allow removal of flight cards.
- Toggle between light and dark modes.

### `darkmode.js`

Manages dark mode state by toggling CSS classes and saving the user's preference in local storage.

### `flights.json`

Contains the flight data used for searching flight information.

## Sample Flight Data (`flights.json`)

```json
[
  {
    "flightNumber": "UAE244",
    "airline": "Emirates",
    "departure": {
      "airport": "John F. Kennedy International Airport",
      "city": "NYC",
      "country": "USA",
      "scheduledTime": "2024-06-02T11:00:00",
      "terminal": "4",
      "gate": "B25"
    },
    "arrival": {
      "airport": "Dubai International Airport",
      "city": "DXB",
      "country": "UAE",
      "scheduledTime": "2024-06-03T08:20:00",
      "terminal": "3",
      "gate": "A2"
    },
    "status": "Scheduled",
    "aircraft": {
      "model": "Airbus A380",
      "registration": "A6-EDC"
    }
  },
  {
    "flightNumber": "AC03",
    "airline": "Air Canada",
    "departure": {
      "airport": "Vancouver International Airport",
      "city": "YVR",
      "country": "Canada",
      "scheduledTime": "2024-05-28T12:55:00",
      "terminal": "Main",
      "gate": "D64"
    },
    "arrival": {
      "airport": "Narita International Airport",
      "city": "NRT",
      "country": "Japan",
      "scheduledTime": "2024-05-29T14:50:00",
      "terminal": "1",
      "gate": "32"
    },
    "status": "Scheduled",
    "aircraft": {
      "model": "Boeing 787-9",
      "registration": "C-FGDT"
    }
  }
]
```

## Contact

Arsen Valeev - [varsen2302@gmail.com](mailto:varsen2302@gmail.com)
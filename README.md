# Cognit Symposium WebPage

## Overview
This is the official **Cognit Symposium** webpage designed to provide event details, registration links, and information about the symposium. The website is built using **React + Vite** for high performance and modularity. The design follows a modern UI/UX approach, ensuring a seamless user experience.

## Features
- **Landing Page with Animations**: An engaging homepage with smooth animations.
- **Event Pages**: Includes separate pages for 14 technical and non-technical events with descriptions and rules.
- **Registration System**: A dedicated registration link for participants.
- **Contact & About Us Pages**: Essential information about the symposium and how to reach out.
- **Map Integration**: Helps users navigate to the symposium venue.
- **Optimized Performance**: Uses Vite for faster build and hot module replacement (HMR).

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, JavaScript
- **Styling**: CSS Modules, Bootstrap
- **Hosting**: Can be deployed on GitHub Pages, Vercel, or Netlify

## Installation & Setup
To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Sanjay9176/Cognit_Sympo_WebPage.git
cd Cognit_Sympo_WebPage
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
This will launch the webpage at `http://localhost:5173/`.

## Project Structure
```
Cognit_Sympo_WebPage/
│── public/           # Contains images and static assets
│── src/              # Source code folder
│   ├── components/   # Reusable UI components
│   ├── pages/        # Contains Home, Technical, Non-Technical event pages
│   ├── App.jsx       # Main application entry point
│   ├── main.jsx      # React root file
│── package.json      # Dependencies and scripts
│── README.md         # Project documentation
```

## Pages Breakdown
- **Home.jsx**: The landing page with an overview of the symposium.
- **Technical.jsx**: Displays technical event details.
- **NonTechnical.jsx**: Lists non-technical events.
- **Main.jsx**: Handles routing and page navigation.
- **Components/**: Includes buttons, event cards, and other UI elements.

## Deployment
To deploy the project:
```bash
npm run build
```
Then, you can host it using **Vercel, Netlify, or GitHub Pages**.

## Contributing
If you'd like to contribute, feel free to fork the repository and submit a pull request!

## Live Demo
Check out the live version [here](https://cognit.co.in/)

## Author
[Sanjay Kumar Purohit](https://github.com/Sanjay9176)

---



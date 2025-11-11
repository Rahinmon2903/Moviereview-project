🎥 CineVerse

Explore • Watch • Review — Your personal cinematic universe.

🌌 Overview

CineVerse is a React-based movie discovery and review app.
It allows users to search for movies, filter by genre, year, and rating, view detailed information, and rate movies with an interactive star system.

Built with React JS, TailwindCSS, and the OMDb API, it delivers a smooth, responsive, and cinematic experience — complete with glowing gradients, smooth transitions, and real-time interactions.

🚀 Features
🎬 Movie Listings

Fetches movies dynamically from the OMDb API.

Displays essential info like title, poster, year, genre, and IMDb rating.

Uses infinite scrolling for seamless browsing.

🔍 Search & Filter

Real-time search bar for finding movies by title.

Genre, Year, and Rating filters for refined results.

Search auto-updates movie results as you type.

⭐ Ratings

Interactive 1–5 star rating system stored locally via localStorage.

Visual feedback updates instantly on click.

User ratings persist even after refresh.

🎞️ Movie Details Page

Displays full movie info (description, cast, director, awards, etc.).

Cinematic blurred background for immersive viewing.

Smooth UI transitions between cards and details.

⚙️ Extra Touches

Fully responsive layout (mobile → desktop).

404 “Film Reel Broke” creative not-found page.

Custom loader animations and placeholders.

Elegant dark UI with gradient highlights and neon glows.

🧩 Tech Stack
Technology	Purpose
React JS	Front-end framework
Tailwind CSS	Styling and responsive design
Axios	API calls
React Router DOM	Navigation and routing
OMDb API	Movie data source
Lucide Icons	Modern, lightweight icons
🗂️ Folder Structure
CineVerse/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Loading1.jsx
│   │   └── Placeholder.jsx
│   ├── Context/
│   │   └── Context.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Cardpages.jsx
│   │   └── PageNotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── README.md

⚡ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Rahinmon2903/Moviereview-project
cd cineverse

2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm run dev


Your project will be available at 👉 http://localhost:5173

🔑 API Configuration

This project uses the OMDb API.

If you want to use your own key:

Go to OMDb API

Request a free API key.

Replace your key inside Home.jsx:

const API_KEY = "your_api_key_here";

💾 Local Storage

User ratings are stored persistently in local storage under the key:

moviereview


So users’ star ratings remain even after refreshing the page.
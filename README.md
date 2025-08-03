````md
# ⭐ Star Wars App

A Star Wars-themed React application that displays character and movie data in a stylish UI using Ant Design, with support for Docker containerization.

---

## 🚀 Getting Started

### Running Locally

To run the app on your local development environment:

```bash
npm install
npm start
````

This will start the app at `http://localhost:3000`.

### Running with Docker

If you want to run the containerized version of the app, use:

```bash
docker run -d -p 3000:80 my-app
```

Make sure Docker is installed and running on your system.

---

## 🛠 Architecture Overview

### Tech Stack

* **React** – UI development
* **React Router** – Client-side routing
* **Ant Design (Antd)** – Table components and UI logic
* **CSS** – Star Wars-themed styling and shimmer effects
* **Docker** – Containerization and deployment

---

## 📁 Folder Structure

```
├── public/
│   └── assets/
│       └── starwars-logo.png
├── src/
│   ├── components/
│   │   ├── Cards
│   │   |     ├── CharacterCard.jsx
│   │   |     ├── PlanetCard.jsx
│   │   |     ├── SpecieCard.jsx
│   │   |     ├── VehicleCard.jsx
│   │   ├── Movies
│   │         ├── EntityList.jsx
│   │         ├── Movie.jsx
│   │         ├── MovieTabel.jsx
│   │         ├── Movies.css
│   │   ├── Shimmer
│   │         ├── LoadingScreen.jsx
│   │         ├── LoadingScreen.css
│   │         ├── ShimmerCard.jsx
│   │         ├── ShimmerCard.css
│   │   ├── utils
│   │         ├── fetchArrayOfResponses.jsx
│   ├── 
│   ├── App.js
│   ├── App.css
├── Dockerfile
├── README.md
```

---

## ✨ Features

* Display Star Wars characters and movies with Ant Design tables
* Shimmer loading animations for better UX
* Star Wars-themed UI: black background and yellow text
* Header and footer with logos
* Fully dockerized for easy deployment

---

## 📷 Screenshots (Optional)

> You can add screenshots here to show the UI.

---

## 🧠 Credits

Built with ❤️ using React, Ant Design, and Docker.



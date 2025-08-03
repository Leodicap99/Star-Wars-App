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
docker buildx build . --tag my-app 
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

---

## 💡 Design Decisions

- **Redux Toolkit**: _Not used_ because the app is fairly small and didn’t involve deeply nested or shared state. React's built-in state and prop-drilling were sufficient.
  
- **Ant Design**: Used for table components and consistent UI because the team mentioned it was their preferred styling system.

- **Docker**: While not essential, Docker was implemented because containerization was mentioned. It ensures the app can be deployed and run in a consistent environment, though package-lock.json already handles dependency control.

- **404 Page**: A custom Star Wars–themed 404 page with black background and yellow glowing text was added for a polished, on-brand user experience.

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
* Table with sorting nature on Name, Director and Release date
* Shimmer loading animations for better UX
* Star Wars-themed UI: black background and yellow text
* Header with logos
* Fully dockerized for easy deployment

---

## 📷 Screenshots (Shimmer effetcs and error handling)

<img width="1296" height="839" alt="image" src="https://github.com/user-attachments/assets/297d1288-e3c7-49a4-bc68-e7a743b99de9" />
<img width="1296" height="839" alt="image" src="https://github.com/user-attachments/assets/f1b36266-ac25-4f3c-9d18-057c7dddf8ec" />
<img width="1296" height="839" alt="image" src="https://github.com/user-attachments/assets/d65f8d29-20ad-4839-935e-ab727e8e4cd9" />
<img width="1296" height="839" alt="image" src="https://github.com/user-attachments/assets/cff57bab-5c83-4ad1-8cd5-23139e471f78" />



---

## 🧠 Credits

Built using React, Ant Design, and Docker.



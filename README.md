# 🌐 MERN Social Media App

A full-stack social media application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can create accounts, share posts with images, view timelines, and interact with content — all in real time.

## 🚀 Live Demo

🔗 [Click here to view the live app on Render](https://socialmedia-mern-frontend.onrender.com)

> ⚠️ It may take 10–30 seconds to load initially due to Render’s free tier cold start.

---

## 📦 Tech Stack

- **Frontend**: React, Context API, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Image Hosting**: Cloudinary
- **Deployment**: Render (both client and server)
- **Authentication**: Basic (No JWT)

---

## 🛠 Features

- 👤 User Registration & Login
- 🖼️ Cloud-based Image Upload via Cloudinary
- 📝 Post Creation with Images
- ❤️ Like  on Posts
- 🧵 Personalized Timeline Feed

---

## 📁 Environment Variables (`.env`)

> These should be added to a `.env` file in the backend for secure deployment:

```env
PORT=5000
DB_URL=mongodb+srv://<your-db-connection>
CLOUD_NAME=dYOUR CLOUD NAME
API_KEY=YOUR API_KEY
API_SECRET=YOUR API_SECRET

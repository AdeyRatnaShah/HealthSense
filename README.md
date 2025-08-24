# HealthSense

**HealthSense** is an AI-powered healthcare platform that empowers individuals to monitor and predict their health risks using machine learning models. With an intuitive interface, users can input their health data or upload reports to receive predictions for conditions such as Chronic Kidney Disease and Diabetes in seconds.

---

## Features

* **AI-Powered Predictions**: Get reliable predictions for health risks using trained machine learning models.
* **User-Friendly Interface**: Simple, clean, and responsive UI for easy navigation.
* **Personalized Insights**: Track your health vitals and view personalized recommendations.
* **Secure Authentication**: JWT-based login and signup system with token management.
* **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
* **Integration with Reports**: Upload medical reports for accurate prediction.

---

## Tech Stack

* **Frontend**: React, TailwindCSS, React Router, Axios
* **Backend**: Node.js, Express.js, MongoDB
* **Authentication**: JWT Tokens
* **Email Service**: EmailJS
* **Icons**: react-icons, lucide-react

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/HealthSense.git
cd HealthSense
```

2. Install dependencies for frontend

3) Install dependencies for backend
4) Create a `.env` file in both frontend and backend directories with the following variables:

**Frontend (.env)**

```env
VITE_REACT_APP_BACKEND_URL=http://localhost:5000
VITE_APP_NAME=HealthSense
```

**Backend (.env)**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Run The Project 

---

## Project Structure

```
Project Root
│   README.md
│
├── backend
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
│
├── fastApiProcess
│   ├── models/
│   ├── Dockerfile
│   ├── main.py
│   └── requirements.txt
│
└── frontend
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── layouts/
        │   ├── pages/
        │   └── predict/
        └── testValues/

```

---

---

---

## Author

**Adey Ratna Shah**
[GitHub](https://github.com/AdeyRatnaShah) | [LinkedIn](https://www.linkedin.com/in/adey-ratna-shah/) | [LeetCode](https://leetcode.com/u/arshah3f/)



# CrickCast 🏏

CrickCast is a cricket analytics and live score web application built using Python, Streamlit, and Machine Learning. The platform provides live cricket updates, upcoming match schedules, and AI-based prediction systems for cricket fans and analysts.

## 🚀 Features

* 🔴 Live Cricket Scores
* 📅 Upcoming Match Schedule
* 📈 First Innings Score Prediction
* 🎯 Second Innings Win Prediction
* 🌍 Real-time cricket data using Cricbuzz RapidAPI
* 💻 Interactive and user-friendly Streamlit interface

---

## 🛠️ Tech Stack

* Python
* Streamlit
* Machine Learning
* Pandas & NumPy
* Scikit-learn
* Requests API
* RapidAPI (Cricbuzz API)

---

## 📂 Project Structure

```bash
CrickCast/
│
├── main.py
├── live_scores.py
├── upcoming_matches.py
├── score_prediction.py
├── win_prediction.py
├── pipe.pkl
├── requirements.txt
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/takyash7/CrickCast.git
```

Move to project folder:

```bash
cd CrickCast
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the Streamlit app:

```bash
streamlit run main.py
```

---

## 🔑 API Setup

Create a `.env` file in the root directory and add:

```env
RAPIDAPI_KEY=your_api_key
```

Get your API key from RapidAPI Cricbuzz API.

---

## 📊 About the Project

CrickCast combines real-time cricket information with predictive analytics to enhance the cricket viewing experience. Users can monitor live matches, explore upcoming fixtures, and use machine learning models to predict first innings scores and second innings winning probabilities.

The project demonstrates practical implementation of:

* API Integration
* Machine Learning Models
* Streamlit Web Applications
* Real-time Data Handling

---

## 🔮 Future Improvements

* Player statistics dashboard
* Match history analytics
* IPL & ICC tournament insights
* Dark mode support
* Advanced AI prediction models

---

## 👨‍💻 Author

Developed by Yash

Built with ❤️ for cricket lovers.

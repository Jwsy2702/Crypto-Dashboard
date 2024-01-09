# Crypto Dashboard

The project revolves around a crypto dashboard integrating a currency converter and news feed. On the frontend, React builds the user interface, while Express and Node.js powers the backend. Two APIs are employed: one fetches real-time exchange rates for digital or physical currencies, and another retrieves the latest news from CoinDesk. (http://http://localhost:8000/convert & http://localhost:8000/convert on the backend respectively)

To ensure API key security, a backend intermediary is implemented. The frontend initiates a request to the backend, which then communicates with the APIs. API responses are transmitted back to the backend, which in turn sends the data to the frontend.

Key technologies include Express for routing, cors middleware to whitelist specific locations (applied globally to all routes), dotenv to load backend environment variables securely, and axios for handling GET requests. Nodemon facilitates backend development by automatically detecting and incorporating changes.

For example, the frontend triggers a GET request to localhost:8000/news, prompting the backend to make a corresponding GET request to the RapidAPI endpoint. The backend processes the response and relays the news data back to the frontend, creating a seamless integration of cryptocurrency-related information.

TO RUN THE PROJECT: Start backend (added script to run nodemon to track backend changes) --> npm run start:backend Start frontend --> npm run start:frontend

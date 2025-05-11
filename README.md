# Birthday Countdown App

This is a web application that shows a countdown to your next birthday and displays the number of years you'll be turning. It also celebrates the birthday with a confetti animation when the day arrives.

## Features

- Displays a countdown until your next birthday.
- Shows how old you'll be turning.
- Confetti animation when it's your birthday.

## Tech Stack

- **Frontend**: Next.js, React, Canvas-Confetti
- **Backend**: Node.js, Express, CORS
- **Deployment**:
  - **Frontend**: Vercel
  - **Backend**: Render

## Live Demo

You can view the live demo of the frontend [here](https://birthday-rose-three.vercel.app/).

## API Endpoint

The backend API provides the following endpoint:

- **GET** `/api/birthday` - Returns the countdown to the next birthday and the age you'll be turning.
  - Example response:
    ```json
    {
      "countdown": "10 Days 5 Hours 30 Minutes 45 Seconds",
      "age": 23
    }
    ```

## Local Development Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/birthday_app.git
   cd birthday_app

2. **Install dependencies**:

   - For the frontend (Next.js app):

     ```bash
     cd frontend
     npm install
     ```

   - For the backend (Node.js app):

     ```bash
     cd backend
     npm install
     ```

3. **Run the backend locally**:

   ```bash
   npm start

4. **Set up environment variables** (if necessary):

   For both the frontend and backend, you may need to configure environment variables for things like API URLs or secret keys.

   * **Frontend**:

     * If your backend has a specific URL or endpoint, set the API base URL in your environment file. You can do this in `.env.local` under the frontend directory.

     ```env
     NEXT_PUBLIC_API_URL=http://localhost:5000/api
     ```

   * **Backend**:

     * If you're using environment variables for API keys or other sensitive data, create a `.env` file in the backend directory with the necessary configurations.

     ```env
     PORT=5000
     ```

5. **Run the app locally**:

   * Frontend: Once you've installed the dependencies, run the following command from the frontend directory:

     ```bash
     npm run dev
     ```

   * Backend: From the backend directory, run:

     ```bash
     npm start
     ```

   This will start the backend server at `http://localhost:5000` and the frontend on `http://localhost:3000`.

6. **Visit the app**:
   Open your browser and navigate to `http://localhost:3000`. You should see the birthday countdown app running locally.

## How It Works

* **Backend (Node.js with Express)**:

  * The backend provides an API endpoint `/api/birthday` that calculates the time left until your next birthday and determines your age. It calculates this based on the current date and your birthdate (which should be configured in the backend).

* **Frontend (Next.js with React)**:

  * The frontend fetches data from the backend API, which includes the countdown and age. It also displays this information in a user-friendly format and renders a confetti animation when it detects that today is your birthday.

* **Confetti Animation**:

  * Once it's the user's birthday, the frontend triggers the `Canvas-Confetti` library to show a celebratory animation.

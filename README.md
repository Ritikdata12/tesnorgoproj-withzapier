# Invoice Management System

## Overview
This project is a full-stack application that helps users manage their invoices efficiently. It features a **Node.js backend microservice** and a **React frontend**. Users can log in with Google OAuth, view details of their due invoices, and trigger automation workflows for handling past-due invoices using Zapier.

---

## Features

### Backend (Node.js Microservice):
1. **User Authentication:**
   - Users can log in securely using Google OAuth.
2. **Invoice Details:**
   - Provides endpoints to fetch invoice data, including:
     - Invoice amount
     - Due date
     - Recipient information
3. **Zapier Integration:**
   - Endpoints to trigger automation actions for past-due invoices.
   - Automates:
     - Sending email reminders.
     - Follow-up notifications for overdue payments.

### Frontend (React):
1. **Google OAuth Integration:**
   - Intuitive login interface for users to log in with their Google accounts.
2. **Invoice Management:**
   - Displays a list of due invoices with the following details:
     - Amount
     - Due date
     - Recipient
3. **Trigger Automation:**
   - Option to manually trigger Zapier automation workflows for past-due invoices.

---

## Installation and Setup

### Prerequisites:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for backend database)
- Zapier account (for workflow automation)
- Google Cloud project (for OAuth credentials)

### Backend Setup:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=<Your MongoDB URI>
   GOOGLE_CLIENT_ID=<Your Google OAuth Client ID>
   GOOGLE_CLIENT_SECRET=<Your Google OAuth Client Secret>
   ZAPIER_WEBHOOK_URL=<Your Zapier Webhook URL>
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup:
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   REACT_APP_GOOGLE_CLIENT_ID=<Your Google OAuth Client ID>
   ```

4. Start the frontend:
   ```bash
   npm start
   ```

### Zapier Workflow Setup:
1. Log in to your Zapier account.
2. Create a new Zap for:
   - **Trigger:** Webhook (use the provided endpoint in `.env` as the Webhook URL).
   - **Actions:**
     - Send email reminders for overdue invoices.
     - Send follow-up notifications.
3. Test and publish the Zap.

---

## API Endpoints

### Authentication
- **POST /auth/google**
  - Authenticate users via Google OAuth.

### Invoice Management
- **GET /invoices**
  - Retrieve a list of due invoices.

### Zapier Automation
- **POST /zapier/trigger**
  - Trigger automation actions for past-due invoices.

---

## Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB

### Frontend:
- React.js
- React Router
- Axios

### Integrations:
- Google OAuth
- Zapier Webhooks

---

## Screenshots

### Login Page:
A user-friendly Google login interface.

### Invoice List:
Displays a comprehensive list of invoices with relevant details.

### Automation Trigger:
Provides a seamless option for users to initiate automation workflows.

---

## Future Enhancements
- Add role-based access control for admin and user privileges.
- Integrate payment gateways for direct invoice payments.
- Enable push notifications for real-time invoice updates.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Your commit message"
   ```
4. Push the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Create a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

## Contact
- **Developer:** Ritik Data
- **Email:** [ritikdata123@gmail.com](mailto:ritikdata123@gmail.com)
- **Phone:** (+91) 9664320699

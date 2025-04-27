# Hospital Management app

A full-stack health tracker application built using Node.js and Express for the backend and React for the frontend. This application allows you to manage client information, health programs, and enrollment. It ensures sensitive client data is encrypted for security and privacy.

## Features

- **Client Management**: Create, read, and search client profiles.
- **Program Enrollment**: Enroll clients in health programs.
- **Search Clients**: Search clients by first or last name.
- **Secure Data**: Sensitive information such as contact details, medical history, and address is encrypted before storage and decrypted when retrieved.

## Backend

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing client and program data.
- **Mongoose**: ODM (Object Document Mapping) library to interact with MongoDB.
- **Crypto**: Native Node.js module for encryption and decryption of sensitive data (e.g., contact details, medical history).

## Frontend
- **React**: JavaScript library for building the user interface.
- **React Router**: Used for navigating between pages in the frontend.
- **Tailwind CSS**: For adding some life to the frontend.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas for cloud-based DB)

### Clone the Repository

```bash
git clone https://github.com/yourusername/hospital-management-app.git
cd hospital-management-app
```

### Install Dependencies

```bash
cd Frontend
npm install
cd Backend
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and add the following configuration:

```bash
MONGODB_URI=use_use_yours
SECRET_KEY=create_one_32_characters_long
PORT=3000
```

- **MONGODB_URI**: Your MongoDB connection string.
- **SECRET_KEY**: A secret key for encrypting and decrypting sensitive data (change to a strong key).

### Running the Application

Start the application with:

```bash
npm run dev
```

This will start the server on `http://localhost:3000`.

## API Endpoints

### 1. **Create a Client**

`POST /clients`

- **Request Body**:
  ```json
     {
        "fullName": "John Doe",
        "dateOfBirth": "2001-01-23",
        "gender": "male",
        "contactNumber": "0737410216",
        "address": "872, Kimahi Street",
        "medicalHistory": "None "
    }
  ```

- **Response**:
  ```json
      [{
        "_id": "680d909831206b73af7457d1",
        "fullName": "John Doe",
        "dateOfBirth": "2001-01-23T00:00:00.000Z",
        "gender": "male",
        "contactNumber": "0737410216",
        "address": "872, Kimahi Street",
        "medicalHistory": "None ",
        "enrolledPrograms": [
            "680d73701346ff379803b8a7",
            "680d905b31206b73af7457cf"
        ],
        "createdAt": "2025-04-27T02:04:08.855Z",
        "updatedAt": "2025-04-27T02:04:20.526Z",
        "__v": 1
    }]
  ```

### 2. **Get All Clients**

`GET /clients`

- **Response**: Returns an array of all clients.

### 3. **Get a Client's Profile**

`GET /clients/:clientId`

- **Request Parameters**: `clientId` - The unique ID of the client.
- **Response**:
  ```json
      {
        "_id": "680d909831206b73af7457d1",
        "fullName": "John Doe",
        "dateOfBirth": "2001-01-23T00:00:00.000Z",
        "gender": "male",
        "contactNumber": "0737410216",
        "address": "872, Kimahi Street",
        "medicalHistory": "None ",
        "enrolledPrograms": [
            "680d73701346ff379803b8a7",
            "680d905b31206b73af7457cf"
        ],
        "createdAt": "2025-04-27T02:04:08.855Z",
        "updatedAt": "2025-04-27T02:04:20.526Z",
        "__v": 1
    }
  ```

### 4. **Search Clients**

`GET /clients/search?q={searchTerm}`

- **Query Parameters**: `q` - Search term for the client’s first name.
- **Response**: Returns an array of clients that match the search term.

### 5. **Enroll Programs**

`POST /clients/:clientId/enroll`

- **Request Body**:
  ```json
  {
    "programIds": ["programId1", "programId2"]
  }
  ```

- **Response**: The updated client with their enrolled programs.

## Security Considerations

### Data Encryption with crypto

- Sensitive client information such as `contactNumber`, `address`, and `medicalHistory` is encrypted before being stored in the database at rest.
- Data is decrypted when requested through the API to ensure that the sensitive information is only accessible to authorized parties.

### Rate limit to prevent DOS

- Prevent abuse of the API by adding rate limiting to the endpoints.
- It limits to only 100 requests in 15 mins

---

##  Deployment Overview

This application has been fully deployed:

- **Frontend**: Deployed on [**Vercel**](https://hospital-management-app-iota.vercel.app/)
 [hospital-management-app-iota.vercel.app](https://hospital-management-app-iota.vercel.app/)

- **Backend**: Deployed on **Render**  
  [https://hospital-management-app-cmsd.onrender.com](https://hospital-management-app-cmsd.onrender.com)

- **Database**: Hosted on **MongoDB Atlas**.  
  MongoDB Atlas stores all client and program data securely in the cloud.

---
## To get the John Doe's profile, run this on Postman or Curl
`GET https://hospital-management-app-cmsd.onrender.com/clients/680d909831206b73af7457d1`


# UCycle Web App

## Problem Context
Over the course of college, students accumulate items that they no longer need and lack the knowledge, resources, and motivation to correctly dispose or repurpose them

## Problem Statement
How might UW students safely buy and sell used items in order to reduce waste, mitigate cost and the risk of scams during move in/out?

## How To Run The Web App
- Open a terminal and go into the `/backend` directory and run `npm start` or `npm run dev` if you have nodemon installed
- Open another terminal and go into the `/frontend` directory and run `npm start`
    - This will open up the React App on [http://localhost:3000](http://localhost:3000) which is listening to http://localhost:4000 for the backend services

## Technologies Used
### Frontend:
- React (react-dom, react-icons, react-router-dom)
- Zustand (global state package for chat)
- Tailwind and DaisyUi (for styling)
- Flowbite-react (for Modal Components)

### Backend: 
- Express (Building RESTful APIs)
- Mongoose (Mongodb handling)
- AWS S3 /client-s3 and /s3-request-presigner (for image storage)
- JWT/jsonwebtoken (for user authentication and signn)
- Multer (for file handling and upload)
- bcryptjs (for password encryption)
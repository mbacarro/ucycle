# UCycle Backend


## Available Scripts

In the backend directory, you can run:

### `npm run dev`

_requires `nodemon` pagckage_

Runs the server in the development mode. Runnning on http://localhost:4000 and listening for requests.

The server will reload when you make changes (nodemon).


### `npm start`

Starts the server. Runnning on http://localhost:4000 and listening for requests.



### Future Team Notes
- Authentication is using JWT
    - [Guide that was followed](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtoimplementthebackend)
- `.env` file is not pushed so you need to create your own .env file and create your own AWS S3 Bucket and Mongodb Database
    - [Guide for AWS S3 that was followed](https://www.youtube.com/watch?v=eQAIojcArRY&t=953s)
    
    - Example `.env` file
    ```
    PORT=4000
    MONG_URI='Mongodb url connection'

    AWS_BUCKET_NAME='AWS S3 Bucket Name'
    AWS_BUCKET_REGION='AWS S3 Bucket '
    AWS_ACCESS_KEY='AWS User Access Key'
    AWS_SECRET_ACCESS_KEY='AWS User Access Key Secret'

    TOKEN_KEY="Random String for JWT Secret Token Creation" 
    ``
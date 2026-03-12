1. generate package.json 
2. create express server
3. Install mongoose and connect to MongoDB server
    REST API --- MongoDB native driver -> DB Server
    REST API --- MongoDM ODM(object document mapping ) tool -> DB server
     
     npm install mongoose
     
4. going to build  User REST API
            -create user
            -read all users
            -read a user by id
            -update user by id
            -delete user by id

5. create Schema and Model of the Resource(user)  

6. Define the routes and start performing operations 
7. createa user api and design routes


// main application contans instance http ...

8. handling error 



9.User authentication (login)
  - submit credentials and get token


  - req --->Public routes(by anyone)
  - req---> middleware(token verification middleware)---> protected routes(by authenticated users only)



  -> two popular attacks - xss,crsf 
  -> when you store in local,session,cookie then browser can read the data but httponly cookie the browser cant read that


  ->cross origin vs same origin
    -> cross origin means when the client and server applications are running in different domains
    ->same origin request means the client also running on the same domain of the server 
    ->cookies will send algon with request automatically in same origin request . But the cross origin request the token should be explicitly included to the request 

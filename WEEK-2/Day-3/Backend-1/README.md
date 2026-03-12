### Steps to create backend
1. Generate Package.json file 
    command - npm init -y
    here it creates the package.json then change the description,main,and type as module (without this you cant import and export )
// it contains the complete info of the project
2. Create the HTTP Server
    - Install  Express module ( by this we can create the http server)
          npm install express
          - it created package-lock.json(used for future version), node_modules
    - Import Express Module 

 //rest client is alternative for the postman to make reques
 //->get request and delete donot require body for them
 //->post request and push rquest should send data through body 

 //->get and delete request do not support body of the request object 
 //-> so these 2 requests can send data through rnf point 
 //->/path/:id(url parameter)(when client pass anything throw url parameter that will be automatically converted into string )
 //->  contains base url(upto port no) and endpoint
3. Create REST API |^| 

4. create data base Mongo db
   -> open compass do the connections open mongosh 'use mydb' it creates if not there
   -> show dbs ( shows the data base)

   creating collections
   db represents the current database
   db.createCollection('users')

   db.users.insertOne({name:"sai",age:21,city:"hyderabad"})
   db.users.insertMany([{}{}])

   -{
  acknowledged: true,
  insertedId: ObjectId('69a91bde1dc687776664d99b') -> this is the encoded one useful
}
   -> primary key automatically creates by mongodb
  -> READ/get
      -> db.users.findOne(condition)
      ->db.users.findMany(condition)
      -> without condition it gives all 
  -> using conditions
      ({field:{query-operator:values}})
     ->$gt,$lt,etc etc 
     ex- db.users.find({name:{$eq:"harsh"}})
         db.users.find({name:'harsh})
         db.users.find({age:{$in:[21,31,24]}})
         db.users.find({city:{$in:["hyderabad","banglore"]}})
  -> logical operators
     //find the users whose age above 25 and city hyderbad
     db.users.find({$and:[{age:{$gt:21}},{city:'hyderabad'}]})
      db.users.find({$or:[{age:{$gt:21}},{city:'hyderabad'}]})

  -> Update documents of a collection use $set
      ->updateOne()
      ->updateMany()
   -> nested document   
      db.users.findOne({"address.city":'hyderabad'})

      //update users document by adding skills field with values as array//
      // add new skill angular to user//
      // array update operations
        ->$push,$pop (push diectly adds new one doesnt check if exits)
        db.users.updateOne({name:'ravi'},{$push:{skills:"angular"}})
        db.users.updateOne({name:'ravi'},{$addToSet:{skills:"sql"}})

    ->pop deletes the last one 
    ->pull operator we can give the name no number

    -> to extract the specific fields like projections
# Rest Api  using Nodejs And ExpressJS

## INFO
   - App Runnng on http://localhost:3000
   - Use Insomnia To View Data
   - First run (ex ubuntu : npm install on file directory)
    
  

#### Method Get
  - Get Hello World http://localhost:3000
  - Get All Users http://localhost:3000/api/users
  - Get User With Pagination with endpont like page and limit
    - page = 3
    - limit = 10
    - ex : http://localhost:3000/api/user?page=3&limit=30
  - Search User 
    - ex : http://localhost:3000/api/userFind?searchkey=first_name&searchvalue=Liz
### Method Post
  - Add User 
    - json body example
{
"first_name":"dhiafadhil",
"last_name":"harzano",
"email":"fadil.tenten53@gmail.com",
"gender":"Male"
}

### Method Put
  - Update User
  http://localhost:3000/api/users/1
      - json body example
{
"first_name":"dhiafadhil",
"last_name":"harzano2",
"email":"fadil.tenten53@gmail.com",
"gender":"Male"
}

### Delete Users
  - By id users
    example : http://localhost:3000/api/users/99
    
# Thankyou :)

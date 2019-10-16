const data = require('../dataset/data');
let fs = require('fs');

exports.getHelloWord = (req,res) =>{
    let data = "Hello World!";
    res.send(data);
};

exports.getAllUsers = async (req,res) => {
    let user = await data
    res.send(user);
}

exports.getUsersByPagination = async (req,res) => {
    let user = await data;
    let page = req.query.page;
    let limit = req.query.limit;
    let dataUser = [];
    let i;
    let index = 0;
    if (page == 1){
        index = 0
    }else if (page == 3 ) {
        index = 60
    }
    for (i=0; i < limit; i++) {
        dataUser.push(user[i+index])
    }
    res.status(200);
    res.send(dataUser);
};

exports.getUser =  async (req,res) => {
    let user =  await  data;
    let searchkey = await req.query.searchkey;
    let searchvalue = await req.query.searchvalue;
    let indexUser;
    let getUser = false;
    for (i = 0; i < user.length; i++) {
        if (data[i][`${searchkey}`] === `${searchvalue}`){
            indexUser = i;
            getUser = true;
        }
    }
    if(getUser === true){
        res.status(200);
        res.send(data[indexUser]);
    }else{
        res.status(400)
        res.send({response : "data not found" })
    }

};

exports.addUsers = (req,res) => {
    fs.readFile('./dataset/data.json', function (err, data) {
        let dataJson = JSON.parse(data);
        let user = req.body;
        let sameEmail;
        let i;
        for (i = 0; i < dataJson.length; i++) {
            if (user.email === dataJson[i].email){
                sameEmail = true
            }
        }
        if (sameEmail === true){
            res.status(400);
            res.send({response : "email already in use"})
        } else{
            dataJson.push({
                "id" : dataJson.length + 1,
                "first_name" : user.name,
                "last_name": user.last_name,
                "email": user.email,
                "gender": user.gender
            });
            fs.writeFile("./dataset/data.json", JSON.stringify(dataJson));
            res.status(200);
            res.send({response : "success"})
        }
    })
};

exports.updateUsers =  (req,res) => {
    fs.readFile('./dataset/data.json',  function (err, data) {
        let dataJson = JSON.parse(data);
        let currentid = req.params.id;
        let idFound = false;
        let user = req.body;
        let i;
        for (i = 0; i < dataJson.length; i++) {
            if (dataJson[i].id == currentid){
                dataJson[i].first_name = user.first_name;
                dataJson[i].last_name = user.last_name;
                dataJson[i].email = user.email;
                dataJson[i].gender = user.gender;
                idFound = true;
            }
        }
        if (idFound === false){
            res.status(400);
            res.send({response : "user not found"})
        } else{
            fs.writeFile("./dataset/data.json", JSON.stringify(dataJson));
            res.status(200);
            res.send({response : "updated success"})
        }
    });
};

exports.removeUsers =  (req,res) => {
    fs.readFile('./dataset/data.json',  function (err, data) {
        let jsonData = data;
        let dataJson = JSON.parse(data);
        let currentid = req.params.id;
        let index;
        let idFound = false;
        let i;
        for (i = 0; i < dataJson.length; i++) {
            if (dataJson[i].id == currentid){
                dataJson.splice(i)
                idFound = true
            }
        }
        if (idFound === false){
            res.status(400);
            res.send({response : "user not found"})
        } else{
            fs.writeFile("./dataset/data.json", JSON.stringify(dataJson));
            res.status(200);
            res.send({response : "deleted success"})
        }
    });
};


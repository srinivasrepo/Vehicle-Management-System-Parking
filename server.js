//create express app i.e imports EXPRESS FUNCTION
const exp = require("express");
//here we change express function to object or placing
const app = exp();

//after creating DIST FOLDER ,now connect js bundles of dist folders to backend web application
//1st step---create path
const path = require("path");
//2nd step---now connect
app.use(exp.static(path.join(__dirname, './dist/vms')));

//import bcrypt
const bcrypt = require("bcrypt");

//import body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//jsonwebtoken
const jwt=require("jsonwebtoken")

//connect with mongodb server
const mc = require("mongodb").MongoClient;
//database object
var dbo;

//connect to db server to get database object
dburl = "mongodb+srv://srinivas1:srinivas1@cluster0-tuxru.mongodb.net/test?retryWrites=true&w=majority"
mc.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("error during db collection", err)
    }
    else {
        dbo = client.db("vmsdb")
        employeeCollectionObj = dbo.collection("employeeCollection");
        safeguardCollectionObj = dbo.collection("safeguardCollection");
        checkincheckoutCollectionObj = dbo.collection("checkincheckoutCollection");
        adminCollectionObj= dbo.collection("adminCollectionCollection");
        console.log("connected to vmsdb successfully");
    }
});


//******* LOG_IN & LOG_OUT   *********************************************************************************************** */
//*****************************************************************************************************

//
//
//log in request handler
var signedWebtoken;
app.post("/login",(req,res)=>{
    //verify email with database
    safeguardCollectionObj.findOne({name:req.body.name},(err,userObj)=>{
        if(err) throw err;
        //if name doesnot exists then send response as invalid username
        else if (userObj==null) {
            res.json({message:"Invalid username"});            
        }
        else{
            //if username is matched then compare the password
            //i.e check password==req.body.password
            bcrypt.compare(req.body.password , userObj.password, (err,matchedstatus)=>{
                if (matchedstatus==false) {
                    res.json({message:"Invalid Password"})
                }
                else{
                    //create and send web-token
                    jwt.sign({name:userObj.name},'secret',{expiresIn:60},(err,signedWebtoken))
                    if(err) throw err;
                    else{
                        res.json({message:"Logged_In Successflly ",token:signedWebtoken})
                        
                    }
                }
            })
        }
    })
})

//****************************************************************************************************** */
//*****************************************************************************************************
//*******  ADMIN MODULE    **********************************************************************************************
//******************************************************************************************************

//
//
//
//
//<-------------------EMP REGISTRATION COMPO CRUD OPERATIONS------------------->

//post for emp registration
app.post("/saveemp", (req, res) => {
    employeeCollectionObj.findOne({ id: req.body.id }, (err, result) => {
        if (err) {
            console.log("error in reading the id", err);
        }
        else if (result != null) {
            res.json({ message: "Data with id  already exist" })
        }
        else {
            employeeCollectionObj.insertOne(req.body, (err, result1) => {
                if (err) {
                    console.log("error in inserting the data with given id")
                }
                else {
                    res.json({ message: "Data with id  inserted successfully" })
                }
            })
        }

    })
})




//get request handler for emp details display
app.get('/readEmp', (req, res) => {
    //read data from employeeCollection object & convert it into array
    employeeCollectionObj.find().toArray((err, dataArray) => {
        if (err) {
            console.log("error in data read")
        }
        else {
            res.json({ message: dataArray })
        }
    })
})

//delete employee
app.delete("/deleteEmp/:id", (req, res) => {
    // var de = parseInt(req.params.id)
    console.log(req.params.id)
    employeeCollectionObj.deleteOne({ id: req.params.id }, (err, resultant) => {
        if (err) throw err
        else {
            employeeCollectionObj.find().toArray((err, dataArray) => {
                if (err) throw err
                else {
                    res.json({ message: dataArray })
                    console.log(dataArray)
                }
            })
        }
    })
})

//PUT Req handler for edit or update emp details
app.put("/updateemp", (req, res) => {
    // console.log(req.params.id)

    employeeCollectionObj.updateOne({ id: req.body.id }, { $set: { name: req.body.name, employeevehicleno: req.body.employeevehicleno, email: req.body.email, contact: req.body.contact, city: req.body.city } }, (err, result) => {
        if (err) {
            console.log("error in updating the data");
        }
        else {
            employeeCollectionObj.find().toArray((err, dataArray) => {
                if (err) throw err
                else {
                    res.json({ id: "success", message: dataArray })
                    console.log(dataArray)
                    // res.json({message:"Data updated succesfully"})
                }
            })
        }

    })
})

//
//
//
//
//<------------SAFE-GUARD COMPO CRUD OPERATIONS----------------->

//POST for SAFE-GUARD Registration & Bcrypt of password
app.post("/savesafeguard", (req, res) => {
    safeguardCollectionObj.findOne({ id: req.body.id }, (err, result) => {
        if (err) {
            console.log("error in reading the id", err);
        }
        else if (result != null) {
            res.json({ message: "Safe_Guard with given id already exists" })
        }
        else {
            bcrypt.hash(req.body.password,8,(err,hashedPassword)=>{
                if (err) {
                    console.log("Error in Password hash ",err)
                }
                else{
                    req.body.password=hashedPassword;safeguardCollectionObj.insertOne(req.body, (err, result) => {
                        if (err) {
                            console.log("error in inserting the data with given id")
                        }
                        else {
                            res.json({ message: " Data with id  inserted successfully" })
                        }
                    })
                }
            })
            
        }

    })
})




//get request handler for safeGuard details display
app.get('/readsafeguard', (req, res) => {
    //read data from employeeCollection object & convert it into array
    safeguardCollectionObj.find().toArray((err, dataArray) => {
        if (err) {
            console.log("error in data read")
        }
        else {
            res.json({ message: dataArray })
        }
    })
})

//delete employee
app.delete("/deletesafeguard/:id", (req, res) => {
    // var de = parseInt(req.params.id)
    console.log(req.params.id)
    safeguardCollectionObj.deleteOne({ id: req.params.id }, (err, resultant) => {
        if (err) throw err
        else {
            safeguardCollectionObj.find().toArray((err, dataArray) => {
                if (err) throw err
                else {
                    res.json({ message: dataArray })
                    console.log(dataArray)
                }
            })
        }
    })
})

//PUT Req handler for edit or update emp details
app.put("/updatsafeguard", (req, res) => {
    // console.log(req.params.id)

    safeguardCollectionObj.updateOne({ id: req.body.id }, { $set: { name: req.body.name, emailid: req.body.emailid, contactno: req.body.contactno, password: req.body.password } }, (err, result) => {
        if (err) {
            console.log("error in updating the data");
        }
        else {
            safeguardCollectionObj.find().toArray((err, dataArray) => {
                if (err) throw err
                else {
                    res.json({ id: "success", message: dataArray })
                    console.log(dataArray)
                    // res.json({message:"Data updated succesfully"})
                }
            })
        }

    })
})


//
//
//
//
//<-------------------C-I & C-O COMPO CRUD OPERATIONS------------------->

//check-in check-out read details
app.get('/readCicoDetails',(req,res)=>{
    //read all the documents form checkincheckoutCollection Object push them to array and display in checkicncheckoutDetails
    checkincheckoutCollectionObj.find().toArray((err,dataArray)=>{
        if (err) {
            console.log("Error in reading the data")
        }
        else{
            res.json({message:dataArray})
        }
    })
})


//check-in check-out UPDATE details
app.put("/aupdatecicodetails", (req, res) => {
   console.log(req.body)

    checkincheckoutCollectionObj.updateOne({ vehicleno: req.body.vehicleno }, { $set: { id: req.body.id, name: req.body.name, emailid: req.body.emailid, contactno: req.body.contactno, date: req.body.date, checkin: req.body.checkin, checkout: req.body.checkout } }, (err, result) => {
       console.log(req.body)
        if (err) {
            console.log("error in updating the data");
        }
        else {
            checkincheckoutCollectionObj.find().toArray((err, dataArray) => {
                if (err) throw err
                else {
                    res.json({ id: "success", message: dataArray })
                    //console.log(dataArray)
                    // res.json({message:"Data updated succesfully"})
                }
            })
        }

    })
})

//check-in check-out DELETE details
app.delete("/deletecico/:vehicleno", (req, res) => {
    // var de = parseInt(req.params.id)
    console.log(req.params.vehicleno)
    checkincheckoutCollectionObj.deleteOne({ vehicleno: req.params.vehicleno }, (err, resultant) => {
        if (err) throw err
        else {
            checkincheckoutCollectionObj.find().toArray((err, dataArray) => {
                if (err) throw err
                else {
                    res.json({ message: dataArray })
                    console.log(dataArray)
                }
            })
        }
    })
})






//****************************************************************************************************** */
//*****************************************************************************************************
//*******  SAFE-GUARD MODULE    **********************************************************************************************
//******************************************************************************************************

//
//
//
//
//<-------------EMPLOYEE-DETAILS COMPO req handlers------------>

//Emp Details GET req handler
app.get('/readEmpInSG',(req,res)=>{
    //read data from employee collection object & convert it into array
employeeCollectionObj.find().toArray((err,dataArray)=>{
    if(err){
        console.log("error in reading the data")
    }
    else{
        res.json({message:dataArray})
    }
})

})


//
//
//
//
//<-------------CHECK-IN & CHECK-OUT COMPO req handlers------------>

//Check-In&Out Post Req Handler
app.post("/savecico",(req,res)=>{
    employeeCollectionObj.findOne({employeevehicleno:req.body.vehicleno},(err,result)=>{
         if (err) {
             console.log("Error in loading",err);
         }
         else if (result=null) {
             res.json({message:"Employee with this vehicle no. doesnot exists"})
         }
         else{
             checkincheckoutCollectionObj.insertOne(req.body,(err,result)=>{
                 if (err) {
                     console.log("error in inserting the data")
                 }
                 else{
                     res.json({message:"Data inserted successfully"})
                 }
             })
         }
     })
})

//Check-In Check_Out GET req handler
app.get('/readCico',(req,res)=>{
    //read documents from checkincheckoutCollection Object & convert it Array
  checkincheckoutCollectionObj.find().toArray((err,dataArray)=>{
      if (err) {
          console.log("error in data read")
      }
      else{
          res.json({message:dataArray})
      }
  })
})


//Check-In Check-Out put(update) req handler
app.put('/updatecicodetails',(req,res)=>{
    console.log(req.body)
    checkincheckoutCollectionObj.updateOne({vehicleno:req.body.vehicleno},{$set:{id:req.body.id,name:req.body.name, emailid:req.body.emailid, contactno:req.body.contactno, date:req.body.date, checkin:req.body.checkin, checkout:req.body.checkout}},(err,result)=>{
     
 // employeeCollectionObj.updateOne({ id: req.body.id }, { $set: { name: req.body.name, employeevehicleno: req.body.employeevehicleno, email: req.body.email, contact: req.body.contact, city: req.body.city } }, (err, result) => {
    console.log(req.body)
        if (err) {
            console.log("error in updating the data");
        }
        else{
            checkincheckoutCollectionObj.find().toArray((err,dataArray)=>{
                if (err) throw err
                else{
                     //console.log(dataArray)
                    res.json({xyz:"success", message:dataArray})
                }
            })
        }
    })
})






//assign port number
 const PORT = 3000;
app.listen(process.env.PORT || 3000 ,() => {
console.log(`server listening on ${PORT}`)})
const express = require("express");
const connectDB = require ("./DB/connectDB")
const PersonDB = require("./Model/model")

const app = express();

const PORT =3000;

// new person 

//const Person = new PersonDB( { name:"mourad", age:38, favoriteFood:"spaghetti"})
//Person.save ((err)=>{
  //if (err) return handleError(err)
    //save
  //})

//Find All
//const search = async()=>{
  // try{
//const data = await PersonDB.find({});
//console.log(data)
  //  }
    //catch(err){
    //console.log(err)
    //}
 //}
//search()

//Find one
//const search = async()=>{
  //try{
//const data = await PersonDB.findOne({name:"salma"});
//console.log(data)
    //}catch(err){
    //console.log(err)
  // }
//}
//search()
//Find by id
//const search = async()=>{
// try{
//const data = await PersonDB.findById({_id:"612a0bc968f59e30cceceaa1"});
//console.log(data)
   // }catch(err){
       // console.log(err)
  // }
//}
//search()


//Find One Person which has a certain food in the person's favorites
 //const search = async() => {
  //try {
   // const data = await PersonDB.findOne({favoriteFood: "spaghetti"})
   // console.log(data)
    //} catch (err) {
   //console.error(err)
  //}
//}
 //search()

//const UpdatefavoriteFood= async()=>
//{
 // try{
   //const update= await PersonDB.findOneAndUpdate({_id:"612a0ba30a1b45578809d85c"} ,{$set:{'favoriteFood':"hamburger"}});
       
//console.log("update")
       // } catch (err){
       //console.log(err) 
      //}
    //}
  //

//UpdatefavoriteFood()
//const addAge = async()=>{
  //try{
     //const person= await PersonDB.findOneAndUpdate({_id:"612a0ba30a1b45578809d85c"} ,{$set:{'age':20}},{new:true, useFindAndModify: false});
         
  //console.log(person)
       // } catch (err){
        // console.log(err) 
       // }
  // }
      //addAge()


//Fin one delet
//const Delete = async()=>{
   //await PersonDB.findOneAndDelete({_id:"612a0ba30a1b45578809d85c"}, (err,data)=>{
       //try{
//console.log("removed Data",data)
      // }catch(error){
           // console.log(err)
       // }
    //})
//}

//Delete()


//Delete Many Documents with model.remove()

//const DeletePerson = async() => {
     //const res = await PersonDB.remove({name: "mourad"}, (err, data) => {
        // try {
         //  console.log("Persons removed ")
       // } catch (err) {
         // console.error(err) 
        // }
    // })
   // }

 //DeletePerson()

  //_Find people who like couscous

//const chainSearch = async() => {
    //try {
     //const data = await PersonDB.find({favoriteFood: {$elemMatch: {$eq: "salma"}}}).sort({name: 'mohamed'}).limit(2).select({age: 29, __v: 0}).exec()
          //console.log(data)
   // } catch (err) {
       // console.error(err)
    //}
//}
//chainSearch()


connectDB()

app.listen(PORT,(err)=>{
  err?
  console.log(err)
  : console.log(`server is ruuning in ${PORT}...`)
}
)
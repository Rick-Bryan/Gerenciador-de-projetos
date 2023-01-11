const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors');

const db= mysql.createPool({
    host:"localhost",
    user: "root",
    password: "password",
    database: "projetos"
})


app.use(cors())
app.use(express.json());

app.post('/newproject',(req,res)=>{
    const {nome_projeto} = req.body;
    const {cost} = req.body;
    const {category} = req.body;

    let SQL = "INSERT INTO projeto (nome_projeto, cost, category) VALUES (?,?,?)"

    db.query(SQL,[nome_projeto,cost,category],(err,result)=>{
        console.log(err)
    })
})
app.get('/projects',(req,res)=>{
    let SQL = " SELECT * FROM projeto"

    db.query(SQL,(err,result)=>{
        if(err) console.log(err);
        else res.send(result)
    })
})
app.put('/edit',(req,res)=>{
    const {id} =req.body;
    const {nome_projeto} =req.body;
    const {cost} =req.body;
    const {category} =req.body;

    let SQL= "UPDATE projeto SET nome_projeto=?,cost=?,category=? WHERE id=?";

    db.query(SQL,[nome_projeto,cost,category,id], (err,result)=>{
        if(err) console.log(err);
        else {
            res.send(result)
            
        };
        
    })
    
})
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    let SQL = "DELETE FROM projeto WHERE id=?";
    db.query(SQL,[id],(err,result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.listen(5000, ()=>{
    console.log('rodando servidor')
});
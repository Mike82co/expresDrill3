const express = require('express')
const cors = require('cors')
const app = express()
const data = require('./students')
const port = process.env.PORT || 3000;

app.listen(port)

app.get('/' , function(request, response){
    response.json({data:data})
})

app.get('/:ID', function(request, response){
    var student = getStudent(request.params.ID, data)
    if(!student){
        response.status(404).json({error:{
            message: 'Try again'
        }
        })
    }
    else{
        response.json(student)
    }
})

function getStudent(id, dataArr){
    var stu = dataArr.filter(student => {
        if(student.ID == id){
            return student
        }
        return null
    })
    return stu[0]
}
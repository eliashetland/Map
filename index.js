const express = require('express');
const Datastore = require('nedb');



// const fs = require('fs');
const app = express();
const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));


//database https://github.com/louischatriot/nedb#finding-documents
const database = new Datastore('database.db');
database.loadDatabase();

//sender data til log
app.get('/api', (request, response) => {
    database.find({}).sort({timestamp: -1 }).exec(function(err, data){
        if(err){
            response.end();
            return;
        }
        response.json(data);
    });
});

//mottar data fra enter
app.post('/api', (request, response)=>{
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    database.insert(data);
    response.json(data);
});
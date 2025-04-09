const express =  require('express');

const app = express();
const PORT =  3002;

app.get('/', (req, res)=>{
    res.json([
        {
          "id": 1,
          "name": "Alice",
          "email": "alice@example.com",
          "active": true
        },
        {
          "id": 2,
          "name": "Bob",
          "email": "bob@example.com",
          "active": false
        },
        {
          "id": 3,
          "name": "Charlie",
          "email": "charlie@example.com",
          "active": true
        }
      ]
      );
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
}); 
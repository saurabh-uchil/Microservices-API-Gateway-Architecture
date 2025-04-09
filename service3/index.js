const express =  require('express');

const app = express();
const PORT =  3003;

app.get('/', (req, res)=>{
    res.json(
         [
          {
            "id": 1,
            "name": "Web Development",
            "description": "Custom website development including front-end and back-end services.",
            "price": 1500,
            "category": "Web Development",
            "duration": "4 weeks",
            "inStock": true,
            "rating": 4.8,
            "reviews": [
              {
                "user": "Alice",
                "rating": 5,
                "comment": "The website was built exactly as I envisioned. Great work!"
              },
              {
                "user": "Bob",
                "rating": 4,
                "comment": "Good experience overall. The communication could be improved."
              }
            ]
          },
          {
            "id": 2,
            "name": "SEO Optimization",
            "description": "Optimize your website for better visibility on search engines like Google.",
            "price": 500,
            "category": "Marketing",
            "duration": "2 weeks",
            "inStock": true,
            "rating": 4.
      
}]);
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
}); 
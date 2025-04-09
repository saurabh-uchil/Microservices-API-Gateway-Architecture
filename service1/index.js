const express =  require('express');

const app = express();
const PORT =  3001;

app.get('/', (req, res)=>{
    res.json(
        {
            "products": [
              {
                "id": 1,
                "name": "Wireless Bluetooth Headphones",
                "price": 79.99,
                "category": "Electronics",
                "brand": "SoundMaster",
                "description": "High-quality wireless Bluetooth headphones with noise cancellation.",
                "inStock": true,
                "rating": 4.5,
                "reviews": [
                  {
                    "user": "Alice",
                    "rating": 5,
                    "comment": "Excellent sound quality and comfortable fit."
                  },
                  {
                    "user": "Bob",
                    "rating": 4,
                    "comment": "Good value for the price, but could use better bass."
                  }
                ]
              },
              {
                "id": 2,
                "name": "Smartphone 10 Pro",
                "price": 899.99,
                "category": "Electronics",
                "brand": "TechCo",
                "description": "The latest flagship smartphone with 5G connectivity and a 48MP camera.",
                "inStock": false,
                "rating": 4.7,
                "reviews": [
                  {
                    "user": "Charlie",
                    "rating": 5,
                    "comment": "Incredible performance and camera quality!"
                  },
                  {
                    "user": "David",
                    "rating": 4,
                    "comment": "Great phone but it’s a bit pricey."
                  }
                ]
              },
              {
                "id": 3,
                "name": "Portable Power Bank 20,000mAh",
                "price": 39.99,
                "category": "Accessories",
                "brand": "PowerGo",
                "description": "A high-capacity portable power bank to keep your devices charged on the go.",
                "inStock": true,
                "rating": 4.2,
                "reviews": [
                  {
                    "user": "Emma",
                    "rating": 4,
                    "comment": "Great capacity, but a bit bulky for my bag."
                  },
                  {
                    "user": "Frank",
                    "rating": 4,
                    "comment": "Works well, charges my devices multiple times."
                  }
                ]
              },
              {
                "id": 4,
                "name": "Coffee Maker 12-Cup",
                "price": 59.99,
                "category": "Home Appliances",
                "brand": "BrewMaster",
                "description": "12-cup programmable coffee maker with a built-in timer for fresh coffee every morning.",
                "inStock": true,
                "rating": 4.0,
                "reviews": [
                  {
                    "user": "Grace",
                    "rating": 4,
                    "comment": "Makes great coffee, but it’s a bit loud during brewing."
                  },
                  {
                    "user": "Henry",
                    "rating": 3,
                    "comment": "Decent coffee, but I wish it brewed faster."
                  }
                ]
              },
              {
                "id": 5,
                "name": "Wireless Mouse",
                "price": 19.99,
                "category": "Accessories",
                "brand": "ClickMaster",
                "description": "Ergonomic wireless mouse with USB receiver and adjustable DPI.",
                "inStock": true,
                "rating": 4.3,
                "reviews": [
                  {
                    "user": "Ivy",
                    "rating": 5,
                    "comment": "Perfect mouse for everyday use, very comfortable."
                  },
                  {
                    "user": "Jack",
                    "rating": 4,
                    "comment": "Good quality, but the range could be a little better."
                  }
                ]
              }
            ]
          }
          
    );
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
}); 
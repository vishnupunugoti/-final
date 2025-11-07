const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Recipe = require('../models/Recipe');

dotenv.config();

const recipes = [
  {
    "title": "Butter Chicken",
    "description": "Creamy and rich tomato-based curry with tender chicken pieces, a North Indian classic.",
    "category": "North Indian",
    "region": "Punjab",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    "youtubeUrl": "https://youtu.be/a03U45jFxOI?si=IaL0oYDnIdqi6U_7",
    "nutrition": {
      "calories": 490,
      "protein": 32,
      "carbs": 18,
      "fats": 32,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "500g"
      },
      {
        "name": "Tomatoes",
        "quantity": "4 large"
      },
      {
        "name": "Butter",
        "quantity": "3 tbsp"
      },
      {
        "name": "Heavy cream",
        "quantity": "1 cup"
      },
      {
        "name": "Onions",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "2 tbsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1 tsp"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Red chili powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Salt",
        "quantity": "to taste"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours."
      },
      {
        "step": 2,
        "description": "Cook chicken in a pan until golden brown, set aside."
      },
      {
        "step": 3,
        "description": "In the same pan, add butter and sauté onions until translucent."
      },
      {
        "step": 4,
        "description": "Add tomatoes and cook until soft. Blend into a smooth puree."
      },
      {
        "step": 5,
        "description": "Add spices and cream, simmer for 10 minutes."
      },
      {
        "step": 6,
        "description": "Add cooked chicken and simmer for 15 minutes. Serve hot with naan."
      }
    ],
    "prepTime": 30,
    "cookTime": 45,
    "servings": 4
  },
  {
    "title": "Biryani",
    "description": "Fragrant basmati rice layered with spiced meat and caramelized onions.",
    "category": "North Indian",
    "region": "Hyderabad",
    "difficulty": "Hard",
    "image": "https://images.unsplash.com/photo-1563379091339-03246963d96d?w=800",
    "youtubeUrl": "https://youtu.be/aleED1mc5kI?si=hd1ugqoduM5CshWx",
    "nutrition": {
      "calories": 620,
      "protein": 28,
      "carbs": 75,
      "fats": 22,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Basmati rice",
        "quantity": "2 cups"
      },
      {
        "name": "Chicken/Mutton",
        "quantity": "500g"
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup"
      },
      {
        "name": "Onions",
        "quantity": "3 large"
      },
      {
        "name": "Tomatoes",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "2 tbsp"
      },
      {
        "name": "Biryani masala",
        "quantity": "2 tbsp"
      },
      {
        "name": "Saffron",
        "quantity": "1 pinch"
      },
      {
        "name": "Mint leaves",
        "quantity": "1/2 cup"
      },
      {
        "name": "Cilantro",
        "quantity": "1/2 cup"
      },
      {
        "name": "Ghee",
        "quantity": "4 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak basmati rice for 30 minutes, partially boil until 70% cooked."
      },
      {
        "step": 2,
        "description": "Marinate meat with yogurt, spices, and ginger-garlic paste."
      },
      {
        "step": 3,
        "description": "Cook meat until tender and set aside."
      },
      {
        "step": 4,
        "description": "Fry onions until golden brown and crispy."
      },
      {
        "step": 5,
        "description": "Layer rice and meat in a heavy-bottomed pot with fried onions and herbs."
      },
      {
        "step": 6,
        "description": "Drizzle saffron milk and ghee. Cover and cook on dum for 20 minutes."
      }
    ],
    "prepTime": 45,
    "cookTime": 60,
    "servings": 6
  },
  {
    "title": "Masala Dosa",
    "description": "Crispy fermented crepe filled with spiced potato filling, served with coconut chutney.",
    "category": "South Indian",
    "region": "Karnataka",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
    "youtubeUrl": "https://youtu.be/rJSICjc5s84?si=vXVqz8Xg9RvAfaIa",
    "nutrition": {
      "calories": 320,
      "protein": 8,
      "carbs": 58,
      "fats": 6,
      "fiber": 5
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Urad dal",
        "quantity": "1/2 cup"
      },
      {
        "name": "Fenugreek seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Potatoes",
        "quantity": "4 medium"
      },
      {
        "name": "Onions",
        "quantity": "2 large"
      },
      {
        "name": "Mustard seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10-15 leaves"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Salt",
        "quantity": "to taste"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak rice and urad dal separately for 6 hours."
      },
      {
        "step": 2,
        "description": "Grind into a smooth batter, ferment overnight."
      },
      {
        "step": 3,
        "description": "Boil and mash potatoes."
      },
      {
        "step": 4,
        "description": "Sauté onions, mustard seeds, curry leaves, and spices."
      },
      {
        "step": 5,
        "description": "Mix with mashed potatoes to make filling."
      },
      {
        "step": 6,
        "description": "Pour batter on hot griddle, spread thin, cook until crispy."
      },
      {
        "step": 7,
        "description": "Add potato filling and fold. Serve with chutney and sambar."
      }
    ],
    "prepTime": 480,
    "cookTime": 30,
    "servings": 4
  },
  {
    "title": "Idli Sambar",
    "description": "Soft steamed rice cakes served with tangy lentil stew, a South Indian breakfast staple.",
    "category": "South Indian",
    "region": "Tamil Nadu",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800",
    "youtubeUrl": "https://www.youtube.com/watch?v=mCp8EAwAc0c",
    "nutrition": {
      "calories": 180,
      "protein": 6,
      "carbs": 35,
      "fats": 2,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Urad dal",
        "quantity": "1 cup"
      },
      {
        "name": "Toor dal",
        "quantity": "1/2 cup"
      },
      {
        "name": "Vegetables (drumstick, carrot)",
        "quantity": "2 cups"
      },
      {
        "name": "Tamarind",
        "quantity": "small lemon size"
      },
      {
        "name": "Sambar powder",
        "quantity": "2 tbsp"
      },
      {
        "name": "Mustard seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      },
      {
        "name": "Asafoetida",
        "quantity": "1 pinch"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak rice and urad dal for 6 hours, grind into smooth batter."
      },
      {
        "step": 2,
        "description": "Ferment batter overnight."
      },
      {
        "step": 3,
        "description": "Steam batter in idli molds for 10-12 minutes."
      },
      {
        "step": 4,
        "description": "Cook toor dal until soft and set aside."
      },
      {
        "step": 5,
        "description": "Boil vegetables in tamarind water, add sambar powder."
      },
      {
        "step": 6,
        "description": "Add cooked dal, temper with mustard seeds and curry leaves."
      },
      {
        "step": 7,
        "description": "Serve hot idlis with sambar and coconut chutney."
      }
    ],
    "prepTime": 480,
    "cookTime": 40,
    "servings": 4
  },
  {
    "title": "Dhokla",
    "description": "Soft, spongy fermented gram flour cakes, a popular Gujarati snack.",
    "category": "Gujarati",
    "region": "Gujarat",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800",
    "youtubeUrl": "https://www.youtube.com/watch?v=nVKXkZBnZs0",
    "nutrition": {
      "calories": 150,
      "protein": 5,
      "carbs": 28,
      "fats": 2,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Gram flour (besan)",
        "quantity": "2 cups"
      },
      {
        "name": "Yogurt",
        "quantity": "1/2 cup"
      },
      {
        "name": "Sugar",
        "quantity": "2 tbsp"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Ginger paste",
        "quantity": "1 tsp"
      },
      {
        "name": "Green chilies",
        "quantity": "2 chopped"
      },
      {
        "name": "Enos fruit salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      },
      {
        "name": "Mustard seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Mix besan, yogurt, sugar, turmeric, ginger paste, and chilies."
      },
      {
        "step": 2,
        "description": "Add water to make a smooth batter, let it ferment for 3-4 hours."
      },
      {
        "step": 3,
        "description": "Add Enos fruit salt just before steaming, mix gently."
      },
      {
        "step": 4,
        "description": "Pour into greased plate and steam for 15-20 minutes."
      },
      {
        "step": 5,
        "description": "Temper with mustard seeds and curry leaves."
      },
      {
        "step": 6,
        "description": "Cut into pieces and garnish with cilantro. Serve with green chutney."
      }
    ],
    "prepTime": 240,
    "cookTime": 20,
    "servings": 6
  },
  {
    "title": "Undhiyu",
    "description": "Traditional Gujarati mixed vegetable dish cooked with fenugreek dumplings.",
    "category": "Gujarati",
    "region": "Gujarat",
    "difficulty": "Hard",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    "youtubeUrl": "https://www.youtube.com/watch?v=hBSVZdTQmDs",
    "nutrition": {
      "calories": 280,
      "protein": 8,
      "carbs": 42,
      "fats": 9,
      "fiber": 8
    },
    "ingredients": [
      {
        "name": "Eggplant",
        "quantity": "2 small"
      },
      {
        "name": "Green beans",
        "quantity": "200g"
      },
      {
        "name": "Sweet potato",
        "quantity": "2 medium"
      },
      {
        "name": "Yam",
        "quantity": "200g"
      },
      {
        "name": "Fenugreek leaves",
        "quantity": "1 cup"
      },
      {
        "name": "Gram flour",
        "quantity": "1/2 cup"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "2 tbsp"
      },
      {
        "name": "Undhiyu masala",
        "quantity": "3 tbsp"
      },
      {
        "name": "Jaggery",
        "quantity": "1 tbsp"
      },
      {
        "name": "Oil",
        "quantity": "4 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Make muthiyas (dumplings) with fenugreek leaves and gram flour."
      },
      {
        "step": 2,
        "description": "Cut all vegetables into chunks."
      },
      {
        "step": 3,
        "description": "Heat oil in a heavy-bottomed pot, add vegetables and muthiyas."
      },
      {
        "step": 4,
        "description": "Add undhiyu masala, jaggery, and salt."
      },
      {
        "step": 5,
        "description": "Cover and cook on low heat for 40-45 minutes until vegetables are tender."
      },
      {
        "step": 6,
        "description": "Serve hot with puri or roti."
      }
    ],
    "prepTime": 30,
    "cookTime": 50,
    "servings": 6
  },
  {
    "title": "Fish Curry",
    "description": "Tangy and spicy fish curry with mustard seeds and coconut, a Bengali favorite.",
    "category": "Bengali",
    "region": "West Bengal",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "youtubeUrl": "https://youtu.be/RB1ZOlRIw0o?si=5NvuQfT8ze_430_B",
    "nutrition": {
      "calories": 320,
      "protein": 28,
      "carbs": 8,
      "fats": 20,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Rohu fish",
        "quantity": "500g"
      },
      {
        "name": "Mustard oil",
        "quantity": "3 tbsp"
      },
      {
        "name": "Mustard seeds",
        "quantity": "2 tbsp"
      },
      {
        "name": "Turmeric",
        "quantity": "1 tsp"
      },
      {
        "name": "Red chili powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Tomatoes",
        "quantity": "2 medium"
      },
      {
        "name": "Green chilies",
        "quantity": "3-4"
      },
      {
        "name": "Ginger paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Mustard paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Salt",
        "quantity": "to taste"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Marinate fish with turmeric and salt for 15 minutes."
      },
      {
        "step": 2,
        "description": "Fry fish pieces until golden, set aside."
      },
      {
        "step": 3,
        "description": "Heat mustard oil, add mustard seeds and let them splutter."
      },
      {
        "step": 4,
        "description": "Add tomatoes, ginger paste, and spices, cook until oil separates."
      },
      {
        "step": 5,
        "description": "Add mustard paste and water, bring to boil."
      },
      {
        "step": 6,
        "description": "Add fish pieces and simmer for 10 minutes. Serve with steamed rice."
      }
    ],
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4
  },
  {
    "title": "Chicken Tikka Masala",
    "description": "Grilled chicken pieces in rich, creamy tomato-based curry.",
    "category": "North Indian",
    "region": "Punjab",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    "youtubeUrl": "https://youtu.be/Cr5dn48vER8?si=bObhiSh3HFemJqPj",
    "nutrition": {
      "calories": 450,
      "protein": 30,
      "carbs": 16,
      "fats": 28,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Chicken breast",
        "quantity": "500g"
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup"
      },
      {
        "name": "Heavy cream",
        "quantity": "1/2 cup"
      },
      {
        "name": "Tomatoes",
        "quantity": "4 large"
      },
      {
        "name": "Onions",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "2 tbsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1 tsp"
      },
      {
        "name": "Paprika",
        "quantity": "1 tsp"
      },
      {
        "name": "Kasuri methi",
        "quantity": "1 tsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Marinate chicken with yogurt and spices for 4 hours."
      },
      {
        "step": 2,
        "description": "Grill or pan-fry chicken until cooked through."
      },
      {
        "step": 3,
        "description": "Sauté onions, add tomatoes and spices, cook until soft."
      },
      {
        "step": 4,
        "description": "Blend into smooth puree, add cream and kasuri methi."
      },
      {
        "step": 5,
        "description": "Add grilled chicken pieces, simmer for 10 minutes."
      },
      {
        "step": 6,
        "description": "Serve hot with naan or rice."
      }
    ],
    "prepTime": 240,
    "cookTime": 40,
    "servings": 4
  },
  {
    "title": "Pani Puri",
    "description": "Crispy hollow puris filled with spiced water, chickpeas, and potatoes.",
    "category": "Street Food",
    "region": "Gujarat",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    "youtubeUrl": "https://youtu.be/6adaZawnzFo?si=twlH4142wyBQt08l",
    "nutrition": {
      "calories": 120,
      "protein": 3,
      "carbs": 24,
      "fats": 2,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Puri shells",
        "quantity": "30 pieces"
      },
      {
        "name": "Tamarind",
        "quantity": "small lemon size"
      },
      {
        "name": "Mint leaves",
        "quantity": "1 cup"
      },
      {
        "name": "Coriander leaves",
        "quantity": "1 cup"
      },
      {
        "name": "Green chilies",
        "quantity": "3-4"
      },
      {
        "name": "Black salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Cumin powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Potatoes",
        "quantity": "3 medium"
      },
      {
        "name": "Chickpeas",
        "quantity": "1/2 cup"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Boil potatoes and chickpeas, dice potatoes."
      },
      {
        "step": 2,
        "description": "Blend mint, coriander, green chilies with water to make pani."
      },
      {
        "step": 3,
        "description": "Strain and add black salt, cumin powder, and tamarind."
      },
      {
        "step": 4,
        "description": "Make small hole in puri, fill with potatoes and chickpeas."
      },
      {
        "step": 5,
        "description": "Fill with spicy pani, eat immediately."
      },
      {
        "step": 6,
        "description": "Serve with sweet tamarind chutney on the side."
      }
    ],
    "prepTime": 30,
    "cookTime": 15,
    "servings": 6
  },
  {
    "title": "Samosa",
    "description": "Deep-fried pastry filled with spiced potato and peas mixture.",
    "category": "Street Food",
    "region": "North India",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    "youtubeUrl": "https://youtu.be/Pt_mLK05Jno?si=Nm5_lxzaKsDgJr43",
    "nutrition": {
      "calories": 262,
      "protein": 5,
      "carbs": 32,
      "fats": 13,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "All-purpose flour",
        "quantity": "2 cups"
      },
      {
        "name": "Potatoes",
        "quantity": "4 large"
      },
      {
        "name": "Green peas",
        "quantity": "1/2 cup"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1 tsp"
      },
      {
        "name": "Amchur powder",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Green chilies",
        "quantity": "2-3"
      },
      {
        "name": "Ginger",
        "quantity": "1 inch"
      },
      {
        "name": "Oil",
        "quantity": "for frying"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Boil and mash potatoes."
      },
      {
        "step": 2,
        "description": "Sauté cumin, ginger, chilies, add peas and mashed potatoes."
      },
      {
        "step": 3,
        "description": "Add spices, cool the mixture."
      },
      {
        "step": 4,
        "description": "Make dough with flour and oil, rest for 30 minutes."
      },
      {
        "step": 5,
        "description": "Shape into cones, fill with mixture, seal edges."
      },
      {
        "step": 6,
        "description": "Deep fry until golden and crispy. Serve with chutney."
      }
    ],
    "prepTime": 40,
    "cookTime": 30,
    "servings": 6
  },
  {
    "title": "Mutton Curry",
    "description": "Tender mutton pieces in aromatic spicy gravy, a rich North Indian dish.",
    "category": "North Indian",
    "region": "Kashmir",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    "youtubeUrl": "https://youtu.be/uEl7cLuhWHM?si=d6h11MDGCbvktROY",
    "nutrition": {
      "calories": 520,
      "protein": 35,
      "carbs": 12,
      "fats": 38,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Mutton",
        "quantity": "1 kg"
      },
      {
        "name": "Onions",
        "quantity": "3 large"
      },
      {
        "name": "Tomatoes",
        "quantity": "3 medium"
      },
      {
        "name": "Yogurt",
        "quantity": "1/2 cup"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "2 tbsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1 tbsp"
      },
      {
        "name": "Red chili powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Coriander leaves",
        "quantity": "for garnish"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Marinate mutton with yogurt and spices for 2 hours."
      },
      {
        "step": 2,
        "description": "Heat oil, sauté onions until golden brown."
      },
      {
        "step": 3,
        "description": "Add ginger-garlic paste and tomatoes, cook until soft."
      },
      {
        "step": 4,
        "description": "Add marinated mutton, cook on high heat for 5 minutes."
      },
      {
        "step": 5,
        "description": "Add water, cover and cook on low heat for 45-60 minutes until tender."
      },
      {
        "step": 6,
        "description": "Garnish with coriander. Serve hot with naan or rice."
      }
    ],
    "prepTime": 120,
    "cookTime": 75,
    "servings": 6
  },
  {
    "title": "Gulab Jamun",
    "description": "Sweet milk solids dumplings soaked in sugar syrup, a popular Indian dessert.",
    "category": "Other",
    "region": "North India",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    "youtubeUrl": "https://youtu.be/jz55LQr_nsk?si=ygIOMsL68RnIL7Zh",
    "nutrition": {
      "calories": 175,
      "protein": 3,
      "carbs": 32,
      "fats": 5,
      "fiber": 0
    },
    "ingredients": [
      {
        "name": "Milk powder",
        "quantity": "1 cup"
      },
      {
        "name": "All-purpose flour",
        "quantity": "1/4 cup"
      },
      {
        "name": "Ghee",
        "quantity": "1 tbsp"
      },
      {
        "name": "Milk",
        "quantity": "2-3 tbsp"
      },
      {
        "name": "Sugar",
        "quantity": "2 cups"
      },
      {
        "name": "Water",
        "quantity": "2 cups"
      },
      {
        "name": "Cardamom powder",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Rose water",
        "quantity": "1 tsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Mix milk powder, flour, and ghee. Add milk to make soft dough."
      },
      {
        "step": 2,
        "description": "Shape into small smooth balls without cracks."
      },
      {
        "step": 3,
        "description": "Boil sugar and water to make syrup, add cardamom and rose water."
      },
      {
        "step": 4,
        "description": "Heat oil on low, deep fry jamuns until golden brown."
      },
      {
        "step": 5,
        "description": "Soak hot jamuns in warm syrup for at least 2 hours."
      },
      {
        "step": 6,
        "description": "Serve warm or cold."
      }
    ],
    "prepTime": 30,
    "cookTime": 30,
    "servings": 8
  },
  {
    "title": "Jalebi",
    "description": "Crispy, spiral-shaped sweet soaked in sugar syrup.",
    "category": "Street Food",
    "region": "North India",
    "difficulty": "Hard",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    "youtubeUrl": "https://youtu.be/RUoTbwqEEJc?si=09Y7w0q4AlnYccUn",
    "nutrition": {
      "calories": 150,
      "protein": 2,
      "carbs": 32,
      "fats": 3,
      "fiber": 0
    },
    "ingredients": [
      {
        "name": "All-purpose flour",
        "quantity": "1 cup"
      },
      {
        "name": "Yogurt",
        "quantity": "2 tbsp"
      },
      {
        "name": "Turmeric",
        "quantity": "1/4 tsp"
      },
      {
        "name": "Sugar",
        "quantity": "1.5 cups"
      },
      {
        "name": "Water",
        "quantity": "1 cup"
      },
      {
        "name": "Saffron",
        "quantity": "few strands"
      },
      {
        "name": "Cardamom powder",
        "quantity": "1/4 tsp"
      },
      {
        "name": "Oil",
        "quantity": "for frying"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Mix flour, yogurt, turmeric, and water to make smooth batter."
      },
      {
        "step": 2,
        "description": "Ferment batter for 8-10 hours until slightly sour."
      },
      {
        "step": 3,
        "description": "Boil sugar and water to make one-string consistency syrup."
      },
      {
        "step": 4,
        "description": "Add saffron and cardamom to syrup, keep warm."
      },
      {
        "step": 5,
        "description": "Pour batter in circular motion in hot oil, fry until crispy."
      },
      {
        "step": 6,
        "description": "Soak hot jalebis in syrup for 30 seconds. Serve immediately."
      }
    ],
    "prepTime": 480,
    "cookTime": 30,
    "servings": 8
  },
  {
    "title": "Kadai Paneer",
    "description": "Spicy paneer curry cooked in a kadai (wok) with bell peppers and aromatic spices.",
    "category": "North Indian",
    "region": "Punjab",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    "youtubeUrl": "https://youtu.be/RccxWa3_cq8?si=OubbLDttx6S6bq9G",
    "nutrition": {
      "calories": 340,
      "protein": 18,
      "carbs": 12,
      "fats": 25,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "400g"
      },
      {
        "name": "Bell peppers",
        "quantity": "2 medium"
      },
      {
        "name": "Onions",
        "quantity": "2 large"
      },
      {
        "name": "Tomatoes",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Kadai masala",
        "quantity": "2 tbsp"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Coriander powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Red chili powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Cream",
        "quantity": "2 tbsp"
      },
      {
        "name": "Oil",
        "quantity": "3 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Cut paneer into cubes, lightly fry until golden. Set aside."
      },
      {
        "step": 2,
        "description": "Sauté cumin seeds in hot oil until fragrant."
      },
      {
        "step": 3,
        "description": "Add onions and ginger-garlic paste, cook until golden."
      },
      {
        "step": 4,
        "description": "Add tomatoes and spices, cook until oil separates."
      },
      {
        "step": 5,
        "description": "Add bell peppers and paneer, mix gently."
      },
      {
        "step": 6,
        "description": "Add cream and simmer for 5 minutes. Garnish with coriander."
      }
    ],
    "prepTime": 20,
    "cookTime": 25,
    "servings": 4
  },
  {
    "title": "Palak Paneer",
    "description": "Creamy spinach curry with soft paneer cubes, a healthy North Indian favorite.",
    "category": "North Indian",
    "region": "Punjab",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800",
    "youtubeUrl": "https://youtu.be/BnYVJr-zZW4?si=vxkG6aP2lhp8ZLhW",
    "nutrition": {
      "calories": 290,
      "protein": 16,
      "carbs": 14,
      "fats": 20,
      "fiber": 6
    },
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "400g"
      },
      {
        "name": "Spinach",
        "quantity": "500g"
      },
      {
        "name": "Onions",
        "quantity": "2 medium"
      },
      {
        "name": "Tomatoes",
        "quantity": "2 medium"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Garam masala",
        "quantity": "1 tsp"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Cream",
        "quantity": "2 tbsp"
      },
      {
        "name": "Oil",
        "quantity": "3 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Blanch spinach in boiling water, puree until smooth."
      },
      {
        "step": 2,
        "description": "Cut paneer into cubes, lightly fry until golden."
      },
      {
        "step": 3,
        "description": "Heat oil, add cumin seeds, then onions and ginger-garlic paste."
      },
      {
        "step": 4,
        "description": "Add tomatoes and spices, cook until soft."
      },
      {
        "step": 5,
        "description": "Add spinach puree, simmer for 10 minutes."
      },
      {
        "step": 6,
        "description": "Add paneer and cream, simmer for 5 minutes. Serve hot with naan."
      }
    ],
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4
  },
  {
    "title": "Chana Masala",
    "description": "Spicy chickpea curry with tangy flavors, a North Indian vegetarian classic.",
    "category": "North Indian",
    "region": "Punjab",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    "youtubeUrl": "https://youtu.be/M-ohmJswy6A?si=M-46PUtteUlMNBbA",
    "nutrition": {
      "calories": 320,
      "protein": 14,
      "carbs": 48,
      "fats": 8,
      "fiber": 12
    },
    "ingredients": [
      {
        "name": "Chickpeas (kabuli chana)",
        "quantity": "2 cups boiled"
      },
      {
        "name": "Onions",
        "quantity": "2 large"
      },
      {
        "name": "Tomatoes",
        "quantity": "3 medium"
      },
      {
        "name": "Ginger-garlic paste",
        "quantity": "1 tbsp"
      },
      {
        "name": "Chana masala powder",
        "quantity": "2 tbsp"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Amchur powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Red chili powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Coriander leaves",
        "quantity": "for garnish"
      },
      {
        "name": "Oil",
        "quantity": "3 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak chickpeas overnight, pressure cook until soft."
      },
      {
        "step": 2,
        "description": "Heat oil, add cumin seeds, sauté onions until golden."
      },
      {
        "step": 3,
        "description": "Add ginger-garlic paste and tomatoes, cook until soft."
      },
      {
        "step": 4,
        "description": "Add chana masala powder and other spices, cook until oil separates."
      },
      {
        "step": 5,
        "description": "Add boiled chickpeas with water, simmer for 15 minutes."
      },
      {
        "step": 6,
        "description": "Garnish with coriander leaves. Serve with roti or rice."
      }
    ],
    "prepTime": 480,
    "cookTime": 40,
    "servings": 4
  },
  {
    "title": "Uttapam",
    "description": "Thick, fluffy pancake made with fermented rice and lentil batter, topped with vegetables.",
    "category": "South Indian",
    "region": "Tamil Nadu",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
    "youtubeUrl": "https://youtu.be/Knx-ZTrUN0U?si=vjcZfNi7GfG0Tesx",
    "nutrition": {
      "calories": 240,
      "protein": 7,
      "carbs": 44,
      "fats": 4,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Urad dal",
        "quantity": "1/2 cup"
      },
      {
        "name": "Onions",
        "quantity": "2 medium"
      },
      {
        "name": "Tomatoes",
        "quantity": "2 medium"
      },
      {
        "name": "Green chilies",
        "quantity": "3-4"
      },
      {
        "name": "Cilantro",
        "quantity": "1/2 cup"
      },
      {
        "name": "Carrot",
        "quantity": "1 medium"
      },
      {
        "name": "Capsicum",
        "quantity": "1 medium"
      },
      {
        "name": "Oil",
        "quantity": "for cooking"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak rice and urad dal separately for 6 hours."
      },
      {
        "step": 2,
        "description": "Grind into smooth batter, ferment overnight."
      },
      {
        "step": 3,
        "description": "Chop vegetables finely for toppings."
      },
      {
        "step": 4,
        "description": "Heat griddle, pour thick layer of batter."
      },
      {
        "step": 5,
        "description": "Sprinkle vegetables on top, drizzle oil around edges."
      },
      {
        "step": 6,
        "description": "Cook until bottom is golden, flip and cook other side. Serve hot with chutney."
      }
    ],
    "prepTime": 480,
    "cookTime": 20,
    "servings": 4
  },
  {
    "title": "Rava Dosa",
    "description": "Crispy instant dosa made with semolina, no fermentation required.",
    "category": "South Indian",
    "region": "Karnataka",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
    "youtubeUrl": "https://youtu.be/HTSoJemOiX8?si=ehuq6KTz826yAWgl",
    "nutrition": {
      "calories": 280,
      "protein": 6,
      "carbs": 48,
      "fats": 7,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Semolina (rava)",
        "quantity": "1 cup"
      },
      {
        "name": "Rice flour",
        "quantity": "1/2 cup"
      },
      {
        "name": "All-purpose flour",
        "quantity": "1/4 cup"
      },
      {
        "name": "Onions",
        "quantity": "2 medium"
      },
      {
        "name": "Green chilies",
        "quantity": "3-4"
      },
      {
        "name": "Ginger",
        "quantity": "1 inch"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      },
      {
        "name": "Cilantro",
        "quantity": "2 tbsp"
      },
      {
        "name": "Water",
        "quantity": "as needed"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Mix semolina, rice flour, and all-purpose flour."
      },
      {
        "step": 2,
        "description": "Add water gradually to make thin batter, rest for 30 minutes."
      },
      {
        "step": 3,
        "description": "Add chopped onions, chilies, ginger, and spices to batter."
      },
      {
        "step": 4,
        "description": "Heat griddle, pour batter in circular motion from outside to inside."
      },
      {
        "step": 5,
        "description": "Add oil around edges, cook until crispy and golden brown."
      },
      {
        "step": 6,
        "description": "Serve hot with coconut chutney and sambar."
      }
    ],
    "prepTime": 30,
    "cookTime": 20,
    "servings": 4
  },
  {
    "title": "Rava Idli",
    "description": "Soft and fluffy instant idli made with semolina, perfect for breakfast.",
    "category": "South Indian",
    "region": "Karnataka",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800",
    "youtubeUrl": "https://youtu.be/m38rwD_42bw?si=QtfMId2XumX8_lbZ",
    "nutrition": {
      "calories": 190,
      "protein": 5,
      "carbs": 34,
      "fats": 4,
      "fiber": 2
    },
    "ingredients": [
      {
        "name": "Semolina (rava)",
        "quantity": "1 cup"
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup"
      },
      {
        "name": "Enos fruit salt",
        "quantity": "1 tsp"
      },
      {
        "name": "Mustard seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Urad dal",
        "quantity": "1 tbsp"
      },
      {
        "name": "Chana dal",
        "quantity": "1 tbsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      },
      {
        "name": "Green chilies",
        "quantity": "2-3"
      },
      {
        "name": "Cashews",
        "quantity": "10-12"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Dry roast semolina until aromatic, cool."
      },
      {
        "step": 2,
        "description": "Heat oil, add mustard seeds, urad dal, and chana dal."
      },
      {
        "step": 3,
        "description": "Add cashews, curry leaves, and chilies, sauté."
      },
      {
        "step": 4,
        "description": "Mix with semolina, add yogurt and water to make thick batter."
      },
      {
        "step": 5,
        "description": "Add Enos fruit salt just before steaming, mix gently."
      },
      {
        "step": 6,
        "description": "Pour into greased idli molds, steam for 12-15 minutes. Serve with chutney."
      }
    ],
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4
  },
  {
    "title": "Medu Vada",
    "description": "Crispy, fluffy lentil fritters, a South Indian breakfast favorite.",
    "category": "South Indian",
    "region": "Tamil Nadu",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800",
    "youtubeUrl": "https://youtu.be/ng3_Q8G6KGs?si=goTEjnmWYxI3OjUF",
    "nutrition": {
      "calories": 220,
      "protein": 8,
      "carbs": 28,
      "fats": 9,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Urad dal",
        "quantity": "1 cup"
      },
      {
        "name": "Rice flour",
        "quantity": "1 tbsp"
      },
      {
        "name": "Onions",
        "quantity": "1 medium"
      },
      {
        "name": "Green chilies",
        "quantity": "2-3"
      },
      {
        "name": "Ginger",
        "quantity": "1 inch"
      },
      {
        "name": "Black pepper",
        "quantity": "1 tsp"
      },
      {
        "name": "Cumin seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      },
      {
        "name": "Cilantro",
        "quantity": "2 tbsp"
      },
      {
        "name": "Oil",
        "quantity": "for frying"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak urad dal for 4-6 hours, drain completely."
      },
      {
        "step": 2,
        "description": "Grind dal with minimal water to smooth, fluffy batter."
      },
      {
        "step": 3,
        "description": "Mix in chopped onions, chilies, ginger, and spices."
      },
      {
        "step": 4,
        "description": "Add rice flour for crispiness, mix well."
      },
      {
        "step": 5,
        "description": "Wet hands, shape into donut-like vadas with hole in center."
      },
      {
        "step": 6,
        "description": "Deep fry on medium heat until golden and crispy. Serve hot with sambar."
      }
    ],
    "prepTime": 360,
    "cookTime": 30,
    "servings": 4
  },
  {
    "title": "Dosa",
    "description": "Crispy fermented crepe made from rice and lentils, a South Indian staple.",
    "category": "South Indian",
    "region": "Tamil Nadu",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
    "youtubeUrl": "https://youtu.be/PFG1aeYgi7c?si=OCcXQ3N38X9AcqL0",
    "nutrition": {
      "calories": 200,
      "protein": 6,
      "carbs": 38,
      "fats": 3,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Rice",
        "quantity": "2 cups"
      },
      {
        "name": "Urad dal",
        "quantity": "1/2 cup"
      },
      {
        "name": "Fenugreek seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Salt",
        "quantity": "to taste"
      },
      {
        "name": "Oil",
        "quantity": "for cooking"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Soak rice and urad dal separately for 6 hours."
      },
      {
        "step": 2,
        "description": "Grind urad dal to smooth paste, then grind rice coarsely."
      },
      {
        "step": 3,
        "description": "Mix both batters with fenugreek seeds, ferment overnight."
      },
      {
        "step": 4,
        "description": "Add salt to fermented batter, mix well."
      },
      {
        "step": 5,
        "description": "Heat griddle, pour thin layer of batter, drizzle oil around edges."
      },
      {
        "step": 6,
        "description": "Cook until crispy and golden. Serve with chutney and sambar."
      }
    ],
    "prepTime": 480,
    "cookTime": 20,
    "servings": 4
  },
  {
    "title": "Vada Sambar",
    "description": "Crispy lentil fritters served with tangy lentil stew, a classic South Indian combination.",
    "category": "South Indian",
    "region": "Tamil Nadu",
    "difficulty": "Medium",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800",
    "youtubeUrl": "https://youtu.be/kbA6oksGIXo?si=y2tItoyIWwFLjXcs",
    "nutrition": {
      "calories": 280,
      "protein": 12,
      "carbs": 42,
      "fats": 8,
      "fiber": 8
    },
    "ingredients": [
      {
        "name": "Urad dal",
        "quantity": "1 cup"
      },
      {
        "name": "Toor dal",
        "quantity": "1/2 cup"
      },
      {
        "name": "Drumstick",
        "quantity": "2 pieces"
      },
      {
        "name": "Carrot",
        "quantity": "1 medium"
      },
      {
        "name": "Onion",
        "quantity": "1 medium"
      },
      {
        "name": "Tamarind",
        "quantity": "small lemon size"
      },
      {
        "name": "Sambar powder",
        "quantity": "2 tbsp"
      },
      {
        "name": "Mustard seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      },
      {
        "name": "Oil",
        "quantity": "for frying"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Make vadas following medu vada recipe, deep fry until golden."
      },
      {
        "step": 2,
        "description": "Cook toor dal until soft, set aside."
      },
      {
        "step": 3,
        "description": "Boil vegetables in tamarind water until tender."
      },
      {
        "step": 4,
        "description": "Add sambar powder and cooked dal, bring to boil."
      },
      {
        "step": 5,
        "description": "Temper with mustard seeds and curry leaves."
      },
      {
        "step": 6,
        "description": "Serve hot vadas with sambar, coconut chutney on the side."
      }
    ],
    "prepTime": 360,
    "cookTime": 40,
    "servings": 4
  },
  {
    "title": "Thepla",
    "description": "Soft, spiced flatbread from Gujarat, perfect for travel and snacks.",
    "category": "Gujarati",
    "region": "Gujarat",
    "difficulty": "Easy",
    "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800",
    "youtubeUrl": "https://youtu.be/l-6wWsZoFpE?si=r8xL9XWBmd_soYQi",
    "nutrition": {
      "calories": 180,
      "protein": 5,
      "carbs": 32,
      "fats": 4,
      "fiber": 4
    },
    "ingredients": [
      {
        "name": "Wheat flour",
        "quantity": "2 cups"
      },
      {
        "name": "Fenugreek leaves (methi)",
        "quantity": "1 cup chopped"
      },
      {
        "name": "Yogurt",
        "quantity": "2 tbsp"
      },
      {
        "name": "Red chili powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Cumin-coriander powder",
        "quantity": "1 tsp"
      },
      {
        "name": "Sesame seeds",
        "quantity": "1 tbsp"
      },
      {
        "name": "Oil",
        "quantity": "2 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Wash and chop fenugreek leaves finely."
      },
      {
        "step": 2,
        "description": "Mix flour with spices, fenugreek leaves, yogurt, and oil."
      },
      {
        "step": 3,
        "description": "Add water gradually to make soft dough, rest for 20 minutes."
      },
      {
        "step": 4,
        "description": "Divide into small balls, roll into thin circles."
      },
      {
        "step": 5,
        "description": "Cook on griddle with oil on both sides until golden spots appear."
      },
      {
        "step": 6,
        "description": "Serve hot with pickle, yogurt, or chunda (sweet mango pickle)."
      }
    ],
    "prepTime": 25,
    "cookTime": 20,
    "servings": 6
  },
  {
    "title": "Khandvi",
    "description": "Soft, rolled gram flour snacks with tempered spices, a delicate Gujarati appetizer.",
    "category": "Gujarati",
    "region": "Gujarat",
    "difficulty": "Hard",
    "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800",
    "youtubeUrl": "https://youtu.be/ndTp8_1Kdyk?si=7G9WZVOB_7cpndTJ",
    "nutrition": {
      "calories": 140,
      "protein": 6,
      "carbs": 20,
      "fats": 4,
      "fiber": 3
    },
    "ingredients": [
      {
        "name": "Gram flour (besan)",
        "quantity": "1 cup"
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup"
      },
      {
        "name": "Turmeric",
        "quantity": "1/2 tsp"
      },
      {
        "name": "Ginger paste",
        "quantity": "1 tsp"
      },
      {
        "name": "Mustard seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Sesame seeds",
        "quantity": "1 tsp"
      },
      {
        "name": "Curry leaves",
        "quantity": "10 leaves"
      },
      {
        "name": "Coconut",
        "quantity": "2 tbsp grated"
      },
      {
        "name": "Cilantro",
        "quantity": "2 tbsp"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Mix besan, yogurt, turmeric, and ginger paste with water to make smooth batter."
      },
      {
        "step": 2,
        "description": "Cook batter on low heat, stirring continuously until thick paste forms."
      },
      {
        "step": 3,
        "description": "Quickly spread thin layer on greased surface while hot."
      },
      {
        "step": 4,
        "description": "Let cool slightly, cut into strips and roll tightly."
      },
      {
        "step": 5,
        "description": "Temper with mustard seeds, sesame seeds, and curry leaves."
      },
      {
        "step": 6,
        "description": "Garnish with coconut and cilantro. Serve cold or at room temperature."
      }
    ],
    "prepTime": 20,
    "cookTime": 15,
    "servings": 6
  }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/spicetrail', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Create a default user for seeding recipes
    let author = await User.findOne({ email: 'spicetrail@example.com' });
    if (!author) {
      author = await User.create({
        name: 'SpiceTrail',
        email: 'spicetrail@example.com',
        password: 'password123',
        role: 'user'
      });
      console.log('Default user created for seeding recipes');
    }

    // Clear existing recipes
    await Recipe.deleteMany({});

    // Add recipes with author
    for (const recipeData of recipes) {
      const recipe = new Recipe({
        ...recipeData,
        author: author._id
      });
      await recipe.save();
    }

    console.log(`${recipes.length} recipes seeded successfully!`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();

// const getdishes = (req, res) => {
    // const dishes=[
    //     {
    //         "_id": "653265121011a59bebdb74f8",
    //         "id": 12,
    //         "name": "Milk",
    //         "img": "https://m.media-amazon.com/images/I/61lzZAgOCzL.jpg",
    //         "category": "beverages",
    //         "price": 40,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f4",
    //         "id": 9,
    //         "name": "ColdCoffee",
    //         "img": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/cold-coffee-recipe-2.jpg",
    //         "category": "beverages",
    //         "price": 80,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74fc",
    //         "id": 14,
    //         "name": "Gol Gappe",
    //         "img": "https://static.toiimg.com/photo/75107900.cms",
    //         "category": "food",
    //         "price": 60,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f5",
    //         "id": 10,
    //         "name": " Tea",
    //         "img": "https://static.toiimg.com/photo/83173328.cms",
    //         "category": "beverages",
    //         "price": 30,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74fa",
    //         "id": 6,
    //         "name": "Naan",
    //         "img": "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
    //         "category": "food",
    //         "price": 20,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f9",
    //         "id": 5,
    //         "name": "Tandoori Platter",
    //         "img": "https://images.slurrp.com/prod/recipe_images/better-butter/tandoori-paneer-platter_HX3XOHVHLY0WD9AXFZZG.webp?impolicy=slurrp-20210601&width=1200&height=675",
    //         "category": "food",
    //         "price": 295,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f6",
    //         "id": 2,
    //         "name": " Coke",
    //         "img": "https://5.imimg.com/data5/SELLER/Default/2021/12/MI/CM/OC/26602448/300-ml-coke-original-500x500.jpg",
    //         "category": "beverages",
    //         "price": 55,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f7",
    //         "id": 3,
    //         "name": "Lassi",
    //         "img": "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
    //         "category": "beverages",
    //         "price": 90,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f3",
    //         "id": 8,
    //         "name": "Dal Makhni",
    //         "img": "https://recipes.timesofindia.com/thumb/53097626.cms?width=1200&height=900",
    //         "category": "food",
    //         "price": 180,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74fb",
    //         "id": 13,
    //         "name": "Paneer Butter Masala",
    //         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5kecc5mebmjSS-CrZAKaa_RUwoFa5NOuwg&usqp=CAU",
    //         "category": "food",
    //         "price": 240,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f2",
    //         "id": 7,
    //         "name": "Idli/Sambhar",
    //         "img": "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
    //         "category": "food",
    //         "price": 180,
    //         "quantity": 0
    //     },
    //     {
    //         "_id": "653265121011a59bebdb74f1",
    //         "id": 11,
    //         "name": "Dosa",
    //         "img": "https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg",
    //         "category": "food",
    //         "price": 270,
    //         "quantity": 0
    //     }
    // ]
//     res.send(dishes)
// };
// }


//Fetching data from database


const DishesModel = require("../models/Dishes")

const getdishes = async(req,res) => {
    const dishes = await DishesModel.find({})
    console.log(dishes)
    res.send(dishes)
}
    
module.exports = (getdishes)
import "./App.css";
import { useEffect, useState } from "react";
import BasketballItem from './components/BasketballItem';
import Aggregator from "./components/Aggregator";

function App() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const updatePrice = () => {
        let sum = 0;
        cart.forEach(i => sum += i.price);
        setTotal(sum);
    }
    useEffect(() => {
        updatePrice();
    })

    const basketballData = [
        {
            name: "Wilson Evolution Basketball",
            description: "Item Type: Basketball | Company: Wilson",
            price: 80.00,
            image: "pictures/Wilson Evolution.jpg",
            company: "Wilson",
            type: "Basketball"
        },
        {
            name: "Kyrie 7 Basketball Shoes",
            description: "Item Type: Shoes | Company: Nike",
            price: 100.00,
            image: "pictures/Kyrie 7s.jpg",
            company: "Nike",
            type: "Shoes"
        },
        {
            name: "Nike Arm Sleeve",
            description: "Item Type: Sleeve | Company: Nike",
            price: 25.00,
            image: "pictures/Nike Arm Sleeve.jpg",
            company: "Nike",
            type: "Sleeve"
        },
        {
            name: "Adidas Sleeve",
            description: "Item Type: Sleeve | Company: Adidas",
            price: 23.00,
            image: "pictures/Adidas Sleeve.jpg",
            company: "Adidas",
            type: "Sleeve"
        },
        {
            name: "Nike Elite Basketball",
            description: "Item Type: Basketball | Company: Nike",
            price: 31.00,
            image: "pictures/Nike Elite.jpg",
            company: "Nike",
            type: "Basketball"
        },
        {
            name: "LeBron 6 Basketball Shoes",
            description: "Item Type: Shoes | Company: Nike",
            price: 105.00,
            image: "pictures/Lebron 6s.png",
            company: "Nike",
            type: "Shoes"
        },
        {
            name: "Wilson Sleeve",
            description: "Item Type: Sleeve | Company: Wilson",
            price: 25.00,
            image: "pictures/Wilson Sleeve.jpg",
            company: "Wilson",
            type: "Sleeve"
        },
        {
            name: "KD 10 Basketball Shoes",
            description: "Item Type: Shoes | Company: Nike",
            price: 103.00,
            image: "pictures/kd 10s.jpg",
            company: "Nike",
            type: "Shoes"
        },
        {
            name: "Wilson Clutch Basketball",
            description: "Item Type: Basketball | Company: Wilson",
            price: 45.00,
            image: "pictures/Wilson Clutch.jpg",
            company: "Wilson",
            type: "Basketball"
        },
        {
            name: "Wilson Signed Basketball",
            description: "Item Type: Basketball | Company: Wilson",
            price: 210.00,
            image: "pictures/Wilson Signed.jpg",
            company: "Wilson",
            type: "Basketball"
        },
        {
            name: "Adidas Basketball Shoe",
            description: "Item Type: Shoes | Company: Adidas",
            price: 90.00,
            image: "pictures/Adidas Basketball Shoe.jpg",
            company: "Adidas",
            type: "Shoes"
        },
        {
            name: "Adidas Basketball",
            description: "Item Type: Basketball | Company: Adidas",
            price: 27.00,
            image: "pictures/Adidas Basketball.jpg",
            company: "Adidas",
            type: "Basketball"
        }
    ]

    const [type, setType] = useState("All");
    const [company, setCompany] = useState("All Companies");
    const [sortType, setSortType] = useState("");

    const matchSelectedType = (item) => {
        if (type === "All") {
            return true
        }
        else if (type === item.type) {
            return true
        } else {
            return false
        }
    };

    const matchSelectedCompany = (item) => {
        if (company === "All Companies") {
            return true
        } else if (company === item.company) {
            return true
        } else {
            return false
        }
    };

    const filteredBasketballData = basketballData.filter(matchSelectedType).filter(matchSelectedCompany);

    function sort() {
        if (sortType == "Price: High to Low") {
        filteredBasketballData.sort((a, b) => {
            return b.price - a.price;
        })
        }
        if (sortType == "Price: Low to High") {
        filteredBasketballData.sort((a, b) => {
            return a.price - b.price;
            })
        }
    }

    function reset(){
        setType("All");
        setCompany("All Companies");
        setSortType("");
    }

    sort();

    return (
        <div className="App">
        <h1>The Basketball Barn</h1>
        <div>
            <h3>Shop by Company</h3>
            <select onChange={(e) => {setCompany(e.target.value)}}>
                <option eventKey="All Companies">All Companies</option>
                <option eventKey="Nike">Nike</option>
                <option eventKey="Adidas">Adidas</option>
                <option eventKey="Wilson">Wilson</option>
            </select>
        </div>
        <div>
            <h3>Shop by Item Type</h3>
            <select onChange={(e) => {setType(e.target.value)}}>
                <option eventKey="All">All</option>
                <option eventKey="Basketball">Basketball</option>
                <option eventKey="Shoes">Shoes</option>
                <option eventKey="Sleeve">Sleeve</option>
            </select>
        </div>
        <div>
            <h3>Sort By</h3>
            <select onChange={(e) => {setSortType(e.target.value)}}>
                <option eventKey="None">None</option>
                <option eventKey="Price: High to Low">Price: High to Low</option>
                <option eventKey="Price: Low to High">Price: Low to High</option>
            </select>
        </div>
        <br></br>
        <button class="resetButton" onClick={reset}>Reset Filters</button>
        <div class="wrapper">
        {filteredBasketballData.map((item, index) => (
            <BasketballItem item={item} key={index} cart={cart} updateCart={setCart} total={total} setTotal={setTotal}/>
        ))}
        </div>
        <div>
        <Aggregator cart={cart} updateCart={setCart} total={total}></Aggregator>
        </div>
        </div>
    );
}

export default App;

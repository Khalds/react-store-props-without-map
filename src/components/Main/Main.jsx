import Products from "../Products/Products"
import styles from "./Main.module.css"

function Main() {
  return (
    <>
      <div className={styles.main}>
        <Products
          image={product[0].image}
          price={product[0].price}
          name={product[0].name}
        />
        <Products
          image={product[1].image}
          price={product[1].price}
          name={product[1].name}
        />
        <Products
          image={product[2].image}
          price={product[2].price}
          name={product[2].name}
        />
        <Products
          image={product[3].image}
          price={product[3].price}
          name={product[3].name}
        />
        <Products
          image={product[4].image}
          price={product[4].price}
          name={product[4].name}
        />
        <Products
          image={product[5].image}
          price={product[5].price}
          name={product[5].name}
        />
      </div>
    </>
  )
}

const product = [
  {
    id: 1,
    name: "MacBook",
    price: 100000,
    left: 31,
    image: "http://intocode.ru/d/react-project-1/images/1.jpg",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 35999,
    left: 11,
    image: "http://intocode.ru/d/react-project-1/images/2.jpg",
  },
  {
    id: 3,
    name: "Скутер",
    price: 65500,
    left: 0,
    image: "http://intocode.ru/d/react-project-1/images/3.jpg",
  },
  {
    id: 4,
    name: "Монитор Samsung",
    price: 12000,
    left: 7,
    image: "http://intocode.ru/d/react-project-1/images/4.jpg",
  },
  {
    id: 5,
    name: "Респераторная маска",
    price: 500,
    left: 24,
    image: "http://intocode.ru/d/react-project-1/images/5.jpg",
  },
  {
    id: 6,
    name: "Стиральная машина",
    price: 100000,
    left: 0,
    image: "http://intocode.ru/d/react-project-1/images/6.jpg",
  },
  {
    id: 7,
    name: "Белый холодильник",
    price: 43100,
    left: 18,
    image: "http://intocode.ru/d/react-project-1/images/7.jpg",
  },
  {
    id: 8,
    name: "Колонка",
    price: 3000,
    left: 1,
    image: "http://intocode.ru/d/react-project-1/images/8.jpg",
  },
  {
    id: 9,
    name: "Наушники",
    price: 1500,
    left: 5,
    image: "http://intocode.ru/d/react-project-1/images/9.jpg",
  },
]

export default Main

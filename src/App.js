import Product from "./Product/index.js";
import Friend from './components/Friend';
import Friends from './modules/Friends';
import './App.scss';
import Gift from "./modules/Gift";
import catsLink from './img/cats.jpg'
import heartLink from './img/heart.jpg'

function App() {
    /*const products = [
        {
            title: 'Пример товара',
            description: 'Описание товара здесь',
            price: 19.99,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ca1a938-5d5b-4c3b-b342-72a1a32e1c10/air-force-1-lover-xx-womens-shoes-j4B5P5.png',
        },
        {
            title: 'Пример товара',
            description: 'Описание товара здесь',
            price: 2000,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ca1a938-5d5b-4c3b-b342-72a1a32e1c10/air-force-1-lover-xx-womens-shoes-j4B5P5.png',
        },
        {
            title: 'Пример товара',
            description: 'Описание товара здесь',
            price: 10000,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ca1a938-5d5b-4c3b-b342-72a1a32e1c10/air-force-1-lover-xx-womens-shoes-j4B5P5.png',
        },
    ];*/

    const gifts = [
        {  
          id: 1,
          image: catsLink,
        },
        {
          id: 2,
          image: heartLink,
        },
        {
          id: 3,
          image: heartLink,
        }
      ]

    return (
        <div>
            {/* <div className="products">
                {products.map(product => {
                    return <Product product={product} />;
                })}
            </div> */}

            <Friends/>
            <h2 className="gift-title">Подарки 56</h2>
            
            {
                <div className="gifts">
                    {gifts.map(item => {
                        return <Gift gift={item} />;
                    })}
                </div>
            }
            
            
        </div>
    );
}

export default App;

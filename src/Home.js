import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2IxYThmYzAt/N2IxYThmYzAt-MjVlNmIyZTUt-w1500._CB407941419_.jpg'/>
                    
                <div className='home__row'>
                    <Product
                    id='123'
                    title='The Lean Startup'
                    price='8.99'
                    rating={5}
                    image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg'
                    />
                    <Product
                    id='789'
                    title='Echo Plus'
                    price={79.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/71CR1%2BxnTIL._AC_SL1000_.jpg'
                    />
                    
                    
                </div>

                <div className='home__row'>
                    <Product
                    id='456'
                    title='Nintendo Switch'
                    price={279}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/71dDcOto3KL._AC_SL1500_.jpg'
                    />

                    <Product
                    id='789'
                    title='Ring Video Doorbell 3'
                    price={176.98}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/412yuVHY6OL._SL1000_.jpg'
                    />
                    <Product
                    id='321'
                    title='Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Model)'
                    price={329.97}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/61J6uczVvJL._AC_SL1500_.jpg'
                    />
                </div>

                <div className='home__row'>
                    <Product
                    id='654'
                    title='TCL 43DP628 43-Inch 4K LED Ultra HD Smart TV'
                    price={256.15}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/71yhPJVbn7L._AC_SL1500_.jpg'
                    />
                </div>
            
            </div>

        </div>
    )
}

export default Home

import React, { useEffect } from 'react';
import '../styles/home.css';
// установлено npm install react-bootstrap bootstrap
// добавлено import 'bootstrap/dist/css/bootstrap.min.css'; в файл App.js
import Carousel from 'react-bootstrap/Carousel';
import CustomCarousel from '../components/karusel';

import img11 from '../images/11.png';
import img22 from '../images/22.png';
import img33 from '../images/33.png';
import img44 from '../images/44.png';
import img55 from '../images/55.png';
import img66 from '../images/66.png';
import img77 from '../images/77.png';

class Product {
  constructor(name, price, imageUrl) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

const popularProducts = [
  new Product(
    'Мобильный телефон Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793RX/A)',
    '55.999 ₴',
    'https://content2.rozetka.com.ua/goods/images/big/364834252.jpg'
  ),
  new Product(
    'Ноутбук ASUS TUF Gaming F15 FX507VV-LP212 (90NR0BV7-M00EY0) Mecha Gray / 15.6" IPS Full HD 144 Гц / Intel Core i7-13620H / RAM 16 ГБ / SSD 5',
    '49.999 ₴',
    'https://content2.rozetka.com.ua/goods/images/big/433813139.jpg'
  ),
  new Product(
    'Навушники Final Audio D8000 Pro Edition Silver',
    '191.999 ₴',
    'https://portativ.ua/media/cache/images/1/image/750x700/602f0fa2c1f0d1ba5e241f914e856ff9/catalog/product/f/cc7bbb0bc675d0dc29eadc510731b035.png'
  ),
  new Product(
    'Професійна кавомашина La San Marco V6 6GR Nero Lava б/в',
    '1.049.357 ₴',
    'https://coffeeone.com.ua/image/cache/catalog/La%20San%20Marco/San%20Marco%20V6/LEVA-V6-La-San-Marco-nera-modificata-ok-960x720.png'
  )
];

const images = [img11, img22, img33, img44, img55, img66, img77];

const Home = () => {
  useEffect(() => {
    document.title = "Главная";
  }, []);

  return (
    <main className="home">
      <h1>Добро пожаловать в интернет-магазин AlexGarage!</h1>

{/* вначале был такой вариант:
<Carousel>
        <Carousel.Item>
          <img src={img11} alt="First slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img22} alt="Second slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img33} alt="3 slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img44} alt="4 slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img55} alt="5 slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img66} alt="6 slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img77} alt="7 slide" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
      </Carousel>

*/}

{/*потом получился оптимизированный вариант карусели, НО! не работала анимация... */}

     <Carousel interval={2000} controls={true} indicators={true} fade={true}>
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index} class="carousel-item">
            <img src={imgSrc}
              alt={`Slide ${index + 1}`}
              className="d-block w-100"
              style={{ height: '200px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>


{/* <CustomCarousel images={images} /> */}

      <section className="popular-products">
      <br />
        <div className="products-list">
          {popularProducts.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="promotions-preview">
        <h2>Акции</h2>
        <p>Не упустите наши текущие скидки и специальные предложения!</p>
        <a href="/promotions" className="promotions-link">Посмотреть все акции</a>
      </section>
    </main>
  );
};

export default Home;
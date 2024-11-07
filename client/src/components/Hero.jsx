import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import SlideShow from './SlideShow';

function Hero() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(products[0]);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  const paginationButtonClick = (page) => {
    dispatch(getProducts(page));
  };

  useEffect(() => {
    setTimeout(
      setProduct((product) => products[Math.floor(Math.random() * products.length)]),
      1000
    );
  }, [products]);

  return (
    <div className='hero'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-5'>
            <div className='intro-excerpt'>
              <h1>
                Update Your Life
                <span clsas='d-block'>With Modern Technology</span>
              </h1>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis sapiente quisquam. Voluptate
                quam cum et?
              </p>
              <p>
                <a
                  href='#'
                  className='btn btn-secondary me-2'
                >
                  Shop Now
                </a>
                <a
                  href='#'
                  className='btn btn-white-outline'
                >
                  Explore
                </a>
              </p>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='hero-img-wrap'>
              {/* <img
                alt='image'
                className='animate__animated animate__backInRight w-80 h-80'
                src='couch.png'
                className='img-fluid'
              /> */}

              <img
                alt='image'
                className='animate__animated animate__backInRight w-80 h-80'
                src={product?.images[0]}
                className='img-fluid max-w[400px]'
              />

              {/* <SlideShow products={products} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

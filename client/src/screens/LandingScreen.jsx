import React, { useMemo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './favicon.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const LandingScreen = () => {
  const images = useMemo(
    () => ['/images/landing-light.jpg', '/images/landing-dark.jpg', '/images/Camera-1.jpg', '/images/Laptop-1.jpg'],
    []
  );

  const captions = useMemo(
    () => [
      'Where quality meets style – discover the difference.',
      'Your one-stop shop for everything you need, delivered to your door',
      'Your satisfaction, our priority. Discover a seamless shopping experience.',
      'Discover exclusive finds you won’t see anywhere else.',
    ],
    []
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='max-w-8xl mx-auto p-0 lg:p-12 min-h-screen'>
      <Hero />

      <div className='product-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-3 mb-5 mb-lg-0'>
              <h2 className='mb-4 section-title'>Crafted with excellent material.</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus molestiae natus aut, quia illum
                eveniet?
              </p>
              <p>
                <a
                  href='shop.html'
                  className='btn'
                >
                  Explore
                </a>
              </p>
            </div>

            <div className='box col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
              <a
                className='product-item'
                href='#'
              >
                <img
                  src='product-1.png'
                  className='img-fluid product-thumbnail'
                />
                <h3 className='product-title'>Smart Phone</h3>
                <strong className='product-price'>$50.00</strong>

                <span className='icon-cross'>
                  <img
                    src='cross.svg'
                    className='img-fluid'
                  />
                </span>
              </a>
            </div>

            <div className='box col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
              <a
                className='product-item'
                href='#'
              >
                <img
                  src='product-2.png'
                  className='img-fluid product-thumbnail'
                />
                <h3 className='product-title'>Smart Phone</h3>
                <strong className='product-price'>$78.00</strong>

                <span className='icon-cross'>
                  <img
                    src='cross.svg'
                    className='img-fluid'
                  />
                </span>
              </a>
            </div>

            <div className='box col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
              <a
                className='product-item'
                href='#'
              >
                <img
                  src='product-3.png'
                  className='img-fluid product-thumbnail'
                />
                <h3 className='product-title'>Smart Phone</h3>
                <strong className='product-price'>$43.00</strong>

                <span className='icon-cross'>
                  <img
                    src='cross.svg'
                    className='img-fluid'
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id='services'
        className='why-choose-section'
      >
        <div className='container'>
          <div className='row justify-content-between text-center flex-column-reverse flex-lg-row'>
            <div className='col-lg-6'>
              <h2 className='section-title'>Why Choose Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad accusantium perferendis laborum magni!
                Nobis, quisquam quasi?
              </p>
              <div className='row my-5'>
                <div className='col-6 col-md-6'>
                  <div className='feature'>
                    <div className='icon'>
                      <img
                        src='truck.svg'
                        alt='Image'
                        className='imf-fluid'
                      />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolore illo eum quis? Non.
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-6'>
                  <div className='feature'>
                    <div className='icon'>
                      <img
                        src='bag.svg'
                        alt='Image'
                        className='imf-fluid'
                      />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at enim perferendis
                      necessitatibus ea!
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-6'>
                  <div className='feature'>
                    <div className='icon'>
                      <img
                        src='support.svg'
                        alt='Image'
                        className='imf-fluid'
                      />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam corporis animi
                      doloremque rerum?
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-6'>
                  <div className='feature'>
                    <div className='icon'>
                      <img
                        src='return.svg'
                        alt='Image'
                        className='imf-fluid'
                      />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi animi earum deserunt magni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='img-wrap'>
                <img
                  src='monitor.png'
                  alt='Image'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='we-help-section'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-7 mb-5 mb-lg-0'>
              <div className='imgs-grid'>
                <div className='grid grid-1'>
                  <img
                    src='monitor.png'
                    alt='online store'
                  />
                </div>
                <div className='grid grid-2'>
                  <img
                    src='sofa.png'
                    alt='online store'
                  />
                </div>
                <div className='grid grid-3'>
                  <img
                    src='img-grid-3.png'
                    alt='online store'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-5 ps-lg-5'>
              <h2 className='section-title mb-4'>We Help You Make a Dicision to Choose The Suitable Divce</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illo aliquid enim quasi molestiae doloremque
                voluptate, harum soluta suscipit voluptatum.
              </p>

              <ul className='list-unstyled custom-list my-4'>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
              <p>
                <a
                  herf='#'
                  className='btn'
                >
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;

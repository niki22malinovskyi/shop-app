import React from 'react';

import './Banner.css'

function Banner({props}) {
  return (
    <section className="banner">
        <div className="container">
            <div className="banner__inner">
                <h1 className="banner__title">MacBook Pro 16</h1>
                <div className="banner__link">
                    <a href="/#">Add to cart?</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
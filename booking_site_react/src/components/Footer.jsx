import React from 'react';

function Footer() {
  return (
    <footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-content-brand">
                <a href="index.html" class="logo">
                    <img src="./images/logo.png" alt="" class="logo-image"/>

                </a>
                <div class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat vel excepturi placeat, eius accusamus non.
                </div>
            </div>
            <div class="social-media-wrap">
                <h4 class="footer-heading">Follow Us</h4>
                <div class="social_media">
                    <a href="#" class="sm-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="sm-link"><i class="fab fa-facebook-square"></i></a>
                    <a href="#" class="sm-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="sm-link"><i class="fab fa-pinterest"></i></a>
                    <a href="#" class="sm-link"><i class="fab fa-tripadvisor"></i></a>

                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;
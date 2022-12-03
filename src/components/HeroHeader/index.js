import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const slideImages = [
  'https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/46792/the-ball-stadion-football-the-pitch-46792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
class HeroHeader extends Component {
  state = {
    urls: slideImages.map(image => null),
  };

  componentDidMount() {
    this.loadSlideImages();
  }

  loadSlideImages = () => {
    const { setSlidesAreLoaded } = this.props;

    slideImages.forEach((image, index) => {
      const totalImages = slideImages.length;
      const newImage = new Image();
      newImage.src = image;

      newImage.onload = () => {
        const urls = [...this.state.urls];
        urls[index] = image;
        this.setState({ urls });

        if (index === totalImages - 1) {
          setSlidesAreLoaded();
        }
      };
    });
  };

  render() {
    return (
      <div>
        <header className="main__hero">
          <div className="hero__info">
            <div className="hero__info-wrapper">
              <img
                src="/images/hero-logo_white.svg"
                alt="White space"
                className="hero__info-logo"
              />
              <div className="hero__info-content">
                <div className="hero__info-left">
                  <img
                    src="/images/hero-instagram-brands.svg"
                    alt="White space's instagram"
                    className="hero__info-social-icon"
                  />
                  <img
                    src="/images/hero-facebook-square-brands.svg"
                    alt="White space's facebook"
                    className="hero__info-social-icon"
                  />
                </div>
                <div className="hero__info-right">
                  <div className="hero__info-item">
                    <img
                      src="/images/hero-phone-alt-solid.svg"
                      alt="tel"
                      className="hero__info-contact-icon"
                    />
                    <span className="hero__info-text">+84935283204</span>
                  </div>
                  <div className="hero__info-item">
                    <img
                      src="/images/hero-envelope-solid.svg"
                      alt="email"
                      className="hero__info-contact-icon"
                    />
                    <span className="hero__info-text">taurusfbi04@gmail.com</span>
                  </div>
                  <div className="hero__info-item">
                    <img
                      src="/images/hero-home-solid.svg"
                      alt="address"
                      className="hero__info-contact-icon"
                    />
                    <span className="hero__info-text">Da Nang, Viet Nam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__slides">
            {this.state.urls.map((img, i) => (
              <div key={i} className="hero__slide" style={{ backgroundImage: `url(${img})` }} />
            ))}
          </div>
        </header>
        <div className="search-bar mt-4 p-3 p-lg-1 pl-lg-4">
            <form id="main-search-form" action="/dat-san-online">
              <input type="hidden" name="city_id" value="50"/>
              <input type="hidden" name="input_type" value="string"/>
              <div className="row">
                <div className="col-lg-5 d-flex align-items-center form-group">
                  <input type="text" name="search_string" id="search-input" placeholder="Tên sân bóng" className="form-control border-0 shadow-0 ui-autocomplete-input" autocomplete="off"/>
                </div>
                <div className="col-lg-3 d-flex align-items-center form-group">
                  <input type="text" name="date" className="datepicker datepicker-search form-control border-0 shadow-0" data-provide="datepicker" value="T6, 01-12-2022"/>
                </div>
                <div className="col-lg-2 d-flex align-items-center form-group">
                  <input type="text" value="05:00" name="begin_time" title="Vào lúc" placeholder="Vào lúc" data-style="btn-form-control" className="form-control border-0 shadow-0 main-timepicker"/>
                </div>
                <div className="col-lg-2">
                  <button type="submit" className="btn btn-primary btn-block rounded-xl h-100">Tìm kiếm</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default HeroHeader;

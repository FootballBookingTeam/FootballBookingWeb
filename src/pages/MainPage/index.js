import React, { Component } from 'react';

// import { Ellipsis } from 'react-spinners-css';

import HeroHeader from '../../components/HeroHeader/index.js';
// import StadiumCard from '../../components/StadiumCard/index';
// import { apiGetAllRooms } from '../../api';

class MainPage extends Component {
  state = {
    stadiums: [],
    // dataIsFetched: false,
    slidesAreLoaded: false,
  };

  componentDidMount() {
    // this.getRoomsData();
  }

  // getRoomsData = async () => {
  //   try {
  //     const response = await apiGetAllRooms();
  //     this.setState({ stadiums: response.data.items });
  //   } catch (e) {
  //     console.error(`🚫 Something went wrong fetching API calls: ${e}`);
  //   }

  //   this.setState({ dataIsFetched: true });
  // };

  setSlidesAreLoaded = () => {
    this.setState({ slidesAreLoaded: true });
  };

  render() {
    // const { stadiums, dataIsFetched, slidesAreLoaded } = this.state;
    const {slidesAreLoaded } = this.state;
    const allDownloaded =  slidesAreLoaded;

    return (
      <>
        {!allDownloaded && (
          <div className="pre-loading">
            <img src="/images/hero-logo_white.svg" alt="White Space" className="hero__info-logo" />
            {/* <Ellipsis color="#fff" /> */}
          </div>
        )}
        <div className={`container wrapper-l ${!allDownloaded ? 'is-loading' : ''}`}>
        {/* <div className="container wrapper-l"> */}
          <HeroHeader setSlidesAreLoaded={this.setSlidesAreLoaded} />
          {/* <HeroHeader /> */}
          {/* <div className="stadium-cards">
            <div className="stadium-cards__list wrapper-m">
              {stadiums.map(stadium => (
                <StadiumCard key={stadium.id} data={stadium} />
              ))}
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default MainPage;

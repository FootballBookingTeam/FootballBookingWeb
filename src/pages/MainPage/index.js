import React, { Component } from 'react';

// import { Ellipsis } from 'react-spinners-css';

import HeroHeader from '../../components/HeroHeader/index.js';
import TurfCard from '../../components/TurfCard/index.js';
// import StadiumCard from '../../components/StadiumCard/index';
import { apiGetAllTurfs } from '../../API/apiaxios';

class MainPage extends Component {
    state = {
        turfs: [],
        dataIsFetched: false,
        slidesAreLoaded: false,
    };

    componentDidMount() {
        this.getTurfsData();
    }

    getTurfsData = async () => {
        try {
            const response = await apiGetAllTurfs();
            this.setState({ turfs: response.data });
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }

        this.setState({ dataIsFetched: true });
    };

    setSlidesAreLoaded = () => {
        this.setState({ slidesAreLoaded: true });
    };

    render() {
        const { turfs, dataIsFetched, slidesAreLoaded } = this.state;
        const allDownloaded = dataIsFetched && slidesAreLoaded;

        return (
            <>
                {!allDownloaded && (
                    <div className="pre-loading">
                        <img src="/images/hero-logo_white.svg" alt="White Space" className="hero__info-logo" />
                        {/* <Ellipsis color="#fff" /> */}
                    </div>
                )}
                <div className={`container-fluid ${!allDownloaded ? 'is-loading' : ''}`}>
                    <HeroHeader setSlidesAreLoaded={this.setSlidesAreLoaded} />
                    <div className="turf-cards">
                        <div className="turf-cards__list">
                            {turfs.map((turf) => (
                                <TurfCard key={turf.id} data={turf} />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainPage;

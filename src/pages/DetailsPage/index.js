// import React, { Component } from 'react';

// // import InfoSkeleton from '../../components/TurfInfo/skeleton';
// import MosaicSkeleton from '../../components/MosaicHeader/skeleton';

// import MosaicHeader from '../../components/MosaicHeader/index';
// // import TurfInfo from '../../components/TurfInfo/index';
// // import TurfAmenities from '../../components/TurfAmenities/index';
// // import BookingCard from '../../components/BookingCard/index';
// import { apiGetSingleTurf } from '../../API/apiaxios';

// class DetailsPage extends Component {
//   state = {
//     currentTurf: [],
//     bookingData: [],
//     TurfIsLoading: true,
//   };

//   componentDidMount() {
//     this.getCurrentTurfData();
//   }

//   getCurrentTurfData = async () => {
//     const { location } = this.props;

//     try {
//       const response = await apiGetSingleTurf(location.state);

//       this.setState({
//         currentTurf: response.data.Turf[0],
//         bookingData: response.data.booking,
//       });
//     } catch (e) {
//       console.error(`🚫 Something went wrong fetching API calls on this Turf: ${e}`);
//     }

//     this.setState({ TurfIsLoading: false });
//   };

//   refreshBookingData = async () => {
//     const { location } = this.props;

//     try {
//       const response = await apiGetSingleTurf(location.state.TurfID);

//       this.setState({
//         bookingData: response.data.booking,
//       });
//     } catch (e) {
//       console.error(`🚫 Something went wrong fetching API calls on this Turf: ${e}`);
//     }
//   };

//   render() {
//     const { location } = this.props;
//     const { TurfID } = location.state;
//     const { currentTurf, TurfIsLoading } = this.state;
//     const { name, imageUrl } = currentTurf;

//     return (
//       <div className="container wrapper-l">
//         {TurfIsLoading ? <MosaicSkeleton /> : <MosaicHeader name={name} images={imageUrl} />}
//         {/* <main className="main">
//           <div className="wrapper-m main__wrapper">
//             <section className="main__left">
//               {TurfIsLoading ? <InfoSkeleton /> : <TurfInfo data={currentTurf} />}
//               <TurfAmenities amenities={amenities} />
//             </section> */}
//             {/* <section className="main__right">
//               <BookingCard
//                 TurfIsLoading={TurfIsLoading}
//                 normalDayPrice={normalDayPrice}
//                 holidayPrice={holidayPrice}
//                 TurfID={TurfID}
//                 bookingData={bookingData}
//                 refreshBookingData={this.refreshBookingData}
//               />
//             </section> */}
//           {/* </div> */}
//     {/* //     </main> */}
//       </div>
//     );
//   }
// }

// export default DetailsPage;

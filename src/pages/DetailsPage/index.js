import { Carousel } from 'react-carousel-minimal';
import { apiGetImageTurf, apiGetAllTurfs } from '../../API/apiaxios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal, Space, Form, Input, Radio, Select, Rate, Upload, DatePicker, InputNumber } from 'antd';

import type { DatePickerProps } from 'antd';

import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
function DetailsPage() {
    const { id } = useParams();
    const [images, setImages] = useState();
    const [turf, setTurf] = useState();

    const getImageOfSingleTurf = async () => {
        try {
            const response = await apiGetImageTurf(id);
            // const data=
            setImages(response.data.map((img) => ({ image: img.image })));
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }
    };
    const getTurfsData = async () => {
        try {
            const response = await apiGetAllTurfs();
            console.log(response.data.filter((data) => data.id == id));
            setTurf(response.data.filter((data) => data.id == id)[0]);
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }
    };
    useEffect(() => {
        getImageOfSingleTurf();
        getTurfsData();
    }, [id]);
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        window.alert('Đặt sân thành công!')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="image">
                    <div className="image-wrapper">
                        <div>
                            <Carousel
                                data={
                                    images
                                        ? images
                                        : [
                                              {
                                                  path: '',
                                              },
                                          ]
                                }
                                time={3000}
                                width="850px"
                                height="500px"
                                radius="10px"
                                slideNumber={true}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: 'center',
                                    maxWidth: '850px',
                                    maxHeight: '500px',
                                    margin: '40px auto',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="odercard">
                    <div className="ordercard-listing">
                        <div className="odercard-listing-header">
                            <div className="follow-shop">
                                {/* <Link to={`/shop/${detailResult?.shopId}`} className='follow-shop-content'>
                                    {detailResult ? detailResult.shopName : ''}
                                </Link>
                                <Button rounded outline small>
                                    Theo dõi
                                </Button> */}
                            </div>
                            <div className="rateAndsold">
                                <span className="sold-content">
                                    {/* Đã Bán {detailResult ? detailResult.quantity.toLocaleString('es-ES') : ''} */}
                                </span>
                                <span className="septum"></span>
                                <span className="rate">
                                    <a href="" className="rate-page">
                                        <span className="rate-content"></span>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="product-name">
                            <h1 className="product-name-content"> {turf?.name}</h1>
                        </div>
                        <div className="buybox">
                            <div className="buybox-info">
                                <div className="buybox-data">
                                    <div className="buybox-data-price">
                                        <p className="buybox-data-price-content">
                                            {/* {detailResult ? detailResult.price.toLocaleString('es-ES') : ''}₫ */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="optionbox">
                                <div className="optionbox-item">
                                    <label htmlFor="selection-box" className="optionbox-item-name">
                                        Chọn ngày
                                        <span className="optionbox-required"></span>
                                    </label>
                                    <div className="selection-box">
                                        {/* <Space direction="vertical">
                                            <DatePicker onChange={onChange} />
                                        </Space> */}
                                    </div>
                                </div>
                                <div className="optionbox-item">
                                    <label htmlFor="selection-box" className="optionbox-item-name">
                                        Khung giờ
                                        <span className="optionbox-required"></span>
                                    </label>
                                    <div className="selection-box">
                                        {/* <div
                                            type="number"
                                            min="1"
                                            step="1"
                                            className="selection-input"
                                            // value={quantity}
                                            // onChange={handleQuantity}
                                        ></div> */}
                                        <Modal
                                            title="Lịch đặt sân bóng"
                                            open={isModalOpen}
                                            onOk={() => handleOk()}
                                            onCancel={handleCancel}
                                            width={1000}
                                        >
                                            <ReactTimeslotCalendar
                                                let
                                                disabledTimeslots={[
                                                    {
                                                        startDate: 'DECEMBER 14th 2022, 7:00:00 AM',
                                                        format: 'MMMM Do YYYY, h:mm:ss A',
                                                    },
                                                    {
                                                        startDate: 'DECEMBER 16th 2022, 9:00:00 AM',

                                                        format: 'MMMM Do YYYY, h:mm:ss A',
                                                    },
                                                    {
                                                        startDate: 'May 5th 2017, 6:00:00 PM',
                                                        format: 'MMMM Do YYYY, h:mm:ss A',
                                                    },
                                                ]}
                                                let
                                                timeslots={[
                                                    ['6', '7'],
                                                    ['7', '8'],
                                                    ['8', '9'],
                                                    ['9', '10'],
                                                    ['10', '11'],
                                                    ['11', '12'],
                                                    ['12', '13'],
                                                    ['13', '14'],
                                                    ['14', '15'],
                                                    ['15', '16'],
                                                    ['16', '17'],
                                                    ['17', '18'],
                                                    ['18', '19'],
                                                ]}
                                                let
                                                onSelectTimeslot={(allTimeslots, lastSelectedTimeslot) => {
                                                    /**
                                                     * All timeslot objects include `startDate` and `endDate`.
                                                  
                                                     * It is important to note that if timelots provided contain a single
                                                     * value (e.g: timeslots = [['8'], ['9', '10']) then only `startDate` is filled up with
                                                     * the desired information.
                                                     */
                                                    console.log(lastSelectedTimeslot.startDate); // MomentJS object.
                                                }}
                                            />
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                            <div className="buybox-button-box">
                                <Space direction="vertical" style={{ width: '100%' }}>
                                    <Button type="primary" size="large" block onClick={() => showModal()}>
                                        Đặt sân ngay
                                    </Button>
                                </Space>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-info">
                    <div className="listing-info-container">
                        <h2 className="listing-info-item">
                            <button className="item-button">
                                Mô tả :<span className="item-arrow"></span>
                            </button>
                        </h2>
                        <div className="description-detail">
                            <div className="description-detail-box">
                                <p className="description-detail-text">Loại sân: {turf?.type.slice(4, 6)} người</p>
                                <p className="description-detail-text">Rating: {turf?.rating} ⭐</p>
                                <p className="description-detail-text">Giá: {turf?.price} VNĐ/1h</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="review-container"></div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;

import { Carousel } from 'react-carousel-minimal';
import { apiGetImageTurf } from '../../API/apiaxios'
import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { ConsoleSqlOutlined } from '@ant-design/icons';
function DetailsPage() {
    const { id } = useParams();
    const [images, setImages] = useState();

    const getImageOfSingleTurf = async () =>{
        try {
            const response = await apiGetImageTurf(id);  
            // const data=      
            setImages(response.data.map((img)=>({image: img.image}))  );
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }
    }
    useEffect(() => {
        getImageOfSingleTurf()

      }, [id]);
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='image'>
                    <div className='image-wrapper'>
                        <div>
                            <Carousel
                                data = {images
                                    ? images
                                    : [
                                          {
                                              path: '',
                                          },
                                      ]}   

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
                                        textAlign: "center",
                                        maxWidth: "850px",
                                        maxHeight: "500px",
                                        margin: "40px auto",
                                      }}
                            />
                        </div>
                    </div>
                </div>
                <div className='odercard'>
                    <div className='ordercard-listing'>
                        <div className='odercard-listing-header'>
                            <div className='follow-shop'>
                                {/* <Link to={`/shop/${detailResult?.shopId}`} className='follow-shop-content'>
                                    {detailResult ? detailResult.shopName : ''}
                                </Link>
                                <Button rounded outline small>
                                    Theo dõi
                                </Button> */}
                            </div>
                            <div className='rateAndsold'>
                                <span className='sold-content'>
                                    {/* Đã Bán {detailResult ? detailResult.quantity.toLocaleString('es-ES') : ''} */}
                                </span>
                                <span className='septum'>|</span>
                                <span className='rate'>
                                    <a href="" className='rate-page'>
                                        <span className='rate-content'></span>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className='product-name'>
                            {/* <h1 className='product-name-content'> {detailResult ? detailResult.name : ''}</h1> */}
                        </div>
                        <div className='buybox'>
                            <div className='buybox-info'>
                                <div className='buybox-data'>
                                    <div className='buybox-data-price'>
                                        <p className='buybox-data-price-content'>
                                            {/* {detailResult ? detailResult.price.toLocaleString('es-ES') : ''}₫ */}
                                        </p>
                                    </div>
                                    <div className='buybox-data-caption'>Đã bao gồm thuế địa phương (nếu có)</div>
                                </div>
                            </div>
                            <div className='optionbox'>
                                <div className='optionbox-item'>
                                    <label htmlFor="selection-box" className='optionbox-item-name'>
                                        Size
                                        <span className='optionbox-required'></span>
                                    </label>
                                    <div className='selection-box'>
                                        <select defaultValue={'Default'} className='selection-input'>
                                            {/* <option value="Default">Size</option> */}
                                            {/* <option value="">{detailResult ? detailResult.size : ''}</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className='optionbox-item'>
                                    <label htmlFor="selection-box" className='optionbox-item-name'>
                                        Số lượng
                                        <span className='optionbox-required'></span>
                                    </label>
                                    <div className='selection-box'>
                                        <input
                                            type="number"
                                            min="1"
                                            step="1"
                                            className='selection-input'
                                            // value={quantity}
                                            // onChange={handleQuantity}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='buybox-button-box'>
                                {/* <Button rounded login className='buybox-button'>
                                    Mua Ngay
                                </Button> */}
                            </div>
                            <div className='buybox-button-box'>
                                {/* <Button onClick={handleAddtoCart} primary rounded login >
                                    Thêm Vào Giỏ Hàng
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='listing-info'>
                    <div className='listing-info-container'>

                        <h2 className='listing-info-item'>
                            <button className='item-button'>
                                Mô tả :<span className='item-arrow'></span>
                            </button>
                        </h2>
                        <div className='description-detail'>
                            <div className='description-detail-box'>
                                {/* <p className='description-detail-text'>{detailResult ? detailResult.description : ''}</p> */}
                            </div>
                        </div>
                        <h2 className='listing-info-item'>
                            <button className='item-button'>
                                Cửa hàng :<span className='item-arrow'></span>
                            </button>
                        </h2>
                        <div className='shop-detail'>
                            <div className='shop-detail-image'>
                                <img
                                    src="	https://i.etsystatic.com/isla/0d943f/24592470/isla_75x75.24592470_8hq0chzw.jpg?version=0"
                                    loading="lazy"
                                    className='shop-detail-image-content'
                                />
                            </div>
                            <div className='shop-detail-info'>
                                <p className='shop-detail-name'>Sara</p>
                                <p className='shop-detail-owner'>
                                    Chủ sở hữu{' '}
                                    {/* <Link to={`/shop/${detailResult?.shopId}`} className='shop-detail-owner-link'>
                                        {detailResult ? detailResult.shopName : ''}
                                    </Link> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review'>
                    <div className='review-container'>
                        <div className='review-header'>
                            <h2 className='review-count'>7,970 đánh giá</h2>
                            <span className='review-rate'></span>
                        </div>

                        <div className='review-listing'>
                            <div className='review-listing-nav'>
                                <button className='review-listing-nav-button'>
                                    Đánh giá của sản phẩm
                                    <span className='review-listing-nav-button-content'>1,051</span>
                                </button>
                                <button className='review-listing-nav-button'>
                                    Đánh giá của cửa hàng
                                    <span className='review-listing-nav-button-content'>7,973</span>
                                </button>

                                <div className='review-listing-nav-underline'></div>
                            </div>
                            <div className='review-listing-container'>
                                <div className='review-item'>
                                    <div className='review-item-data'>
                                        <div className='review-item-data-content'>
                                            <div className='review-item-rate'></div>
                                            <p className='review-item-text'>
                                                It came exactly how I hoped! I asked for Charcoal And black and it came out great! It’s not
                                                cheaply made and it feels amazing!
                                            </p>
                                        </div>
                                        <div className='review-item-purchase'>
                                            <p className='review-item-purchase-text'>Purchased item: </p>
                                            <a href="" className='review-item-purchase-link'>
                                                {' '}
                                                Distressed Oversize Flannel Shirt
                                            </a>
                                        </div>
                                        <div className='review-item-account'>
                                            <img
                                                src="https://i.etsystatic.com/iusa/603882/95556902/iusa_75x75.95556902_dfi7.jpg?version=0"
                                                loading="lazy"
                                                className='review-item-account-image'
                                            />
                                            <p className='review-item-account-name'>
                                                <a href="" className='review-item-account-link'>
                                                    Emily
                                                </a>
                                                Aug 29, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className='review-item-image'>
                                        <button className='review-item-image-button'>
                                            <img
                                                src="https://i.etsystatic.com/iap/ae7c2f/4165938259/iap_300x300.4165938259_cdpll1pf.jpg?version=0"
                                                loading="lazy"
                                                className='review-item-image-data'
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='review-pagination'>{/* <PaginationNav /> */}</div>
                    </div>
                </div>
                <div className='other-info'>
                    <div className='other-info-header'>
                        <div className='other-info-header-box'>
                            <div className='other-info-header-content'>Các sản phẩm khác của shop</div>
                            {/* <Button rounded>Theo dõi</Button> */}
                        </div>
                        {/* <Button rounded> */}
                            {/* <Link to={`/shop/${detailResult?.shopId}`} className='other-info-more'>
                                Xem thêm
                            </Link> */}
                        {/* </Button> */}
                    </div>
                    <div className='other-info-container'>
                        {/* {shopResult?.map((result) => (
                            <ProductItem key={result.id} data={result} />
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;
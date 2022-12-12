import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Modal, Space, Form, Input, Radio, Select, Rate, Upload, InputNumber } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {apiUpdateSingleTurf ,apiDeleteSingleTurf, apiGetImageTurf } from '../../API/apiaxios';
import UploadImage from '../../API/imageService';

const TurfCard = ({ data, admin = false }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImage] = useState('');
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const deleteTurfs=(id) => {
      const delTurfs = async () => {
        try {
            const response = await apiDeleteSingleTurf(id);
            // setTurfs(response.data);
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }
    };
    delTurfs();
    }
    const updateTurfs=(value,id) => {
      const data = { name: value.name, type: value.type, price: value.price, rating: value.rating };

      const upTurfs = async () => {
        try {
            const response = await apiUpdateSingleTurf(id,data);
            // setTurfs(response.data);
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }
    };
    upTurfs();
    };
    const getImageTurfsData = async (data) => {
        try {
            
            const response = await apiGetImageTurf(data);
            setImage({ images: response.data[0]['image'] })
        } catch (e) {
            console.error(`🚫 Something went wrong fetching API calls: ${e}`);
        }
        console.log(data)
    };
    const [imageURLs, setImageURLs] = useState([]);
    const handleImage = (e) => {
      const files = e.target.files;
      UploadImage(files, setImageURLs);
  };
  useEffect(() => {
    getImageTurfsData(data.id)

  }, [data]);
  
    return (
        <div className="turf-card">
            <div
                className="turf-card__wrapper"
                style={{
                    backgroundImage: `url(${images.images}), linear-gradient(to right, #e4e4e4, #f8f8f8)`,
                }}
            >
                <div
                    className="turf-card__link"
                    // to={{
                    //     pathname: `/turf/${data.id}`,
                    //     state: { turfID: data.id },
                    // }}
                >
                    <div className="turf-card__content">
                        <h2 className="turf-card__title">
                            {data.name}
                            <Link
                                to={{
                                    pathname: `/turf/${data.id}`,
                                    state: { turfID: data.id },
                                }}
                            >
                                <span>Xem lịch đặt sân</span>
                            </Link>
                        </h2>
                        <div className="turf-card__prices">
                            Giá: {data.price} VNĐ/1h
                            <div className="turf-card__price-s--gray">Loại sân: {data.type}</div>
                            <div className=" turf-card__price-s--gray">Rating: {data.rating} ⭐</div>
                            {admin && (
                                <div className=" turf-card__price-s--gray">
                                    <Space wrap>
                                        <Button type="primary" onClick={showModal}>
                                            Chỉnh sửa
                                        </Button>
                                        <Button type="primary" icon={<DeleteOutlined />} size="" onClick={()=>deleteTurfs(data.id)} />
                                    </Space>
                                    <Modal
                                title="Thêm sân bóng"
                                open={isModalOpen}
                                okButtonProps={{ form: 'category-editor-form', key: 'submit', htmlType: 'submit' }}
                                onCancel={handleCancel}
                            >
                                <Form
                                    id="category-editor-form"
                                    onFinish={(e)=>updateTurfs(e,data.id)}
                                    labelCol={{
                                        span: 4,
                                    }}
                                    wrapperCol={{
                                        span: 14,
                                    }}
                                    layout="horizontal"
                                    size="large"
                                    className="mt-4"
                                >
                                    <Form.Item label="Tên sân" name="name">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Loại sân" name="type">
                                        <Select>
                                            <Select.Option value="TURF5">Sân 5</Select.Option>
                                            <Select.Option value="TURF7">Sân 7</Select.Option>
                                            <Select.Option value="TURF11">Sân 11</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Select" name="rating">
                                        <Rate />
                                    </Form.Item>
                                    <Form.Item label="Giá" name="price">
                                        <InputNumber />
                                    </Form.Item>

                                    <Form.Item label="Ảnh">
                                        <input
                                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            // listType="picture"
                                            // maxCount={3}
                                            multiple
                                            onChange={handleImage}
                                            type="file"
                                        >
                                            {/* <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button> */}
                                        </input>
                                    </Form.Item>
                                </Form>
                            </Modal>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurfCard;

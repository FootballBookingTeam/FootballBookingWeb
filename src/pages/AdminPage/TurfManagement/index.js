// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import TurfCard from '../../../components/TurfCard/index.js';
import { apiGetAllTurfs,apiAddSingleTurf } from '../../../API/apiaxios';
import { Button, Dropdown, Modal, Space, Form, Input, Radio, Select, Rate, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UploadImage from '../../../API/imageService';
function TurfManagement() {
    var sectionStyle = {
        width: '100%',
        minHeight: '200px',
        objectFit: 'contain',
        backgroundImage:
            'url(https://www.sporta.vn/assets/default_venue_2-fc9cf297fbd4f7ab5cd72bbf90e66f293d689007ee1aaa1994366e8f0913d8e5.jpg )',
    };
    const [turfs, setTurfs] = useState([]);
    useEffect(() => {
        const getTurfsData = async () => {
            try {
                const response = await apiGetAllTurfs();
                setTurfs(response.data);
            } catch (e) {
                console.error(`🚫 Something went wrong fetching API calls: ${e}`);
            }
        };
        getTurfsData();
    }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageURLs, setImageURLs] = useState([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = (value) => {
        const data = { name: value.name, type: value.type, price: value.price, rating: value.rating };
        const image = imageURLs;
        console.log(data);

        const addTurfs = async () => {
            try {
                const response = await apiAddSingleTurf(data);
                // setTurfs(response.data);
            } catch (e) {
                console.error(`🚫 Something went wrong fetching API calls: ${e}`);
            }
        };
        addTurfs();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleImage = (e) => {
        const files = e.target.files;
        UploadImage(files, setImageURLs);
    };
    return (
        <div className="container-fluid py-5 px-lg-5">
            <div className="turf-cards">
                <div className="mb-5">
                    <div className="turf-container">
                        <h4 className="mb-md-0">Sân bóng đá mini </h4>
                        <Space wrap>
                            <Button type="primary" onClick={showModal} size="large">
                                Thêm sân bóng
                            </Button>
                            <Modal
                                title="Thêm sân bóng"
                                open={isModalOpen}
                                okButtonProps={{ form: 'category-editor-form', key: 'submit', htmlType: 'submit' }}
                                onCancel={handleCancel}
                            >
                                <Form
                                    id="category-editor-form"
                                    onFinish={onFinish}
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
                        </Space>
                    </div>
                </div>
            </div>
            <div className="turf-cards__list">
                {turfs?.map((turf) => (
                    <TurfCard key={turf.id} data={turf} admin={true} />
                ))}
            </div>
        </div>
    );
}

export default TurfManagement;

import axios from 'axios';

const turfRequest = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const apiGetAllTurfs = () => turfRequest.get('/turfs');
export const apiGetSingleTurf = (id) => turfRequest.get(`/turfs/${id}`);
// export const apiPostBookingData = (id, data) => turfRequest.post(`/room/${id}`, data);

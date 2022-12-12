import axios from 'axios';

const turfRequest = axios.create({
    baseURL: 'https://web-production-f82d.up.railway.app/api',
    headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const apiGetAllTurfs = () => turfRequest.get('/turfs');
export const apiGetSingleTurf = (id) => turfRequest.get(`/turfs/${id}`);
export const apiAddSingleTurf = (data) => turfRequest.post(`/turfs`,data);
export const apiUpdateSingleTurf = (id,data) => turfRequest.put(`/turfs/${id}`,data);
export const apiDeleteSingleTurf = (id) => turfRequest.delete(`/turfs/${id}`);
export const apiGetImageTurf = (id) => turfRequest.get(`/turfs/${id}/images`);
// export const apiPostBookingData = (id, data) => turfRequest.post(`/room/${id}`, data);

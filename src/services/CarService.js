import axios from 'axios';

const REST_URL='http://localhost:8081/warehouse/cars';

class CarService {
    getCars(){
        return axios.get(REST_URL)
    }
}

export default new CarService();
const axios = require('axios');
const APIURL ='https://jsonplaceholder.typicode.com/photos';
/*
export const requestsofImage= {
    async getImagesByPage(Page){
        try{
            const response= await axios({
                method:'get',
                url: APIURL,
                params:{
                    page: Page
                }
            }
            );return(response);
        } catch (error){
            console.log(error);
        }
    }
}*/
export const requestsMixin = {
    methods: {
        getImages(page = 1) {
        return axios.get(`${APIURL}/?page=${page}`);
      },
    }
};


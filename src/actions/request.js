import axios from "axios/index";


const http = (method, url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: data,
        })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });
    })

};

export default http;
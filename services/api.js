
export class API {
    constructor(){
        console.log('create API service')
    }
    getPrestineItems() {
        return new Promise((response, reject) => {
            fetch("/api/v1/prestine")

        })
    }
}

let api = new API();

export default api;

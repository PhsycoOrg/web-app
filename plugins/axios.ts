import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl = "http://gyofood.test/api/qr-menu/v1";
    // const defaultUrl = "https://app.myrest.pe/api/qr-menu/v1";

    let api = axios.create({
        baseURL: defaultUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return {
        provide: {
            apiAxios: api,
        },
    };
})

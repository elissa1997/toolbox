import axios from 'axios'
import qs from 'qs'

export function instance1(config) {
    const instance = axios.create({
        baseURL: 'https://info.makedream.site/api/',
        timeout: 5000,
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    })


    instance.interceptors.request.use(config => {
        if (config.method  === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config
    },err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })


    return instance(config)
}

export function instance2(config) {
    const instance = axios.create({
        baseURL: 'https://tool.makedream.site/',
        timeout: 5000,
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    })


    instance.interceptors.request.use(config => {
        if (config.method  === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config
    },err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })


    return instance(config)
}
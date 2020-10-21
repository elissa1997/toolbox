import { instance1,instance2 } from "./request"

export function getv2info() {
    return instance1({
        url: 'info.php',
        method: "post",
        data: {
            type: "v2ray_info"
        },
        
    })
}

export function getv2raystatus() {
    return instance2({
        url: 'info.php',
        method: "post",
        data: {
            type: "v2ray"
        },
    })
}

export function getkmsstatus() {
    return instance1({
        url: 'info.php',
        method: "post",
        data: {
            type: "kms"
        },
    })
}
import { instance1 } from "./request"

export function getsoftwarelist() {
    return instance1({
        url: 'softwarelist.json',
        method: "get", 
    })
}

export function getsoftwareconfig(pwd) {
    return instance1({
        url: 'configdata.php',
        method: "post", 
        data: {
            id: pwd
        },
    })
}
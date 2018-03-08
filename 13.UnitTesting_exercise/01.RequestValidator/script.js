function validateRequest(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uri = new RegExp(/^([A-Za-z0-9.]|\.){2,}$/g);
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const message = new RegExp(/^[^<>\\&'"]+$/gm);

    let validateData = {
        method: () => {
            if (obj.hasOwnProperty('method')) {
                if (methods.includes(obj['method'])) {
                    return true
                }
            }
            throw new Error(`Invalid request header: Invalid Method`)
        },
        uri: () => {
            if (obj.hasOwnProperty('uri')) {
                if (uri.test(obj['uri']) || obj['uri'] === '*') {
                    return true
                }
            }
            throw new Error(`Invalid request header: Invalid URI`)
        },
        version: () => {
            if (obj.hasOwnProperty('version')) {
                if (version.includes(obj['version'])) {
                    return true
                }
            }
            throw new Error(`Invalid request header: Invalid Version`)
        },
        message: () => {
            if (obj.hasOwnProperty('message')) {
                if (message.test(obj['message']) || obj['message'] === '') {
                    return true
                }
            }
            throw new Error(`Invalid request header: Invalid Message`)
        }
    }

    for (let property in validateData) {
        validateData[property]()
    }

    return obj
}


/*console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));*/
/*
console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));*/

// console.log(validateRequest({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
}));

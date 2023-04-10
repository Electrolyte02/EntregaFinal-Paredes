 export const getProduct = (id) =>{
    const promise = new Promise((resolve,reject) =>{
        resolve(id ? prod.find((producto)=> producto.id == id ):prod)
    });
    return promise;
 };
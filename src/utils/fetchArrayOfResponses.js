/**
 * 
 * @param {array} Is the array of url which returns a promise 
 * This function takes an array of urls which returns a promise from fetch and finally returns the data 
 * needed from these fetch calls
 */
export const fetchArrayOfResponses = async(array) => {
    const promises = array.map((url)=>{
        return fetch(url).then((response)=>response.json());
    });
    let data = await Promise.all(promises);
    return data;
}
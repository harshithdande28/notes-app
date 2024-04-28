import request from "postman-request"
const fgc = (address,callback)=>{
    let url = 'http://api.openweathermap.org/geo/1.0/direct?q='+encodeURIComponent(address)+'&limit=1&appid=92cca40de01383b22455f1ba9b1f57e1'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect!',undefined)
        }else if( response.body.cod === '400'){
            callback('Unable to find location!',undefined)
        }else{
            const data = {
                name: response.body[0].name,
                lat: response.body[0].lat,
                lon: response.body[0].lon,
                state: response.body[0].state
            }
            callback(undefined,data)
        }
    })
}
export default{
    fgc
}
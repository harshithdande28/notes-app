import request from "postman-request";
const rgc = (lat,lon,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&'+'lon='+lon+'&appid=92cca40de01383b22455f1ba9b1f57e1'
request({url,json: true},(error,response)=>{ // (error,{body}) this is destructuring of the object response
    if(error){
        callback('Unable to connect!',undefined)
    }else if(response.body.error || response.body.cod === '200'){ //(body.error || body.cod)
        callback('Unable to find location!',undefined)
    }
    else{
        callback(undefined,{
            name:response.body.name, //body.name
            main:response.body.main, //body.main
            country: response.body.sys.country //body.sys.country
        })
    }
})}
export default{
    rgc
}
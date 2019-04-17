import request from 'superagent'

const dataUrl = 'https://api.wheretheiss.at/v1/coordinates/37.795517,-122.393693'
export function getData (callback) {

    request.get(dataUrl)
    .end((err,res)=>{
        callback(err,res.body)
    })
}
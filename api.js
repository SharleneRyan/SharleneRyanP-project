import request from 'superagent'


// const FamilyServicesURL = 'https://catalogue.data.govt.nz/api/3/action/datastore_search' 

const data = {
  resource_id: 'd6748f83-1159-4ed0-a6fb-9e18c9707a6b', // the resource id
  limit: 5, // get 5 results
  q: 'jones' // query for 'jones'
};
$.ajax({
  url: 'https://catalogue.data.govt.nz/api/3/action/datastore_search',
  data: data,
  dataType: 'jsonp',
  success: function(data) {
    alert('Total results found: ' + data.result.total)
  }
});



export function getFamilyServices(callback, FamilyServicesName) {
  console.log('getting FamilyServices info')
  request
    .get(familyServicesURL)
    .end((err, res) => {
      callback(err, res.body)
    })
}
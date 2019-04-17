import request from 'superagent'

const catFactsUrl = 'https://cat-fact.herokuapp.com'

export function getCatFacts(callback) {
  request
    .get(catFactsUrl)
    .end((err, res) => {
      callback(err)
    })
}
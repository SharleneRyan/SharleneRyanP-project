import request from "superagent";

const internationalSpaceStation = "https://api.wheretheiss.at/v1/satellites/25544";

export function getInfo(callback) {
  request.get(internationalSpaceStation).end((err, res) => {
    callback(err, res.body);
  });
}

export default internationalSpaceStation;

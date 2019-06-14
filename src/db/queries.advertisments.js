const Advertisment = require("./models").Advertisment;

module.exports = {

//#1
  getAllAdvertisments(callback){
    return Advertisment.all()

//#2
    .then((ad) => {
      callback(null, ad);
    })
    .catch((err) => {
      callback(err);
    })
  },
  
  addAdvertisment(newAdvertisment, callback){
    return Advertisment.create({
      title: newAdvertisment.title,
      description: newAdvertisment.description
    })
    .then((ad) => {
      callback(null, ad);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
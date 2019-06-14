const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/advertisments/";


describe("routes : advertisments", () => {
const sequelize = require("../../src/db/models/index").sequelize;
const Advertisment = require("../../src/db/models").Advertisment;

beforeEach((done) => {
    this.advertisment;
    sequelize.sync({force: true}).then((res) => {

     Advertisment.create({
       title: "Stupid Ads",
       description: "There is a lot of them"
     })
      .then((advertisment) => {
        this.ad = advertisment;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });

    });

  });

describe("routes : advertisments", () => {

    describe("GET /advertisments", () => {

      it("should return a status code 200 and all ads", (done) => {
        //#3
               request.get(base, (err, res, body) => {
                 expect(res.statusCode).toBe(200);
                 expect(err).toBeNull();
                 expect(body).toContain("Advertisments");
                 expect(body).toContain("Stupid Ads");
                 done();
               });
             });
    });
     

    describe("GET /advertisments/new", () =>{
        it("should reender a new advertisment form", (done)=>{
            request.get(`${base}new`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("New Ad");
                done();
              });
        });
    });

    describe("POST /advertisments/create", () => {
        const options = {
          url: `${base}create`,
          form: {
            title: "V8",
            description: "Could of had a V8!"
          }
        };
  
        it("should create a new ad and redirect", (done) => {
  
  //#1
          request.post(options,
  
  //#2
            (err, res, body) => {
              Advertisment.findOne({where: {title: "V8"}})
              .then((ad) => {
                expect(res.statusCode).toBe(303);
                expect(ad.title).toBe("V8");
                expect(ad.description).toBe("Could of had a V8!");
                done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });
            }
          );
        });
      });
});
});
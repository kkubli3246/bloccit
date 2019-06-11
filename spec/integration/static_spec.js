const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

//#1
  describe("GET /", () => {

//#2
it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {

//#3
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Bloccit");

//#4
        done();
      });
    });

  });

  describe("GET /marco", () => {
    it("should return \' polo\' in body and 200 status Code",(done)=>{
        request.get(base + "marco", (err, res, body)=>{
            expect(res.statusCode).toBe(200);
            console.log(body);
            expect(body).toBe("polo");

            done();
        })
    });
  });
});
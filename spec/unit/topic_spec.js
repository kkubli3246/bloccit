const sequelize = require("../../src/db/models/index").sequelize;
const request = require("request");
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", ()=>{

    beforeEach((done) => {
       //#1
           this.topic;
           this.post;
           sequelize.sync({force: true}).then((res) => {
       //#2
             Topic.create({
               title: "Expeditions to Alpha Centauri",
               description: "A compilation of reports from recent visits to the star system."

              })
             .then((topic) => {
               this.topic = topic;
       //#3
               Post.create({
                 title: "My first visit to Proxima Centauri b",
                 body: "I saw some rocks.",
       //#4
                 topicId: this.topic.id
               })
               .then((post) => {
                 this.post = post;
                 done();
               })
               .catch((err) => {
                   console.log(err);
                   done();
                 });

                Post.create({
                   title: "My first visit to Proxima Centauri b2",
                   body: "I saw some rocks.2",
         //#4
                   topicId: this.topic.id
                 })
                 .then((post) => {
                   this.post = post;
                   done();
                 });
             })
             .catch((err) => {
               console.log(err);
               done();
             });
           });
         });
   describe("#create()", () => {
       it("should check to see topic was created", (done) => {
           Topic.create({
               title: "React",
               description: "React is a front end framework"
           })
           .then((topic) =>{
               expect(topic.title).toBe("React");
               expect(topic.description).toBe("React is a front end framework");
               done();
           })
           .catch((err) => {
               console.log(err);
               done();
             });
       });
   });

    describe("#getPosts()", () => {
       it("should return an array posts associated with topics", (done) => {
           this.topic.getPosts()
           .then((posts) => {
               expect(posts.length).toBe(2);
               posts.forEach(element => {
                   console.log(element.title)
               });

            done();       
           });

        });
   });
});
const request = require("supertest");
const server = require("./server");

let token; //Saving token

describe("server.js accessing routes", () => {
  describe("Attempt Login", () => {
    it("returns 200 ok", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "dad",
          password: "joke"
        });
      expect(res.status).toBe(200);
    });
    it("throws error if login info is missing", async () => {
      const res = await request(server).post("/api/auth/login");
      expect(res.status).toBe(500);
    });
    it("throws error if login info is incorrect", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "dad2",
          password: "joke2"
        });
      expect(res.status).toBe(401);
    });
  });
  describe("Login and attempt getting some jokes", () => {
    it("Use Token received and Receive Jokes", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "dad",
          password: "joke"
        });
      token = res.body.token;

      const expectedJoke = [
        {
          id: "0189hNRf2g",
          joke:
            "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
        }
      ];
      const resJoke = await request(server)
        .get("/api/jokes")
        .set("Authorization", `${token}`);
      expect(resJoke.status).toBe(200);
      expect(resJoke.body).toEqual(expect.arrayContaining(expectedJoke));
    });
    it("Deny Jokes if no token or invalid token is used for request", async () => {
      const resJoke = await request(server)
        .get("/api/jokes")
        .set("Authorization", `123123dsfcbdf`);
      expect(resJoke.status).toBe(401);
    });
  });
});

const request = require("supertest");
const server = require("./server");

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
});

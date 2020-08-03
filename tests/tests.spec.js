const db = require("../database/dbConfig");
const Auth = require("../auth/authModel");
const request = require("supertest");
const server = require("../api/server");
const items = require("../items/itemModel");
const router = require("../items/itemRouter");
const users = require("../users/userModel");


describe('test route', () => {
    it(' 200 status code', async () => {
        const code = 200
        const response = await request(server).get('/')
        expect(response.status).toEqual(code)
    })
})

describe("server GET", () => {
    it("should be", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    it("respond with JSON", () => {
      return request(server)
        .get("/")
        .expect("Content-Type", /json/);
    });
  });

describe("register user", () => {
    it('returns 500 status code', async () => {
        const payload = { badusername: "123", badpassword: "123" }
        const response = await request(server)
            .post("/api/auth/register")
            .send(payload)
        expect(response.statusCode).toBe(500)
    })
})

describe("login user", () => {
    it('returns 200 status code', async () => {
        const payload = { username: "bob", password: "smith",email:"bob@smith.com" }
        const response = await request(server)
            .post("/api/auth/login")
            .send(payload)
        expect(response.statusCode).toBe(200)
    })
    it('returns 500', async () => {
        const payload = { NOTusername: "bad2", NOTpassword: "bad2" }
        const response = await request(server)
            .post("/api/authR/loginRent")
            .send(payload)
        expect(response.statusCode).toBe(500)
    })
})

describe("PosterModel", () => {
    describe("addUser", () => {
      it("expect", async () => {
        await users.getAllPosters();
        expect(200);
      });
    });
    describe("getPosterById", () => {
      it("expect", async () => {
        await users.findPosterById(1);
        expect(200);
      });
    });
  });
  
describe("itemModel", () => {
    describe("gets all items", () => {
      it("expect", async () => {
        await items.getItems();
        expect(200);
      });
    });
    describe("gets items by ID", () => {
      it("expect 200 ", async () => {
        await items.getItemByID(1);
        expect(200);
      });
    });
  });
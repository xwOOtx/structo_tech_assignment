import { expect } from "chai";
import request from "supertest";
import app from "../../../src";

describe("POST /token", () => {
  
  it("should return status code 200", async () => {
    const res = await request(app)
      .post("/token")
      .send({
        username: "structo_user",
        password: "NotAStrongPassword"
      })

      expect(res.statusCode).to.be.equal(200);
  });
});

describe("POST /refreshToken", () => {
  let accessToken = "";
  let refreshToken = "";
  beforeEach(async () => {
    const res = await request(app)
      .post("/token")
      .send({
        username: "structo_user",
        password: "NotAStrongPassword"
      })

    accessToken = res.body.token.accessToken;
    refreshToken = res.body.token.refreshToken;
    
  });

  it("should return status code 200", async () => {
    
    const res = await request(app)
      .post("/refreshToken")
      .set({
        Authorization: accessToken
      })
      .send({
        username: "structo_user",
        refreshToken: refreshToken
      })

      expect(res.statusCode).to.be.equal(200);
  });
});
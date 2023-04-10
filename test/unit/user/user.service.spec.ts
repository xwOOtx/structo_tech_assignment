import { expect } from "chai";
import sinon from "sinon";
import * as generateJwt from "../../../src/services/generateJwt";
import * as generateRefreshToken from "../../../src/services/generateRefreshToken";
import { IUser } from "../../../src/user/user.interface";
import { login } from "../../../src/user/user.service";

describe("User Login", () => {
  beforeEach(() => {
    sinon.reset();
  })

  afterEach(() => {
    sinon.restore();
  })
  
  it("should login successfully and receive an access token", () => {

    const user: IUser = {
      username: "structo_user",
      password: "NotAStrongPassword"
    }

    const generateJwtFake = sinon.fake(() => {
      return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwidXNlciI6InN0cnVjdG9fdXNlciIsImlhdCI6MTY4MTA5ODk4MCwiZXhwIjoxNjgxMDk5ODgwfQ.fhQJEe3qHqZahGJI-KsE7t2mnSLiBsiY89e0k6kZHaI"
    });

    const generateRefreshTokenFake = sinon.fake(() => {
      return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwidXNlciI6InN0cnVjdG9fdXNlciIsImlhdCI6MTY4MTA5ODk4MCwiZXhwIjoxNjgzNjkwOTgwfQ.hxvBkrjJa-UUgJ5yMVuLUDX8rPOXmRs2edD0ISWCKS4"
    });

    sinon.replace(generateJwt, "generateJwt", generateJwtFake);
    sinon.replace(generateRefreshToken, "generateRefreshToken", generateRefreshTokenFake);


    const result = login(user);

    expect(result).to.have.property('token');
    expect(result.token).to.have.all.keys(['accessToken', 'refreshToken']);

  });

  it("should throw an error for invalid username", () => {

    const user: IUser = {
      username: "unknown",
      password: "NotAStrongPassword"
    }

    expect(() => login(user)).to.throw(Error, "Unable to login");
  });

  it("should throw an error for invalid password", () => {

    const user: IUser = {
      username: "structo_user",
      password: "wrongPassword"
    }

    expect(() => login(user)).to.throw(Error, "Unable to login");
  });
});
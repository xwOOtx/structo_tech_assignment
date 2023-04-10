import { expect } from "chai";
import { UserModel } from "../../../src/user/user.model";
import * as dotenv from "dotenv";
import { generateRefreshToken } from "../../../src/services/generateRefreshToken";
dotenv.config();

describe("Generate Refresh Token", () => {

  it("should generate a refresh token successfully", () => {
    const user: UserModel = {
      _id: "1",
      username: "structo_user",
      password: "NotAStrongPassword",
    }
  
    const result = generateRefreshToken(user);
  
    expect(result).to.be.a("string");
  })
});
import { expect } from "chai";
import { generateJwt } from "../../../src/services/generateJwt";
import { UserModel } from "../../../src/user/user.model";
import * as dotenv from "dotenv";
dotenv.config();

describe("Generate Jwt", () => {

  it("should generate a JWT successfully", () => {
    const user: UserModel = {
      _id: "1",
      username: "structo_user",
      password: "NotAStrongPassword",
    }
  
    const result = generateJwt(user);
  
    expect(result).to.be.a("string");
  })
});
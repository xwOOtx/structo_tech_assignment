-REST API-
POST /token
request body:
{
username: string,
password: string
}

response:
{
token: {
accessToken: string
}
}

GET /about
use JWT as authorisation bearer
reponse:
{
"Hello World"
}

POST /refreshToken
request body:
{
username: string,
refreshToken: string
}

---

-TEST-
POST /token
curl -XPOST -H "Content-type: application/json" -d '{
"username": "structo_user",
"password": "NotAStrongPassword"
}' 'http://localhost:3000/token'

GET /about
curl -XGET -H 'Authorization: "accessTokenFromLogin"' -H "Content-type: application/json" 'http://localhost:3000/about'

POST /refreshToken
curl -XPOST -H 'Authorization: accessTokenFromLogin' -H "Content-type: application/json" -d '{
"username": "structo_user",
"refreshToken": "refreshTokenFromLogin"
}' 'http://localhost:3000/token'

---

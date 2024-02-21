
const fetch = require('node-fetch')

const createUser = (user) => {
fetch(
  'http://localhost:3000/api/users',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  }
)
.then(res => res.json()
createUser({
  username: 'c@a.com',
  firstName: 'nao',
  lastName: 'importa',
  password: '1234567',
})
.then(console.log)


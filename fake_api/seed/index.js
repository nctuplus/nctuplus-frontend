
let bulletinsSeeder = require('./bulletins')

const seeder = () => ({
  bulletins: bulletinsSeeder(100)
})
console.log(JSON.stringify(seeder()))
module.exports = seeder

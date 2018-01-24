
let bulletins_seeder = require('./bulletins')

const seeder = () => ({
  bulletins: bulletins_seeder(100)
})
console.log(JSON.stringify(seeder()))
module.exports = seeder

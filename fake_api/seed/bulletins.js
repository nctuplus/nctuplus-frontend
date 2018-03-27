
let faker = require('faker')
faker.locale = 'zh_TW'

const bulletinsSeeder = (amount) => (
  new Array(amount).fill(0).map((value, index) => ({
    id: index + 1,
    title: faker.random.words(3),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    type: faker.random.number(2)
  }))
)

module.exports = bulletinsSeeder

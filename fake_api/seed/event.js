
let faker = require('faker')
faker.locale = 'zh_TW';

const events_seeder = (amount) => (
  new Array(amount).fill(0).map((value, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    created_at: faker.date.past(),
    updated_at: faker.date.past()
  }))
)

module.exports = events_seeder
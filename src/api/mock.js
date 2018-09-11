
export function login (user = 'test') {
  const testAccountData = {
    email: 'test@plus.nctu',
    password: 'youshallnotpass'
  }
  const adminAccountData = {
    email: 'admin@plus.nctu',
    password: 'superpowerfulpassword'
  }
  return user === 'test'
    ? testAccountData
    : adminAccountData
}

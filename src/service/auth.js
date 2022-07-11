import userData from '../mocks/users.json';

export const signin = (username, password) => {
  const { users } = userData;
  for (const user of users) {
    if (user.username === username && user.password === password) {
      return { result: 'success', user: { username } };
    } else {
      throw new Error('Wrong password or username, please try again');
    }
  }
};

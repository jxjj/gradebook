const delay = 1000;
const users = [
  {
    id: 1,
    email: 'admin@admin.com',
    password: 'admin',
  }, {
    id: 2,
    email: 'test@test.com',
    password: 'test',
  },
];

function getSafeUser(user) {
  const safeKeys = Object.keys(user).filter(key => key !== 'password');
  const safeUser = {};
  safeKeys.forEach((key) => {
    safeUser[key] = user[key];
  });
  return safeUser;
}

export function auth(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email);
      if (user.password === password) {
        return resolve(getSafeUser(user));
      }
      return resolve(false);
    }, delay);
  });
}

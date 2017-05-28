const delay = 1000;
const users = [
  {
    id: 1,
    email: 'admin@admin.com',
    password: 'admin',
    profile: {
      img: 'https://secure.gravatar.com/avatar/d40975ffc27c0e132eb81368b278ea34',
    },
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

export function loginWithPassword(email, password) {
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

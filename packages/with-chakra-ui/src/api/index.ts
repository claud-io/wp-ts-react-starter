export const refresh: () => Promise<any> = () => {
  return new Promise((resolve, reject) => {
    resolve({ access_token: 'new_at1', refresh_token: 'new_rt1' });
  });
};

export const me: () => Promise<any> = () => {
  return new Promise((resolve, reject) => {
    resolve({ id: 1, username: 'finto', password: 'finta', role: 'call center' });
  });
};

export const login: (user: any) => Promise<any> = (user) => {
  return new Promise((resolve, reject) => {
    if (user.username == 'finto') {
      resolve({ access_token: 'new_at2', refresh_token: 'new_rt2' });
    }
    reject('nope');
  });
};

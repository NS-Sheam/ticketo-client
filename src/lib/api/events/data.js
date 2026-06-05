import { serverFetch } from '../server';

export const myEvents = async (email) => {
  //   console.log(email, 'email');

  const result = await serverFetch(`/api/events/${email}`);
  //   console.log(result, 'my events');

  return result;
};

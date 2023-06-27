import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    // eslint-disable-next-line no-console
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;

import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    await Promise.all([uploadPhoto(), createUser()]);
  } catch (error) {
    // console.log('Signup system offline');
  }
}

export default handleProfileSignup;

import { encryptTransform } from 'redux-persist-transform-encrypt';
import { APP } from '../constants';

const encryptor = encryptTransform({
  secretKey: APP.SECRET_KEY,
  onError: function (error) {
    // Handle encryption errors if needed
    console.error('Encryption error:', error);
  }
});

export default encryptor;

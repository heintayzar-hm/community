import { encryptTransform } from 'redux-persist-transform-encrypt';

const encryptor = encryptTransform({
  secretKey: 'SecretKey',
  onError: function (error) {
    // Handle encryption errors if needed
    console.error('Encryption error:', error);
  }
});

export default encryptor;

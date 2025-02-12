import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {
  private readonly SECRET_KEY = '67a88758-d40c-8001-983a-cfae8a1958ea';

  encrypt(data: string, secret = this.SECRET_KEY): string {
    return CryptoJS.AES.encrypt(data, secret).toString();
  }

  decrypt(encryptedData: string, secret = this.SECRET_KEY): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  safeString(info: string): string {
    const encoded = Buffer.from(info).toString('base64');
    return encoded.replace('/', '_').replace('+', '-');
  }

  unSafeEncode(info: string): string {
    const decoded = Buffer.from(
      info.replace('_', '/').replace('-', '+'),
      'base64',
    );
    return decoded.toString('utf8');
  }
}

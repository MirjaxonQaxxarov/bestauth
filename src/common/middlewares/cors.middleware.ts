import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );

    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }

    if (req.headers['content-type'] != 'application/json') {
      return res
        .status(400)
        .json({ message: 'Request not allowed', errorCode: 1001 });
    }
    if (!req.headers['token']) {
      return res
        .status(400)
        .json({ message: 'Request not allowed', errorCode: 1002 });
    }
    if (!req.headers['information']) {
      return res
        .status(400)
        .json({ message: 'Request not allowed', errorCode: 1003 });
    }
    try {
      const token = req.headers['token'];
      const key = req.headers['key'];
      const decryptText = CryptoJS.AES.decrypt(token, key).toString(
        CryptoJS.enc.Utf8,
      );
      if (decryptText != key) {
        return res
          .status(400)
          .json({ message: 'Request not allowed', errorCode: 1004 });
      }
    } catch (Error) {
      return res
        .status(400)
        .json({ message: 'Request not allowed', errorCode: 1005 });
    }
    next();
  }
}

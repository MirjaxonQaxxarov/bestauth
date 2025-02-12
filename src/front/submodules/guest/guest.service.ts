import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestService {
  findAll() {
    return `This action returns all auth`;
  }
}

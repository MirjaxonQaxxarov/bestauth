import { Controller, Get } from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Get()
  findAll() {
    return this.guestService.findAll();
  }
}

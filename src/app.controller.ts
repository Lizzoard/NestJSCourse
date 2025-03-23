import { Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  @Get('app/hi')
  getRootRoute() {
    return 'Hi there';
  }

  @Get('app/bye')
  getByeThere() {
    return 'bye there';
  }
}

export default AppController;

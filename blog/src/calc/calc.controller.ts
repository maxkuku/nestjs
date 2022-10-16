import { Controller, Query, Patch } from '@nestjs/common';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private calcService: CalcService) {}

  @Patch('sum')
  sumParams(@Query() data: [number, number]): number {
    console.log(data);
    return this.calcService.sumParams(data);
  }
}

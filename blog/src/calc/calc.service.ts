import { Injectable } from '@nestjs/common';
import { Calc } from './calc.interface';

@Injectable()
export class CalcService {
  private readonly calc: Calc[] = [];

  sumParams(calc: [number, number]): number {
    const res = calc[0] + calc[1];
    console.log(calc);
    return res;
  }
}

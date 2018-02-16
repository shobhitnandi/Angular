import { Injectable } from '@angular/core';

@Injectable()
export class ProgrammingService {

  constructor() { }

  getProgramming()
  {
    return ["C","C++","Java","PHP","Python","Angular"];
  }
}

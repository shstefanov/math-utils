class ArithmeticProgression {
  
  
  constructor(f, d){
    this.f = f;
    this.d = d;
  }

  get(n){
    return this.f + n * this.d;
  }

  getRow(pos, length){

  }
}

module.exports = ArithmeticProgression;
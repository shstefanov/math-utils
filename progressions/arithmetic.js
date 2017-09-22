class ArithmeticProgression {
  
  
  constructor(f, d){
    this.f = f;
    this.d = d;
  }

  get(n){
    return this.f + n * this.d;
  }

  getRow(pos, length){
    var result = [], first = this.get(p);
    for(var i = this.f; i < length; i++){
      result.push( first + i * this.d );
    }
    return result;
  }
}

module.exports = ArithmeticProgression;
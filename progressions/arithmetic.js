class Progression {
  
  
  constructor(f, d){
    this.f = f;
    this.d = d;
  }

  get(n){
    return f + n * this.d;
  }
}
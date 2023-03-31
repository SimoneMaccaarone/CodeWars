const areaOrPerimeter = function(l , w) {
  // Return your answer
//   let squareArea = 0;
     let rettangoloPerimetro = 0
  if( l !== w){
    rettangoloPerimetro = (l*2) + (w*2)
    return rettangoloPerimetro;
  }
  const squareArea = l*w;
  return squareArea;
        
};

console.log(areaOrPerimeter(3,4))

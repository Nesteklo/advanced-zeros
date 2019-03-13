module.exports = function getZerosCount(number, base) {
  var zerosCount = number;
  var power;  
  var i;  
  var dividerCount;
  var number_1;           //вспомогательный number

  for (divider = 2; divider <= base; divider++) {
    if ((base / divider) % 1 == 0) {
      power = 0;
      while((base / divider) % 1 == 0){   //находим степень делителя
        power = power + 1;
        base = base / divider;
      } 

      dividerCount = 0;
      number_1 = number;
      i = number_1 / divider;
      
      while (i > 1) {         
        dividerCount = dividerCount + Math.floor(number_1 / divider);   // находим сколько раз делитель встречается в факториале
        number_1 = i;
        i = i / divider;
      }

      zerosCount = Math.min(zerosCount, Math.floor(dividerCount / power));  //количество нулей
    }
  }

  return zerosCount;
}
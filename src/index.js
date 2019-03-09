module.exports = function getZerosCount(number, base) {
  var length = 0;
  var array_divider = [length];  //массив делителей base
  var array1 = [length];         //степень делителя 
  var array2 = [length];         //сколько раз делитель встречается в number
  var number_1, number_2;        //вспомогательные "number"
  var zerosCount;
  
  for(i = 2; i <= base; i++){           // делитель и его степень
    if((base / i) % 1 == 0){
      length++;
      array1[length - 1] = 0;
      array_divider[length - 1] = i;
      while((base / i) % 1 == 0){
        base = base / i;
        array1[length - 1]++;
      }
    }
  }

  for(i = 0; i < length; i++){           // сколько раз делитель встречается в числе
    array2[i]=0;
    number_1 = number;
    for(; number_1 >= array_divider[i]; number_1--){
      number_2 = number_1;
      while((number_2 / array_divider[i]) % 1 == 0){
        number_2 = number_2 / array_divider[i];
        array2[i]++;
      }
    }
  }
  
  zerosCount = ((array2[0] - (array2[0] % array1[0])) / array1[0]); //количество нулей
  for(i = 1; i < length; i++){
    if(zerosCount > ((array2[i] / array1[i]) - (array2[i] % array1[i]))){
      zerosCount = (array2[i] / array1[i]) - (array2[i] % array1[i]);
    }
  }
  
  return zerosCount;
}
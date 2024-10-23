function addDollar() {
  // курс доллара
  let dollar = document.getElementById("dollar").value

  // Диаметр заготовки
  let num1 = document.getElementById("num1").value
  let sum1 = (num1>=1 && num1 <= 20) ? 0.5 : (num1>=1 && num1 <= 50) ? 0.9999999 : (num1>=1 && num1 <= 100) ? 1.9999999 : num1 >= 101 ? 2.9999999 : 0.0

  // Длина детали
  let num2 = document.getElementById("num2").value
  let sum2 = num2 >=1 && num2 <= 10 ? 0.2
  : num2 >= 11 && num2 <= 30 ? 0.3
  : num2 >= 31 && num2 <= 100 ? 0.5
  : num2 >= 101 && num2 <= 200 ? 0.9999999
  : num2 >= 201 && num2 <= 499 ? 1.9999999
  : num2 >= 500 ? 2.999999
  : 0

  // Проточка наружного диаметра
  let num3 = document.getElementById("num3").value
  let sum3 = num3 >=1 && num3 <= 5 ? 0.999999
  : num3 >=1 && num3 <= 10 ? 1.5
  : num3 >=1 && num3 <= 20 ? 1.9999999
  : num3 >=1 && num3 >= 21 ? 2.9999999
  : 0

  // Подрезка торца
  let num4 = document.getElementById("num4").value
  let sum4 = num4 >=1 ? num4 * 0.3
  : 0

  // Снятие фаски
  let num5 = document.getElementById("num5").value
  let sum5 = num5 >=1 ? num5 * 0.2
  : 0

  // Сверловка расточка
  let num6 = document.getElementById("num6").value
  let sum6 = num6 >=1 && num6 <= 10 ? 0.5
  : num6 >=1 && num6 <= 20 ? 0.999999
  : num6 >=1 && num6 <= 30 ? 1.5
  : num6 >=1 && num6 <= 50 ? 1.999999
  : num6 >=1 && num6 >= 51 ? 2.999999
  : 0

  // Внутренняя резьба
  let num7 = document.getElementById("num7").value
  let sum7 = num7 >=1 && num7 <= 8 ? 0.5
  : num7 >=1 && num7 <= 20 ? 0.999999
  : num7 >=1 && num7 <= 30 ? 1.5
  : num7 >=1 && num7 >= 31 ? 1.999999
  : 0

  // Наружная резьба
  let num8 = document.getElementById("num8").value
  let sum8 = num8 >=1 && num8 <= 8 ? 0.5
  : num8 >=1 && num8 <= 20 ? 0.999999
  : num8 >=1 && num8 <= 30 ? 1.5
  : num8 >=1 && num8 >= 31 ? 1.999999
  : 0

  // пазы и канавки
  let num9 = document.getElementById("num9").value
  let sum9 = num9 >=1 ? num9 * 0.5
  : 0

  // Шпонпаз
  let num10 = document.getElementById("num10").value
  let sum10 = num10 >=1 && num10 <= 6 ? 0.999999
  : num10 >=1 && num10 <= 8 ? 1.999999
  : num10 >=1 && num10 <= 10 ? 2.999999
  : num10 >=1 && num10 >= 12 ? 3.999999
  : 0

  // Отрезка
  let num11 = document.getElementById("num11").value
  let sum11 = num11 >=1 && num11 <= 20 ? 0.5
  : num11 >=1 && num11 <= 50 ? 0.999999
  : num11 >=1 && num11 <= 70 ? 1.999999
  : num11 >=1 && num11 >= 71 ? 2.999999
  : 0

  // Стоимость металла
  let num12 = document.getElementById("num12").value
  let sum12 = num12 * 0.999999

  // конус внутренний наружный
  let num13 = document.getElementById("num13").value
  let sum13 = num13 >=1 ? num13 * 0.999999
  : 0

  // квалитет
  let num14 = document.getElementById("num14").value
  let sum14 = num14 >=1 && num14 <= 6 ? 2
  : num14 >=7 && num14 <= 8 ? 1.5
  : num14 >=9 && num14 <= 10 ? 1.3
  : num14 >=11&& num14 <= 12 ? 1.2
  : 1

// % Наценки
  let num15 = document.getElementById("num15").value




  let result = (sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8 + sum9 + sum10 + sum11 + sum12 + sum13) * dollar * sum14
  let resultfin = result + (result * num15) / 100
  document.getElementById("priceDollar").innerText = '± ' + parseInt(resultfin.toFixed(2)) + ' ₽'
}






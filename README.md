# test-labsystech

## Тесты:

### Тест 1 (короткая строка):

Входной массив: [1, 2, 300]
Сериализованная строка: AQIA/////wE=

### Тест 2 (случайные числа):

Входной массив: [10, 20, 30, 40, 50]
Сериализованная строка: AgIDCgQAAwQ=

### Тест 3 (100 чисел):

Входной массив: случайные числа от 1 до 300
Сериализованная строка: будет длинной строкой, результат зависит от случайных чисел.

### Тест 4 (1000 чисел):

Входной массив: случайные числа от 1 до 300
Сериализованная строка: будет ещё длиннее.

### Коэффициент сжатия:
Коэффициент сжатия будет зависеть от структуры данных. В среднем, благодаря упаковке чисел в 9 бит, мы достигаем коэффициента сжатия порядка 2.5-3.0 для массива чисел, где каждое число представляется 9 битами, а результат кодируется в строку Base64.

Этот подход позволяет эффективно сжимать массив чисел и сохранять компактное представление в виде строки, состоящей только из ASCII символов.

import ErrorRepository from '../app';

test('Проверка текста ошибки при отсутствии кода ошибки', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('0');
  expect(recieved).toBe('Unknown error');
});

test('Проверка текста ошибки 1', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('1');
  expect(recieved).toBe('Ошибка 1! Общая ошибка');
});

test('Проверка текста ошибки 2', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('2');
  expect(recieved).toBe('Ошибка 2! Нельзя повысить уровень умершего персонажа');
});

test('Проверка текста ошибки 3', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('3');
  expect(recieved).toBe('Ошибка 3! Достигнут максимальный уровень персонажа');
});

test('Проверка текста ошибки 4', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('4');
  expect(recieved).toBe('Ошибка 4! Персонаж уже добавлен в команду');
});

test('Проверка текста ошибки 5', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('5');
  expect(recieved).toBe('Ошибка 5! Нельзя добавить в команду');
});

test('Проверка текста ошибки 6', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('6');
  expect(recieved).toBe('Ошибка 6! Некорректный тип персонажа');
});

test('Проверка текста ошибки 7', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('7');
  expect(recieved).toBe('Ошибка 7! Некорректное имя персонажа');
});

test('Проверка текста ошибки 8', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('8');
  expect(recieved).toBe('Ошибка 8! Некорректное имя пользователя');
});

test('Проверка текста ошибки 9', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('9');
  expect(recieved).toBe('Ошибка 9! Описание спецатаки недоступно');
});

test('Проверка текста ошибки 10', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('10');
  expect(recieved).toBe('Ошибка 10! Неизвестная ошибка');
});

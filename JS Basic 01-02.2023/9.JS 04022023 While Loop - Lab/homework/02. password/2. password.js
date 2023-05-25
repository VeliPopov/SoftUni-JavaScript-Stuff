//FIXME: кофти пример

function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3; //3-ката идва, от това че вече има 3 изнесени (хардкоднати) индекса в кода, без да ги добавям динамично с index++
    while (data !== password) {
      data = input[index];
      index++;
    }
    console.log(`Welcome ${username}!`);
  }
  
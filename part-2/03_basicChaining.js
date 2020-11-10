const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // console.log(__dirname);
  // /Users/Hwanieee/Desktop/immersive/part2/im-sprint-async-and-promise/part-2
  console.log(process.cwd());
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let result = [];
  return getDataFromFilePromise(user1Path)
    .then((res) => {
      result.push(JSON.parse(res));
      return getDataFromFilePromise(user2Path);
    })
    .then((res) => {
      result.push(JSON.parse(res));
      return result;
    });
};

// readAllUsersChaining();

module.exports = {
  readAllUsersChaining,
};

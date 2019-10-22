const timedFunc = function (str) {
  for (let i = 0; i <= str.length; i++) {
    setTimeout(() => {
      if (i == str.length) {
        process.stdout.write("\n");
      } else {
        process.stdout.write(str[i]);
      }
    }, i * 5);
  }
};

const sentence = "hello there from lighthouse labs"
timedFunc(sentence);

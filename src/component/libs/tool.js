export const random = function (min, max, count = 1) {
  // 随机生成数字组合
  let randoms = [];
  let isExists = true;
  while (isExists) {
    let isEquery = false;
    //随机生成数字
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    random = formatBallNum(random);
    // 判断当前随机数是否已经存在
    for (let i = 0; i < randoms.length; i++) {
      if (random === randoms[i]) {
        isEquery = true;
        break;
      }
    }
    // 如果不存在，则添加进去
    if (!isEquery) randoms.push(random);
    // count表示要随机的个数
    if (randoms.length === count) {
      isExists = false;
    }
  }
  randoms.sort(function (a, b) {
    return a - b;
  });
  return randoms;
};
export const combinationNum = function (num, count) {
  //传入球的个数，生成总数
  if (num < count) {
    return 0;
  }
  let totolNum = 1;
  for (let i = 0; i < count; i++) {
    totolNum *= (num - i) / (count - i);
  }
  return Math.round(totolNum);
};
export function formatMoney(s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}

export function randomArr(min, max, count = 1, num = 1) {
  let data = [];
  while (num > 0) {
    data.push(random(min, max, count));
    num--;
  }
  return data;
}

export function formatBallNum(num) {
  if (num < 10 && num > 0) {
    return "0" + num;
  } else {
    return num;
  }
}

/**
 * 求：组合C(m, n)，m为上标，n为下标。m选n的所有项
 * m {必传} 原始数据
 * n {必传} 当前项还需元素的个数
 * currentIndex 当前索引
 * choseArr 当前项的部分元素集合（不是完整项，是生成完整项的一个中间状态）
 * result 所有项的结果结合
 */
export function cmn(m, n, currentIndex = 0, choseArr = [], result = []) {
  let mLen = m.length;
  // 可选数量小于项所需元素的个数，则递归终止
  if (currentIndex + n > mLen) {
    return;
  }
  for (let i = currentIndex; i < mLen; i++) {
    // n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
    // debugger
    if (n === 1) {
      // 再增加一个元素就能生成一个完整项，再加入到结果集合中
      result.push([...choseArr, m[i]]);
      // 继续下一个元素生成一个新的完整项
      i + 1 < mLen && cmn(m, n, i + 1, choseArr, result);
      break;
    }
    // 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
    cmn(m, n - 1, i + 1, [...choseArr, m[i]], result);
  }
  return result;
}

import Contract from '../contract/index';
const { getID } = Contract;
const userName = getID;
//增加最近访问内容
export const setRecentlyList = (file: any) => {
  //   let isFile = false
  let recentlyList = [];
  if (localStorage.getItem(`${userName}_recentlyFiles`)) {
    recentlyList = JSON.parse(localStorage.getItem(`${userName}_recentlyFiles`) || '');
  }
  let fileIndex = 0;
  //判断数组中是否已经含有此元素
  const isFile = recentlyList.some((res: any, index: any) => {
    if (res.sid === file.sid) {
      fileIndex = index;
    }
    return res.sid === file.sid;
  });
  if (isFile) {
    recentlyList.unshift(recentlyList.splice(fileIndex, 1)[0]);
  } else {
    recentlyList.unshift(file);
  }
  if (recentlyList.length > 10) {
    recentlyList.splice(10);
  }
  localStorage.setItem(`${userName}_recentlyFiles`, JSON.stringify(recentlyList));
};
//获取最近访问列表
export const getRecentlyList = (getValue = 10) => {
  let recentlyList = JSON.parse(localStorage.getItem(`${userName}_recentlyFiles`) || '[]');
  recentlyList.splice(getValue);
  return recentlyList;
};
//删除列表中的某个记录
export const deleteRecentlyList = (deleteSid: any) => {
  let recentlyList = JSON.parse(localStorage.getItem(`${userName}_recentlyFiles`) || '[]');

  for (const key in deleteSid) {
    recentlyList.some((res: any, index: any) => {
      if (res.sid === deleteSid[key]) {
        recentlyList.splice(index, 1);
      }
    });
  }
  console.log(recentlyList);
  localStorage.setItem(`${userName}_recentlyFiles`, JSON.stringify(recentlyList));
};

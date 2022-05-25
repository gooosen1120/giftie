
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '给丫头的送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '希望丫头年年都要得到开心', },
    { key: 's', wording: '这里会攒够丫头一年之中说喜欢的东西', },
    { key: 'd', wording: '然后，让丫头在这里能选到自己的幸福', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '周大福素指环', alias: '素指环', image: '/images/33.jpeg',  description: '「简单的才是美丽的」' },
  { key: 'w', name: '该换手机啦', alias: 'iphone14', image: '/images/11.jpeg',  description: '“让手机加速起来”' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/44.jpeg',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '迷你洗衣机', alias: '洗衣机', image: '/images/55.jpeg',  description: '「懒丫头能解放一点是一点」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '明眸仙女棒', alias: '仙女棒', image: '/images/66.jpeg',  description: '“大眼睛亮起来”' },
  { key: 'i', name: 'Dyson美发套装', alias: '戴森', image: '/images/22.jpeg',  description: '「不同造型需求，全面满足」' },
];

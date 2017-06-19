
export default {
  user: {
    name: 'Meowu',
    image: '/static/wxicon_1.jpg'
  },
  friends: [
    {
      id: 1665646423, // 每个账号一个独特的id以便去重，实际中可以用独特的规则生产
      name: '提莫',   // 或者直接用一个ms计算的时间来替代即可满足很多情况
      image: '/static/timo.jpg',
      alias: '小可爱',
      description: '嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
      region: '班德尔城'
    },
    {
      id: 45312321,
      name: '泰隆',
      image: '/static/tailong.jpg',
      alias: '刀锋之影',
      description: '刀下生，刀下死。',
      region: '诺克萨斯'
    },
    {
      id: 1431423,
      name: '伊泽瑞尔',
      image: '/static/EZ.jpg',
      alias: '小黄毛',
      description: '是时候表演真正的技术了。',
      region: '艾泽拉斯'
    },
    {
      id: 37658,
      name: '维恩',
      image: '/static/vn.jpg',
      alias: '暗夜猎手',
      description: '猎杀一切。',
      region: '艾欧尼亚'
    },
    {
      id: 2346576,
      name: '亚索',
      image: '/static/yasuo.jpeg',
      alias: '疾风剑豪',
      description: '蠢货是无药可治的。',
      region: '艾欧尼亚'
    }
  ],
  current_chat: [
    {
      id: 1665646423,
      name: '提莫',
      image: '/static/timo.jpg',
      alias: '小可爱',
      description: '嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
      region: '班德尔城',
      messages: [
        {
          content: '嘿嘿嘿嘿嘿嘿嘿嘿',
          date: '02:30',
          self: false
        },
        {
          content: '团战可以输，提莫必须死。',
          date: '02:31',
          self: true
        },
        {
          content: '我去前面探探路。',
          date: '02:33',
          self: false
        },
        {
          content: '蹦蹦跳跳。',
          date: '02:34',
          self: true
        }
      ]
    },
    {
      id: 37658,
      name: '维恩',
      image: '/static/vn.jpg',
      alias: '暗夜猎手',
      description: '猎杀一切。',
      region: '艾欧尼亚',
      messages: [
        {
          content: '想攻击我吗？',
          date: '09:30',
          self: false
        },
        {
          content: '先试试和影子玩拳击吧。',
          date: '09:31',
          self: false
        },
        {
          content: 'Test.',
          date: '09:33',
          self: true
        }
      ]
    },
    {
      id: 45312321,
      name: '泰隆',
      image: '/static/tailong.jpg',
      alias: '刀锋之影',
      description: '刀下生，刀下死。',
      region: '诺克萨斯',
      messages: [
        {
          content: '受死吧。',
          date: '09:30',
          self: false
        },
        {
          content: 'Test.',
          date: '09:31',
          self: true
        }
      ]
    }
  ],
  official_accounts: [
    {
      id: 1,
      name: '财经网',
      image: '/static/officon_1.jpg',
      pushTime: '周五',
      articles: [
        {
          id: 1,
          author: '财经',
          title: '月薪3万的白领与扫地阿姨，谁是真正的中产？',
          image: '/static/news.jpg',
          content: '根据2016年的数据显示，上海平均工资6378元（税前）,月入3万可是月平均工资的4.7倍，基本属于上海前3.5%的高收入人群。而普通的扫地阿姨的工资是很难达到平均工资水平的，仅凭个人努力是够不到中产的光鲜亮丽生活的。如果，这位扫地阿姨家在上海有四套房呢？结果就完全不一样了。'
        }
      ]
    },
    {
      id: 2,
      name: 'Lens杂志',
      image: '/static/officon_2.jpg',
      pushTime: '周五',
      articles: [
        {
          id: 1,
          author: '莎莎',
          title: '当我们意识到父亲并非无所不能时...|成长是一部隐瞒史',
          image: '/static/lens_1.jpg',
          content: '隐瞒是成长的一部分。当你学会先关上房门再掉眼泪时，你在尝试一个人消化挫折。有时候，让人感叹的一夜长大，背后是无数次的隐瞒。那代表了无数次你尝试着自己面对世界。'
        },
        {
          id: 2,
          author: 'Lens',
          title: '法鲨：我把工作当事儿，但不太把自己当事儿~',
          image: '/static/lens_2.jpg',
          content: '“我跟自己相处起来挺有问题，另一个我总是抢戏。”一人分饰两角的法鲨（迈克尔·法斯宾德 Michael Fassbender）在宣传《异形·契约》时这样说道。如果说异形的骇人在于感官，那法鲨饰演的生化人大卫则负责给观众的思维上覆上寒冰。'
        }
      ]
    },
    {
      id: 3,
      name: '南方人物周刊',
      image: '/static/officon_3.jpg',
      pushTime: '周五',
      articles: [
        {
          id: 1,
          author: '南人',
          title: '张艺谋在一部观念演出里，思考2047年人往何处去|现场',
          image: '/static/news3.jpg',
          content: '“我跟自己相处起来挺有问题，另一个我总是抢戏。”一人分饰两角的法鲨（迈克尔·法斯宾德 Michael Fassbender）在宣传《异形·契约》时这样说道。如果说异形的骇人在于感官，那法鲨饰演的生化人大卫则负责给观众的思维上覆上寒冰。'
        }
      ]
    },
    {
      id: 4,
      name: '大象公会',
      image: '/static/officon_4.jpg',
      pushTime: '周五',
      articles: [
        {
          id: 1,
          author: '大象',
          title: '自由跳槽的年代，什么样的企业最有吸引力|各色人类研究中心',
          image: '/static/news2.jpg',
          content: '无边界意味着主动变换择业领域与就业机构的自由。无边界职业世界和传统职业世界的区别，不亚于一颗石头和一个生命体之间的差距。人员、信息、资源、构想就像血液和氧气一样，自由地穿透组织和部门之间的界限。'
        }
      ]
    }
  ],
  chatSelected: 2,
  selectedAccount: 0,
  selectedArticle: 0,
  selectTab: 'session',
  selectedContact: 0,
  searchKey: ''
}

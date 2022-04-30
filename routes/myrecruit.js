var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/showAllRecruit', function(req, res, next) {
  console.log(req.body)
  if(req.body.number){
    var number=req.body.number
  }
  else{
    var number=99
  }
  var res1=[
    {title:'字节跳动商业化战略分析实习',company:'字节跳动1',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:'',affairId:1},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动2',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动3',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动4',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动5',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动6',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动7',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动8',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动9',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动10',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动11',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动12',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动13',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动14',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动15',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动1+',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动17',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动18',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动19',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动20',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动21',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动22',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动23',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动24',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动25',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动26',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动27',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动28',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动29',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''},
    {title:'字节跳动商业化战略分析实习',company:'字节跳动30',position:'武汉光谷',time:"2022年3月17日",tap:"实习",companyIcon:''}
  ]
  res.send({content:res1.slice(0,number),totalNum:res1.length})
});

router.post('/showSpeRecruit', function(req, res, next) {
  var content={
    title:'字节跳动商业化战略分析实习',
    company:'字节跳动30',
    position:'武汉光谷',
    time:"2022年3月17日",
    tap:"实习",companyIcon:'https://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&dyTabStr=MCwxLDMsMiw2LDQsNSw3LDgsOQ%3D%3D&word=%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8',
    content:`【职位描述】
    1、支持字节跳动全系产品（包括今日头条、西瓜视频、抖音等）的商业化战略和大客户策略；
    2、移动互联网行业广告产品和广告市场深度研究、行业跟踪及竞品研究等；
    3、掌握战略投资研究初步框架和互联网产品商业化思路。
    【职位要求】
    1、国内外本科及以上学历，每周实习4天以上，最好可以全职，实习期4-6个月，4月初到岗
    2、较强的分析能力与快速学习能力，细致认真，能承受工作压力；
    3、良好的笔记速记和随会整理输出能力，逻辑能力强，对数字敏感；
    4、有咨询、投资机构、FA/投行、券商研究所实习经历优先
    5、对游戏感兴趣或者有深度见解加分
    【投递通道】
    简历请命名为：姓名-学校-年级-可入职的日期-持续几个月-每周几天；`
  }
  var company={
    companyIcon:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.taoguba.com.cn%2Fimg%2F2020%2F04%2F16%2F3pvuo4l5xpsh.jpg_max.png&refer=http%3A%2F%2Fimage.taoguba.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653563840&t=c7e69b5e3ac85ab79285114880478dff',
    companyDes:`北京字节跳动科技有限公司，成立于2012年3月，是最早将人工智能应用于移动互联网场景的科技企业之一，是中国北京的一家信息科技公司，地址位于北京市海淀区知春路甲48号 [1]  。公司以建设“全球创作与交流平台”为愿景 [2]  。字节跳动的全球化布局始于2015年 [3]  ，“技术出海”是字节跳动全球化发展的核心战略 [4]  ，其旗下产品有今日头条、西瓜视频、抖音、头条百科、皮皮虾、懂车帝、悟空问答等。`,
    companyAttach:'023-55792018'
  }
  res.send({content:content,company:company})
});

module.exports = router;

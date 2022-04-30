headerTemp=(function(){
    var header={
        data(){
        return{
        }
    },
        methods:{
    },
        props:[],
        template:     
        `<div id="header" class="container-fluid">
            <img id="logo" src="" alt="">
            <div>首页</div>
            <div class="dropdown">
                <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  元宇宙实习
                </div>            
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="http://localhost:3002/internship/internships.html">实习列表</a></li>
                </ul>
            </div>
            <div onclick="window.location='http://localhost:3002/activity/activity.html';">金领活动</div>
            <div class="dropdown">
                <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  招聘内推
                </div>            
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="http://localhost:3002/recruit/recruit.html">招聘信息</a></li>
                  <li><a class="dropdown-item" href="http://localhost:3002/recruit/recommend.html">内推渠道</a></li>
                </ul>
            </div>
            <div onclick="window.location='http://localhost:3002/instruct/instruct.html';">职前培训</div>
            <div>商务合作</div>
            <div onclick="window.location='http://localhost:3002/userSetting/userSetting.html';" id="head_img"><img src="" alt="" /></div>
            <div style="margin-right:0px;font-weight: normal;font-size: small;">用户名</div>
        </div>`
    }
    return header
})()
//顶部选区模板
footerTemp=(function(){
    var footer={
        data(){
        return{
        }
    },
        methods:{
    },
        props:[],
        template:     
        '<div id="footer">\
            <div id="com_intro">金领工厂®是专注于赋能于人，服务于企业的垂直职场平台。从2019年起，金领工厂️已经为数十万名初入职场人士提供了多元工作体验，帮助他/她们更好了解业务，更快提升能力。</div>\
            <div style="display:flex;justify-content:center;"><img src="" alt="" class="QRcode"/><img src="" alt="" class="QRcode"/></div>\
            <div id="copyright">©2017-2022  | 金领工厂®️ 沪ICP备17050525号-3</div>\
         </div>'
    }
    return footer
})()
//页脚模块
// searchBoxTemp=(function(){
//     var box={
//         data(){
//         return{
//         }
//     },
//         methods:{
//     },
//         props:['modelValue0','modelValue1'],
//         template:     
//         `<div id="setSort">
//             <input type="text" placeholder="  关键词" :value="modelValue0" @input="$emit('update:modelValue0', $event.target.value)"> 
//             <input type="text" placeholder="  位置"  :value="modelValue1" @input="$emit('update:modelValue1', $event.target.value)">
//             <button @click="$emit('recruitsorter')">搜索</button>
//         </div>`
//     }
//     return box
// })()

affairTemp=(function(){
    var affair={
        data(){
        return{
        }
    },
        methods:{
    },
        props:['affairs','gospeaffair'],
        template:     
        `<div id="affairBox">
        <div v-for="affair in affairs" @click="$emit('gospeaffair',affair.affairId)" class="row">
            <div class="col-6" style="display: flex;align-items: center;">
                <div><img :src="affair.companyIcon" alt=""></div>
                <div>
                    <div style="font-size:medium;color: black;">{{affair.title}}</div>
                    <div>{{affair.company}}</div>
                </div>
            </div>
            <div class="col-3">
                {{affair.position}}
            </div>
            <div class="col-3" style="display: flex;flex-direction: column;align-items: center;">
                <div class="tap">{{affair.tap}}</div>
                <div>{{affair.time}}</div>
            </div>
        </div>
        </div>`
    }
    return affair
})()
//主页内容渲染模块
pageTemp=(function(){
    var page={
        data(){
        return{
        }
    },
        methods:{
    },
        props:['pages','changepage'],
        template:     
        `<div id="changePageBox">
        
        <a href="#" class="changePage"  v-for="i in pages" @click="$emit('changepage',i)">
            {{i}}
        </a>
        
        </div>`
    }
    return page
})()
/* <a href="#" class="changePageF">上一页</a>
<a href="#" class="changePageF">下一页</a> */
// 翻页模块

speContentTemp=(function(){
    var content={
        data(){
        return{
        }
    },
        methods:{
    },
        props:['speaffair','company'],
        template:     
        `<div id="speaffairBox">
        <!-- 实习介绍 -->
        <div>
            <h2>{{speaffair.title}}</h2>
            <div id="titleBox" style="display: flex;align-items: center;font-size: small;color: #888;">
                <div class="tap">{{speaffair.tap}}</div>
                <div>{{speaffair.position}}</div>
                <div>{{speaffair.time}}</div>
                <div>{{speaffair.worktime}}</div>
                <div>{{speaffair.salary}}</div>
            </div>
            <div id="speContents">
                <div id="speContent">
                    {{speaffair.content}}
                </div>
                <!-- 公司介绍 -->
                <div id="companyBox">
                    <div style="border-top-left-radius:10px;border-top-right-radius:10px;background-color: black;padding: 5%;display: flex;justify-content: center;margin: 0;"><img :src="company.companyIcon" alt=""></div>
                    <div style="font-weight: bold;">公司简介</div>
                    <div>{{company.companyDes}}</div>
                    <div style="font-weight: bold;">公司标签</div>
                    <div style="color: #888;">互联网 | 大数据</div>
                </div>
            </div>
        </div>
        </div>`
    }
    return content
})()
// 具体内容模块
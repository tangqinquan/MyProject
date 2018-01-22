/**
 * Created by QQ on 2018/1/3.
 */

//声明
var app11111=new Vue({
        //绑定 DOM 元素
        el:'#app1',
        data:{
            message:"hello world",
            list:[
                {name:'lvxueyuan',age:15},
                {name:'xueyuan',age:15},
                {name:'yuan',age:15},
                {name:'lv',age:15},
                {name:'lvxue',age:15}
            ],
            ok:1
        }
    });

var app2=new Vue({
    //绑定 DOM 元素
    el:'#app2',
    data:{
        message:"hello world",
        abc:[
            {name:'abc-lvxueyuan',age:15},
            {name:'abc-xueyuan',age:15},
            {name:'abc-yuan',age:15},
            {name:'abc-lv',age:15},
            {name:'abc-lvxue',age:15}
        ],
        methods:{
            add:function(){
                this.age++;
            }
        },
        ok:1
    }
});

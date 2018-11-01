

var people = ['bragg','troy','syy','jack','nicolas'];

var loginapp = new Vue({
    el: '#loginapp',
    data: Object.assign(initdata,{
        user: {
            name: '',
            phone: ''
        },
        people: people
    }),
    methods: {
        showEl: function () {
            console.log(this.name);
        },

        // 传入一个方法fn,在time毫秒内不再被调用到，闭包
        getInter: function (fn,time) {
            var t1 = new Date().getTime();
            var t2;
            function dofn() {
                if(!t2){
                    t2 = new Date().getTime();
                    return fn;
                }else{
                    t2 = new Date().getTime();
                    if(t2 - t1 >= time){
                        t1 = new Date().getTime();
                        return fn;
                    }else{
                        return function () {
                            console.log('fn is prohibited!');
                        }
                    }
                }
            }
            return dofn;
        },
        //
        userSub: function () {
            console.log(this.user);

            return false;
        },
        pfilter: function (arr) {
            if(Object.prototype.toString.call(arr).match("Array")){
                return arr.filter(function (t) {
                    return t.indexOf("a") >= 0;
                });
            }
            return [];
        },
        ajaxs: function () {
            let a, b, c;

            function fna() {
                return new Promise(function (resolve, reject) {
                    // 异步操作
                    setTimeout(function () {
                        a = 5;
                        resolve(a);
                    },100);
                });
            }
            function fnb(data) {
                return new Promise((resolve, reject) => {
                    // 异步操作
                    setTimeout(function () {
                        b = 8;
                        console.log(data);
                        resolve(b);
                    },100);
                });
            }
            function fnc(data) {
                return new Promise(function (resolve, reject) {
                    // 异步操作
                    setTimeout(function () {
                        c = 3;
                        console.log(data);
                        resolve(c);
                    },100);
                });
            }

            fna().then(function (data) {
                return fnb(data)
            }).then(function (data) {
                return fnc(data)
            }).then(function(data){
                console.log(data);
            });

        },
    },
    filters: {
        pfilter: function (item) {
            if(item.indexOf("a") >= 0){
                return item;
            }else{
                return "no 'a' ";
            }
        }
    },
    beforeCreate: function () {
        console.log(this.name);
    },
    created: function () {
        this.showEl();
    },
    beforeMount: function () {
        console.log(this.name);
    },
    mounted: function () {
        console.log(this.name);
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
//        beforeUpdate: function () {
//            console.log(this.name);
//        },
//        updated: function () {
//            console.log(this.name);
//        },
    beforeDestroy: function () {
        console.log('beforeDestroy  '+this.name);
    },
    destroyed: function () {
        console.log('destroyed  '+this.name);
    },
    // 数据更新时调用,监听数据变化
    watch: {
        'name': function () {
            console.log('this.name变化了');
        }
    }

});
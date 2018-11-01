// 基础数据，全局通用
const initdata = {
    webname: '动永网络',
    logo: '',
    name: 'Bragg Troy Nicolas Chen',
    copy: '2018 上海动永前端开发 @ All Rights reserved',
};


/*
* ************** 自定义模板组件 ****************
*/

// 顶部菜单导航模板
Vue.component("web-header", {
    data: function () {
        return initdata;
    },
    template: '<div class="header">' +
    '        <nav class="navbar navbar-default navbar-inverse">' +
    '            <div class="container-fluid">' +
    '                <div class="navbar-header">' +
    '                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
    '                        <span class="sr-only">Toggle navigation</span>' +
    '                        <span class="icon-bar"></span>' +
    '                        <span class="icon-bar"></span>' +
    '                        <span class="icon-bar"></span>' +
    '                    </button>' +
    '                    <a class="navbar-brand" href="#">{{webname}}</a>' +
    '                </div>' +
    '                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
    '                    <ul class="nav navbar-nav">' +
    '                        <li class="active"><a href="#">首页</a></li>' +
    '                        <li><a href="#">JavaScript</a></li>' +
    '                        <li><a href="#">angular.js 1</a></li>' +
    '                        <li><a href="#">vue.js 2</a></li>' +
    '                        <li><a href="#">bootstrap.js</a></li>' +
    '                        <li class="dropdown">' +
    '                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">常用插件<span class="caret"></span></a>' +
    '                            <ul class="dropdown-menu">' +
    '                                <li><a href="#">select2.js</a></li>' +
    '                                <li><a href="#">datetimepicker</a></li>' +
    '                                <li><a href="#">validform</a></li>' +
    '                                <li role="separator" class="divider"></li>' +
    '                                <li><a href="#">其他</a></li>' +
    '                            </ul>' +
    '                        </li>' +
    '                    </ul>' +
    '                    <ul class="nav navbar-nav navbar-right">' +
    '                        <li class="dropdown">' +
    '                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{name}}<span class="caret"></span></a>' +
    '                            <ul class="dropdown-menu">' +
    '                                <li><a href="#">个人中心</a></li>' +
    '                                <li role="separator" class="divider"></li>' +
    '                                <li><a href="#">退出</a></li>' +
    '                            </ul>' +
    '                        </li>' +
    '                    </ul>' +
    '                </div>' +
    '            </div>' +
    '        </nav>' +
    '    </div>'
});


// 底部模板
Vue.component('web-footer', {
    data: function () {
        return initdata;
    },
    template: '<div class="footer text-center clearfix" v-footerposition><div class="clearfix"></div><p>{{name}}</p><p>{{copy}}</p></div>',
});



/*
* ************** 自定义指令 ****************
*/

// 底部模板组件插入到dom之后定位
Vue.directive('footerposition', {
    inserted: function (el) {
        var bl = $(window).height() - $(".header").outerHeight() - 20 - $(".container").outerHeight() - $(".footer").outerHeight() - 50;
        if(bl > 0){
            $(el).addClass("fixed-bottom");
        }
    }
});
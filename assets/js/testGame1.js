$(function () {

});

var app = new Vue({
    data: {
        cols: 20,
        rows: 30,
    },
    computed: {
        tableWidth: function(){return 20 * this.cols},
        tableHeight: function(){return 20 * this.rows}
    },
    methods: {
        initTable: function () {
            // $(".bg-table").css('width',$scope.tableWidth+'px');
        }
    }
});

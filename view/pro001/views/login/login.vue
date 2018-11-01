<template>
<div class="container" id="loginapp">
    <div class="form-horizontal login-form">
        <div class="col-sm-6 col-xs-12 col-sm-offset-3">
            <div class="form-group">
                <label class="control-label col-sm-4">姓名：</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="user.name" placeholder="" required>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-4">手机号：</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="user.phone"  placeholder="">
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-sm-6 col-xs-12 col-sm-offset-3 text-center">
            <div class="col-sm-offset-4">
                <button class="btn btn-primary" @click="userSub();">登录</button>
            </div>
        </div>
    </div>
</div>
</template>
<!--<script src="../../../../assets/js/pro001/login.js"></script>-->

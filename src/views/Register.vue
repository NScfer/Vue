<script setup>
import {ElMessage} from "element-plus";
import {reactive, ref} from "vue";
import {getCaptcha} from '@/utils/Captcha.js'

const form = reactive({
	email: '',
	username: '',
	password: '',
	repassword: '',
	captcha: ''
})


const code = reactive(getCaptcha(6))

const validateRepassword = (rule, value, callback) => {
	if (value !== form.password.value) {
		callback(new Error('两次输入的密码不一致，请检查后再试'))
	}else {
		callback()
	}
}

const validateCaptcha = () => {

}

const formRule = {
	email: [
		{
			required: true,
			message: '邮箱不能为空',
			trigger: 'blur'
		},
		{
			type: 'email',
			message: '请输入正确的邮箱(xxxx@yy-yy.zzz)',
			trigger: 'blur'
		}
	],
	username: [
		{
			required: true,
			message: '用户名不能为空',
			trigger: 'blur'
		}
	],
	password: [
		{
			required: true,
			message: '密码不能为空',
			trigger: 'blur'
		}
	],
	repassword: [
		{
			required: true,
			message: '请重新输入您的密码',
			trigger: 'blur'
		},
		{
			validator: validateRepassword,
			trigger: 'blur'
		}
	],
	captcha: [
		{
			required: true,
			message: '验证码不能为空',
			trigger: 'blur'
		},
		{
			validator: validateCaptcha,
			trigger: 'blur'
		}
	]

}

const formRef = ref(form)

const register = () => {
	// formRef.value.validate((valid) => {
	// 	if (valid) {
	// 		// success Code 
	// 		ElMessage.success("验证成功，联系管理员")
	// 	}else {
	// 		//error Code
	// 		ElMessage.error("验证失败，请确认输入的内容是否符合格式")
	// 	}
	// })
	console.log(form[1])

}
</script>

<template>
	<div class="register-box">
		<div class="container">
			<span class="title">注册</span>
			<p style="color: #a5a5a5">注册用户，畅享系统</p>

<!--			<el-dialog v-model="dialogVisible" title="请验证后注册" width="500">-->
<!--				-->
<!--			</el-dialog>-->
			<div class="form">
				<el-form
				label-position="left"
				label-width="20%"
				status-icon
				:model="form"
				:rules="formRule"
				ref="formRef">

					<el-form-item label="邮箱" prop="email">
						<el-input placeholder="请输入邮箱" v-model="form.email"></el-input>
					</el-form-item>
					<el-form-item label="用户名" prop="username">
						<el-input placeholder="请输入用户名" v-model="form.username"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input show-password type="password" placeholder="请输入密码" v-model="form.password"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="repassword">
						<el-input show-password type="password" placeholder="请在此输入密码" v-model="form.repassword"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="captcha">
						<el-input placeholder="请输入验证码" v-model="form.captcha">
							<template #append>
								<el-button disabled>{{ code }}</el-button>
							</template>
						</el-input>
					</el-form-item>
					<div style="padding-top: 2em">
						<el-button style="width: 100%" plain type="warning" @click="register">注册</el-button>
						<el-divider>
							<span style="color: #a5a5a5">已有账户？<router-link to="/auth/login" class="router-link-active">前往登录</router-link></span>
						</el-divider>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<style scoped>

.register-box {
	background: url("../assets/img/background-register.jpg") no-repeat fixed;
	background-size: cover;
	width: 100vw;
	height: 100vh;
}

.container {
	width: 30%;
	height: 80%;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 0 3px #f0f0f0,
	0 0 6px #f0f0f0;
	opacity: 60%;
	padding: 2em 0;
}


.title {
	font-size: 24px;
	font-family: 宋体, serif;
	font-weight: bold;
}

.form {
	padding: 3em 1.5em;
}

.router-link-active {
	text-decoration: none;
	color: #20a57a;
}

</style>
<template>
	<div class="body">
		<el-row>
			<el-col :span="16">
				<div class="index-1"></div>
			</el-col>
			<el-col :span="8">
				<div class="index-2">
					<h2 style="margin-top: 26%;">登录</h2>
					<span>登录用户，进入系统!</span>
					<div class="form-box">
						<el-form
								:model="form"
								:rules="formRule"
								ref="formRef"
								status-icon
								hide-required-asterisk
								label-position="left"
								label-width="15%">
							<el-form-item label="用户名" prop="username">
								<el-input placeholder="请输入用户名" v-model="form.username" :prefix-icon="User"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="password">
								<el-input placeholder="请输入密码" show-password :prefix-icon="Lock" v-model="form.password"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="captcha">
									<el-input v-model="form.captcha" :prefix-icon="Checked" placeholder="请输入验证码">
										<template #append><el-button disabled>{{ code }}</el-button></template>
									</el-input>

							</el-form-item>
							<el-form-item>
								<el-button class="login-button" type="success" round @click="login">
									<span style="color: yellow">登录</span>
								</el-button>
							</el-form-item>
						</el-form>
						<el-divider><span>没有账号?<router-link class="router-link-active" to="/auth/register">点击注册</router-link></span></el-divider>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped>
.body {
	width: 100vw;
	height: 100vh;
}

.index-1 {
	background: url("../assets/img/background-login.jpg") no-repeat;
	background-size: cover;
	height: 100vh;
	z-index: 1;
}

.index-2 {
	font-family: 楷体,serif;
}

.index-2 span {
	font-size: 16px;
	color: #a5a5a5
}

.form-box {
	margin: 50px 30px;
}

.login-button {
	margin-top: 10%;
	width: 100%;
}

.router-link-active {
	text-decoration: none;
	color: #20a57a;
}

</style>

<script setup>
	import {User, Lock, Checked} from '@element-plus/icons-vue';
	import {ElMessage} from "element-plus";
	import {getCaptcha} from "@/utils/Captcha";
	import {reactive, ref} from "vue";

	// const refreshCaptcha = () => {
	// 	alert("Hello.")
	// }

	const code = getCaptcha(6);

	const form = reactive({
		username: '',
		password: '',
		captcha: ''
	})

	const validateCaptcha = (rule, value, callback) => {
		if (value !== code) {
			callback(new Error('验证码不正确'));
		}else {
			callback();
		}
	};
	const formRule ={
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
		captcha: [
			{
				required: true,
				message: '验证码不能为空',
				trigger: 'blur'
			},{
				validator: validateCaptcha,
				trigger: 'blur'
			}
		]
	}


	const formRef = ref(form)

	const login = () => {
		formRef.value.validate((valid) => {
			if (valid) {
				ElMessage.success("1")
			}else {
				ElMessage.error("0")
			}
		})
	}


</script>
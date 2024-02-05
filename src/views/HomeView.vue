<template>
  <div>
<!--	<router-link to="/auth/login"><el-button type="success">登录</el-button></router-link>-->
<!--	<router-link to="/auth/register"><el-button type="warning">注册</el-button></router-link>-->
	  <el-menu
			  :default-active="activeIndex"
			  class="el-menu-demo"
			  mode="horizontal"
			  :ellipsis="false"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b"
			  @select="handleSelect"
	  >
		  <el-menu-item index="0">
			  <img
					  style="width: 30px"
					  src="../assets/web-icon.svg"
					  alt="Element logo"
			  />
		  </el-menu-item>
		  <div class="flex-grow" />
		  <el-sub-menu index="2">
			  <template #title>用户操作</template>
			  <router-link to="/auth/login"><el-menu-item index="2-1">登录</el-menu-item></router-link>
			  <router-link to="/auth/register"><el-menu-item index="2-2">注册</el-menu-item></router-link>
		  </el-sub-menu>
	  </el-menu>
  </div>

	<div>
		<el-button plain @click="dialogVisible = true">
			Click to open the Dialog
		</el-button>

		<el-dialog
				v-model="dialogVisible"
				title="Tips"
				width="500"
				:before-close="handleClose"
		>
			<span>This is a message</span>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="dialogVisible = false">
						Confirm
					</el-button>
				</div>
			</template>
		</el-dialog>
	</div>

</template>

<script setup>
import {ElMessageBox} from "element-plus";
import {ref} from "vue";

const dialogVisible = ref(false)

const handleClose = (done) => {
	alert('Hi')
}


</script>

<style>
.home {
	margin-top: 50px;
}

.flex-grow {
	flex-grow: 1;
}

.router-link-active {
	color: yellow;
}
</style>
<template>
  <div class="login">
    <van-form @submit="onClickSubmit">
      <van-cell-group inset>
        <van-field
            v-model="phone"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
            v-model="keycode"
            type="password"
            name="验证码"
            label="验证码"
            placeholder="验证码"
            :rules="[{ required: true, message: '请填验证码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {
  Form, Field, CellGroup, Toast, Button
} from 'vant';

export default {
  name: "login",
  components: {
    [CellGroup.name]: CellGroup,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {
      phone: '',
      keycode: '',
    };
  },

  methods: {
    onClickSubmit() {
      Toast('点击结算');
      if (this.keycode && this.phone) {
        console.log(this.keycode, this.phone);
      }
    }
  }

};

</script>

<style scoped lang="less">

</style>
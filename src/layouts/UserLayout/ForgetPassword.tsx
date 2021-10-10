/**********************************************************************
 *
 * @模块名称: ForgetPassword
 *
 * @模块用途: ForgetPassword
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 12:34
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import Register from "@/layouts/UserLayout/components/Register";

const ForgetPassword: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Register leftImage={`./assets/forgetPassword.png`} title={`忘记密码`} description={`请按照提示设置新密码`}/>
		</React.Fragment>
	)
};

export default ForgetPassword;

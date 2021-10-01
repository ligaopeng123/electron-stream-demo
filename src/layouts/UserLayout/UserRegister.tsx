/**********************************************************************
 *
 * @模块名称: UserRegister
 *
 * @模块用途: UserRegister
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 12:33
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import Register from "@/layouts/UserLayout/components/Register";

const UserRegister: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Register leftImage={`/assets/register.png`} title={`注册账号`} description={`请按照提示填写注册信息`}/>
		</React.Fragment>
	)
}

export default UserRegister;

/**********************************************************************
 *
 * @模块名称: HeaderTitle
 *
 * @模块用途: HeaderTitle
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 11:26
 *
 **********************************************************************/
import React from 'react';
import Manipulate from "@/layouts/RightLayout/Manipulate";
import './styles.less'

const HeaderTitle: React.FC<any> = (props: any) => {
	return (
		<div className={`login-header-title`}>
			<img src={'/assets/login_title.png'}/>
			<Manipulate min={false} screen={false}/>
		</div>
	)
};

export default HeaderTitle;

/**********************************************************************
 *
 * @模块名称: TabTitle
 *
 * @模块用途: TabTitle
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 19:52
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './TabTitle.module.less';

import basic from '../../../assets/personalCenter/basic.png';
import changePassword from '../../../assets/personalCenter/changePassword.png';
import mySettings from '../../../assets/personalCenter/mySettings.png';
import myCollection from '../../../assets/personalCenter/myCollection.png';
import watchHistory from '../../../assets/personalCenter/watchHistory.png';
import aboutUs from '../../../assets/personalCenter/aboutUs.png';

const IMGS = {
	basic,
	changePassword,
	mySettings,
	myCollection,
	watchHistory,
	aboutUs,
}

type TabTitleProps = {
	icon: 'basic' | 'changePassword' | 'mySettings'
		| 'myCollection' | 'watchHistory' | 'aboutUs';
	title?: string;
};
const TabTitle: React.FC<TabTitleProps> = (props) => {
	return (
		<div>
			<img width={64} src={IMGS[props.icon]}/>
			<span>{props.title}</span>
		</div>
	)
};

export default TabTitle;

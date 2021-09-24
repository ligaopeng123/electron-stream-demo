/**
 * @函数名称：RightLayout
 * @param
 * @作用：右边的布局
 * @return：obj
 * @date 2020/9/7
 */

import React from 'react';
import {Settings as ProSettings} from '@ant-design/pro-layout';
import {QuestionCircleOutlined} from '@ant-design/icons';
import styles from './index.module.less';
import UserDropdown from '../HeaderDropdown/user';
import HeaderNaticeInterface from '../HeaderNotice/interface';
import HeaderSearchInterface from '../HeaderSearch/interface';
import Vpi from "@/layouts/RightLayout/Vpi";


export interface GlobalHeaderRightProps extends Partial<any>, Partial<ProSettings> {
	theme?: ProSettings['navTheme'] | 'realDark';
}

const RightLayout: React.SFC<GlobalHeaderRightProps> = (props) => {
	const {theme, layout} = props;
	let className = styles.right;
	
	if (theme === 'dark' && layout === 'top') {
		className = `${styles.right}  ${styles.dark}`;
	}
	
	return (
		<div className={className}>
			<UserDropdown/>
			<Vpi/>
			{/*<HeaderSearchInterface/>*/}
			<HeaderNaticeInterface/>
		</div>
	);
};

export default RightLayout;

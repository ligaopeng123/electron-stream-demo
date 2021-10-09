/**********************************************************************
 *
 * @模块名称: ColTitles
 *
 * @模块用途: ColTitles
 *
 * @创建人: pgli
 *
 * @date: 2021/10/7 17:17
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './ColTitles.module.less';

const ColTitles: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<div style={props.style} className={styles.title}>{props.children}</div>
		</React.Fragment>
	)
};

export default ColTitles;

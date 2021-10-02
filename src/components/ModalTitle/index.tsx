/**********************************************************************
 *
 * @模块名称: ModalTitle
 *
 * @模块用途: ModalTitle
 *
 * @创建人: pgli
 *
 * @date: 2021/10/2 13:52
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from "./styles.module.less";

const ModalTitle: React.FC<any> = (props: any) => {
	return (
		<div className={styles.title}>
			<div className={styles.text}>{props.children}</div>
		</div>
	)
};

export default ModalTitle;

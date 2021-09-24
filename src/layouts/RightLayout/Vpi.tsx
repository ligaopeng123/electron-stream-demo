/**********************************************************************
 *
 * @模块名称: Vpi
 *
 * @模块用途: Vpi
 *
 * @创建人: pgli
 *
 * @date: 2021/9/24 20:20
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import vpi from '../../assets/vip/vip.png';
import styles from './index.module.less';

const Vpi: React.FC<any> = (props: any) => {
	return (
		<div className={styles.vip}>
			<img className={styles.img} src={vpi} />
			<div className={styles.span}>VIP</div>
		</div>
	)
}

export default Vpi;

/**********************************************************************
 *
 * @模块名称: manipulate
 *
 * @模块用途: manipulate
 *
 * @创建人: pgli
 *
 * @date: 2021/9/25 14:21
 *
 **********************************************************************/
// @ts-nocheck
import React, {useState, useEffect} from 'react';
import closeIcon from '../../assets/manipulate/close.svg';
import screenIcon from '../../assets/manipulate/screen.svg';
import minIcon from '../../assets/manipulate/min.svg';
import styles from './index.module.less';
// @ts-ignore
let ipcRenderer;
if (window?.require) {
	const electron = window?.require("electron");
	ipcRenderer = electron.ipcRenderer;
}
type ManipulateProps = {
	min?: boolean,
	screen?: boolean,
	close?: boolean,
}
const Manipulate: React.FC<ManipulateProps> = (props) => {
	const min = () => {
		ipcRenderer?.send('window-min');
	};
	const screen = () => {
		ipcRenderer?.send('window-max');
	};
	const close = () => {
		ipcRenderer?.send('window-close');
	};
	return (
		<div className={styles.manipulate}>
			{
				props.min !== false ? <img onClick={min} className={styles.icon} src={minIcon}/> : null
			}
			{
				props.screen !== false ? <img onClick={screen} className={styles.icon} src={screenIcon}/> : null
			}
			{
				props.close !== false ? <img onClick={close} className={styles.icon} src={closeIcon}/> : null
			}
		</div>
	)
};

export default Manipulate;

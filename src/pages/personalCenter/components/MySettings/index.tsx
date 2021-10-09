/**********************************************************************
 *
 * @模块名称: MySettings
 *
 * @模块用途: MySettings  我的设置
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 23:03
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './index.module.less';
import {Button, Checkbox, Input, Upload} from 'antd';

type MySettingsProps = {};
const MySettings: React.FC<MySettingsProps> = (props) => {
	return (
		<div className={styles.module}>
			<div className={styles.card}>
				<div className={styles.label}>升级:</div>
				<div className={styles.content}>
					<Checkbox>升级方式</Checkbox>
					<div className={styles.item}>有新版时，自动下载安装</div>
					<div className={styles.item}>提醒升级</div>
					<div className={styles.item}>有新版时，提醒我下载安装</div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.label}>常规:</div>
				<div className={styles.content}>
					<Checkbox>开机自动启动</Checkbox>
					<div className={styles.item}>文件存放路径：</div>
					<div className={styles.item} style={{display: 'flex'}}>
						<Input className={styles.input}/>
						<Upload>
							<Button className={styles.bth}>更改目录</Button>
						</Upload>
					</div>
				
				</div>
			</div>
		</div>
	)
};

export default MySettings;

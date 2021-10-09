/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 20:38
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import user from '../../../../assets/personalCenter/baseInfo/user.png';
import {Button, Input, Tabs} from "antd";
import styles from './index.module.less';
import PersonalInfo from "@pages/personalCenter/components/BasicInfo/PersonalInfo";
import AuthCode from "@pages/personalCenter/components/BasicInfo/AuthCode";

const {TabPane} = Tabs;

type BasicInfoProps = {};
type Status = 'personal' | 'authCode';
const BasicInfo: React.FC<BasicInfoProps> = (props) => {
	const [status, setStatus] = useState<Status>('personal');
	const onChange = (key: any) => {
		setStatus(key);
	};
	return (
		<React.Fragment>
			<div className={styles.bg}>
				<div className={styles.user}>
					<img width={64} src={user}/>
					<div className={styles.center}>
						<div className={styles.text}>普通用户</div>
						<div className={styles.info}>点亮 VIP 享更多优秀资源</div>
					</div>
					<div className={styles.bth}>获取激活码&gt;</div>
				</div>
				<div className={styles.auth}>
					<span className={styles.label}>填写授权码</span>
					<Input size={`large`} className={styles.input}/>
					<Button size={`large`} className={styles.getBth}>授权</Button>
				</div>
			</div>
			<div className={styles.cfg}>
				<div className={status === 'personal' ? styles.personal : styles.authCode}>
					<Tabs defaultActiveKey="1" onChange={onChange} centered>
						<TabPane tab="个人信息" key="personal">
							<PersonalInfo/>
						</TabPane>
						<TabPane tab="关于授权码" key="authCode">
							<AuthCode/>
						</TabPane>
					</Tabs>
				</div>
			</div>
		</React.Fragment>
	)
};

export default BasicInfo;

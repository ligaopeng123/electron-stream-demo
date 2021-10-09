/**********************************************************************
 *
 * @模块名称: PersonalInfo
 *
 * @模块用途: PersonalInfo
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 21:47
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './PersonalInfo.module.less';
import {Button, Col, Input, Row} from "antd";

import user2 from '../../../../assets/personalCenter/baseInfo/user2.png';

type PersonalInfoProps = {};
const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
	return (
		<React.Fragment>
			<Row className={styles.content} gutter={[16, 16]}>
				<Col span={4}>
					<img style={{width: '100%', height: 120}} src={user2}/>
					修改头像
				</Col>
				<Col span={20}>
					<Row>
						<Col span={10} className={styles.item}>
							姓名<Input size={`large`}/>
						</Col>
						<Col span={14}>
							手机号 <Input size={`large`}/>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							学校<Input style={{width: 'calc(100% - 64px)'}} size={`large`}/>
						</Col>
					</Row>
				</Col>
			</Row>
			<div style={{float: 'right', paddingRight: 40}}>
				<Button size={`large`} style={{marginRight: 24}}>修改手机号</Button>
				<Button size={`large`} type={`primary`}>修改信息</Button>
			</div>
		</React.Fragment>
	)
};

export default PersonalInfo;

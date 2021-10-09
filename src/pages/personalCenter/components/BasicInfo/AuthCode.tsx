/**********************************************************************
 *
 * @模块名称: AuthCode
 *
 * @模块用途: AuthCode  授权码
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 22:13
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './AuthCode.module.less';
import {Col, Row} from "antd";

import img from '../../../../assets/personalCenter/baseInfo/2.png';
import img2 from '../../../../assets/personalCenter/baseInfo/3.png';

type AuthCodeProps = {};
const AuthCode: React.FC<AuthCodeProps> = (props) => {
	return (
		<React.Fragment>
			<Row className={styles.content}>
				<Col span={14}>
					<div className={styles.a}>销售热线</div>
					<div className={styles.b}>XX 老师：138 3764 3849</div>
					<div className={styles.c}>
						<div>
							<img src={img}/>
						</div>
						<div style={{paddingLeft: 24}}>
							<div className={styles.d}>咨询客服</div>
							<div className={styles.e}>公众号：科米课堂教学平台</div>
							<div className={styles.f}>如需帮助，请扫码关注公众号，咨询在线客服</div>
						</div>
					</div>
				</Col>
				<Col span={10} style={{paddingLeft: 24}}>
					<div className={styles.g}>现在加入，最高享 俩台iPad以及科米课</div>
					<img src={img2}/>
				</Col>
			</Row>
		</React.Fragment>
	)
};

export default AuthCode;

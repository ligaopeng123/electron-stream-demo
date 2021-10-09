/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 22:28
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './index.module.less';
import {Button, Form, Input, Row} from "antd";

type ChangePasswordProps = {};
const ChangePassword: React.FC<ChangePasswordProps> = (props) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.title}>
					<span className={styles.smallTitle}>修改密码</span>
				</div>
			</div>
			<Form
				requiredMark={false}
				colon={false}
				size={`large`}
				name="basic"
				labelCol={{span: 8}}
				wrapperCol={{span: 8}}
				autoComplete="off"
			>
				<Form.Item
					label="手机号"
					name="username"
					rules={[{required: true, message: 'Please input your username!'}]}
				>
					<Input style={{width: 'calc(100% - 136px)'}}/>
					<Button style={{marginLeft: 24}} type={`primary`}>获取验证码</Button>
				</Form.Item>
				
				<Form.Item
					label="验证码"
					name="username"
					rules={[{required: true, message: 'Please input your username!'}]}
				>
					<Input/>
				</Form.Item>
				
				<Form.Item
					label="新密码"
					name="password"
					rules={[{required: true, message: 'Please input your password!'}]}
				>
					<Input.Password/>
				</Form.Item>
				
				<Form.Item
					label="确认密码"
					name="password"
					rules={[{required: true, message: 'Please input your password!'}]}
				>
					<Input.Password/>
				</Form.Item>
				
				<Form.Item wrapperCol={{offset: 11, span: 8}}>
					<Button type="primary" htmlType="submit">
						确定修改
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
};

export default ChangePassword;

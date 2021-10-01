/**********************************************************************
 *
 * @模块名称: PerfectInformation
 *
 * @模块用途: PerfectInformation 完善信息
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 16:34
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Input, Select, Form, Space} from "antd";
import styles from "../PersonalInformation.module.less";

const PerfectInformation: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Form
				preserve={false}
				name="BasicInformation"
				labelCol={{span: 9}}
				wrapperCol={{span: 18}}
				colon={false}
			>
				<Space style={{width: '60%'}}>
					<Form.Item label="选择科目" style={{width: 180}}>
						<Select>
							<Select.Option value={1}>男</Select.Option>
							<Select.Option value={2}>女</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item label="选择教材" style={{width: 180}}>
						<Select>
							<Select.Option value={1}>男</Select.Option>
							<Select.Option value={2}>女</Select.Option>
						</Select>
					</Form.Item>
					<div className={styles.info}>新用户可免费
						<Button style={{margin: '0px -12px'}} type={`link`}>2</Button> 天 使用
						<Button style={{margin: '0px -12px'}} type={`link`}>2 </Button> 本教材
					</div>
				</Space>
			</Form>
			<div className={styles.bg}>
				<span>暂无搜索结果，您可以更换关键词或
					<Button type={`link`}>点击创建学校</Button>
				</span>
			</div>
		</React.Fragment>
	)
};

export default PerfectInformation;

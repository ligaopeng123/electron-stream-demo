/**********************************************************************
 *
 * @模块名称: BasicInformation
 *
 * @模块用途: BasicInformation  基本信息
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 16:33
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Cascader, Form, Input, Select, Space} from 'antd';
import styles from '../PersonalInformation.module.less';

const options = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
];

const BasicInformation: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Form
				preserve={false}
				name="BasicInformation"
				labelCol={{span: 10}}
				wrapperCol={{span: 18}}
				layout="inline"
				colon={false}
			>
				<Form.Item label="填写名称" style={{width: '60%'}}>
					<Input style={{width: '100%'}}/>
				</Form.Item>
				<Form.Item label="选择性别" style={{width: '30%'}}>
					<Select>
						<Select.Option value={1}>男</Select.Option>
						<Select.Option value={2}>女</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label="选择地区" style={{width: '100%'}}>
					<Cascader style={{width: 635}} options={options} placeholder="请选择地区"/>
				</Form.Item>
				<Form.Item label="选择学校" style={{width: '50%'}}>
					<Select/>
				</Form.Item>
				<Form.Item label="" style={{width: '45%'}}>
					<Input size="small" style={{width: 310}} placeholder={`输入您所任职的学校`}
					       suffix={<Button type={`link`}>搜索</Button>}/>
				</Form.Item>
			</Form>
			<div className={styles.bg}>
				<span>暂无搜索结果，您可以更换关键词或
					<Button type={`link`}>点击创建学校</Button>
				</span>
			</div>
		</React.Fragment>
	)
};

export default BasicInformation;

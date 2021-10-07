/**********************************************************************
 *
 * @模块名称: ChangeSubjectTextbooks
 *
 * @模块用途: ChangeSubjectTextbooks  更换科目教材
 *
 * @创建人: pgli
 *
 * @date: 2021/10/2 14:06
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Row, Col, Button} from "antd";
import Menus1 from "@components/Menus/Menus1";
import ColTitles from "@components/Title/ColTitles";
import ColCard from "@components/ColCard";
import book from '../../../../assets/teachingCenter/book.png';

const data1 = [{title: '语文', key: 1}, {title: '数学', key: 2}, {title: '科学', key: 3}
	, {title: '英语', key: 4}, {title: '思想品德', key: 5}, {title: '人与自热', key: 6}];
const data2 = [{title: '教科版-小学科学', key: 1}, {title: '苏教版-小学科学', key: 2}];

const data = new Array(12).fill(0);

const ChangeSubjectTextbooks: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Row gutter={[16, 0]}>
				<Col span={3}>
					<ColTitles>选择科目</ColTitles>
					<Menus1 data={data1}/>
				</Col>
				<Col span={4}>
					<ColTitles>选择教材版本</ColTitles>
					<Menus1 data={data2}/>
				</Col>
				<Col span={17}>
					<ColTitles>选择课本</ColTitles>
					<ColCard data={data} col={6} render={(row: any) => {
						return <img style={{width: '100%'}} src={book}/>
					}}/>
				</Col>
			</Row>
			<Row>
				<Col span={24} style={{textAlign: 'center'}}>
					<Button type="primary">完成</Button>
				</Col>
			</Row>
		</React.Fragment>
	)
};

export default ChangeSubjectTextbooks;

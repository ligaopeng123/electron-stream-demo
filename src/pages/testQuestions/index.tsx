/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/10/8 13:38
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import Tabs1 from "@components/Tabs1";
import {Tabs} from "antd";
import useResize from "@hooks/useResize";
import styles from './index.module.less';
import TestPaperList from "@pages/testQuestions/components/TestPaperList";

const {TabPane} = Tabs;

type TestQuestionsProps = {};
const TestQuestions: React.FC<TestQuestionsProps> = (props) => {
	const conentHeight = useResize();
	const bodyHeight = conentHeight - 76 - 16 - 16 - 24;
	return (
		<React.Fragment>
			<Tabs1 height={bodyHeight} destroyInactiveTabPane={true}>
				<TabPane tab="期中考试" key="1">
					<TestPaperList/>
					{/*<Viewer file={ht} type={`docx`}/>*/}
				</TabPane>
				<TabPane tab="期末考试" key="2">
					<TestPaperList/>
					{/*<Viewer file={ht} type={`docx`}/>*/}
				</TabPane>
			</Tabs1>
		</React.Fragment>
	)
};

export default TestQuestions;

/**********************************************************************
 *
 * @模块名称: TestPaperList
 *
 * @模块用途: TestPaperList  测试题list
 *
 * @创建人: pgli
 *
 * @date: 2021/10/8 21:01
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Card} from "antd";
import styles from './TestPaperList.module.less';
import Icon from "@components/Icon";
import {RouteComponentProps, withRouter} from "react-router-dom";
import test from '../../../assets/testQuestions/test.png';

const TestPaperListItem = withRouter((props: RouteComponentProps) => {
	const onClick = () => {
		props.history.push({
			pathname: '/testViewer'
		});
	};
	return (
		<div className={styles.item}>
			<div><img src={test}/></div>
			<div className={styles.center}>
				<div className={styles.title}>教科版小学科学四年级期中测试题</div>
				<div className={styles.span}>
					<span><Icon className={styles.icon} type={`icon-shizhong`}/>更新时间： 2021-09-27</span>
					<span><Icon className={styles.icon} type={`icon-chakan`}/>浏览次数： 435</span>
					<span><Icon className={styles.icon} type={`icon-xiazai`}/>下载次数： 435</span>
				</div>
			</div>
			<div className={styles.right}>
				<Button type={`link`} onClick={onClick}>查看试卷</Button>
				<Button type={`primary`}>下载</Button>
			</div>
		</div>
	)
});

type TestPaperListProps = {};
const TestPaperList: React.FC<TestPaperListProps> = (props) => {
	return (
		<Card bordered={false}>
			{
				new Array(3).fill(0).map(() => {
					return <TestPaperListItem/>
				})
			}
		</Card>
	)
};

export default TestPaperList;

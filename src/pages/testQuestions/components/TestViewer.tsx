/**********************************************************************
 *
 * @模块名称: TestViewer
 *
 * @模块用途: TestViewer  测试预览
 *
 * @创建人: pgli
 *
 * @date: 2021/10/8 21:41
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Card} from 'antd';
import Viewer from "@components/Viewer";
import styles from './TestViewer.module.less';
// @ts-ignore
import ht from '../../../assets/ht.docx';

type TestViewerProps = {};
const TestViewer: React.FC<TestViewerProps> = (props) => {
	return (
		<Card title={`外部试卷标题`} extra={<Button type={`primary`}>下载</Button>}>
			<Viewer file={ht} type={`docx`}/>
		</Card>
	)
};

export default TestViewer;

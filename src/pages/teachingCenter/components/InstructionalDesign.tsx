/**********************************************************************
 *
 * @模块名称: InstructionalDesign
 *
 * @模块用途: InstructionalDesign   教学设计页面
 *
 * @创建人: pgli
 *
 * @date: 2021/9/27 21:50
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import EducationEmpty from "@pages/teachingCenter/components/EducationEmpty";
import {Button, Card} from "antd";
import styles from './InstructionalDesign.module.less';
import Viewer from "@components/Viewer";
// @ts-ignore
import ht from '../../../assets/ht.docx';

console.log(ht);

const InstructionalDesign: React.FC<any> = (props: any) => {
	return (
		<Card type="inner"
		      style={{height: 'calc(100% - 24px)', margin: 12}}
		      bodyStyle={{height: '100%'}}
		      size={`small`}
		      className={styles.card}
		      title={<span className={styles.emptyText}>暂无资料</span>}
		      extra={<Button className={styles.bth}>下载</Button>}
		      bordered={true}>
			<Viewer file={ht} type={`docx`}/>
			{/*<EducationEmpty/>*/}
		</Card>
	)
};

export default InstructionalDesign;

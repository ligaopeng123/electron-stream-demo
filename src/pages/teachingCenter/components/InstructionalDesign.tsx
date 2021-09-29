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

const InstructionalDesign: React.FC<any> = (props: any) => {
	return (
		<Card type="inner"
		      bodyStyle={{height: 466}}
		      size={`small`}
		      className={styles.card}
		      title={<span className={styles.emptyText}>暂无资料</span>}
		      extra={<Button className={styles.bth}>下载</Button>}
		      bordered={false}>
			<EducationEmpty/>
		</Card>
	)
};

export default InstructionalDesign;

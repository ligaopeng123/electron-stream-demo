/**********************************************************************
 *
 * @模块名称: ChooseACourse
 *
 * @模块用途: ChooseACourse  选择课程模块
 *
 * @创建人: pgli
 *
 * @date: 2021/9/26 21:27
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Select} from "antd";
import styles from './ChooseACourse.module.less';
import AutoSelect from "@components/AutoSelect";

const {Option} = Select;

const ChooseACourse: React.FC<any> = (props: any) => {
	return (
		<Card bordered={false} style={{height: 76}}>
			<label className={styles.label}>选择课程</label>
			<AutoSelect className={styles.select}/>
			<AutoSelect placeholder={`请选择课时`}/>
		</Card>
	)
};

export default ChooseACourse;

import React from 'react';
import styles from './ChangeTeachingMaterials.module.less';
import {Card, Col, Row} from "antd";
import CTMIcon from '../../../assets/teachingCenter/1.png'
import Icon from "@components/Icon";

const ChangeTeachingMaterials: React.FC<any> = (props: any) => {
	return (
		<Card bordered={false} style={{height: 76}} bodyStyle={{padding: '6px 24px'}}>
			<Row>
				<Col span={20}>
					<div className={styles.title}> 更换教材</div>
					<div className={styles.content}><Icon style={{fontSize: 16}} type="icon-wendang"/>已选择 三年级（下册）</div>
				</Col>
				<Col span={4}><img className={styles.rightImg} src={CTMIcon}/></Col>
			</Row>
		</Card>
	)
};

export default ChangeTeachingMaterials;

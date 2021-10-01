/**********************************************************************
 *
 * @模块名称: personalInformation
 *
 * @模块用途: personalInformation  完善个人信息
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 15:33
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Card, Modal, Steps} from "antd";
import BasicInformation from "@/layouts/HeaderDropdown/components/BasicInformation";
import PerfectInformation from "@/layouts/HeaderDropdown/components/PerfectInformation";
import styles from './PersonalInformation.module.less';

const {Step} = Steps;

const PersonalInformation: React.FC<any> = (props: any) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	
	useEffect(() => {
		// setIsModalVisible(true);
	}, []);
	
	const next = () => {
		setCurrent(current + 1);
	};
	
	const prev = () => {
		setIsModalVisible(false);
	};
	
	const [current, setCurrent] = React.useState(0);
	return (
		<React.Fragment>
			<Modal title={<div className={styles.title}>
				<div className={styles.text}>完善个人信息</div>
			</div>} width={800}
			       visible={isModalVisible}
			       footer={null}
			       closable={false}>
				<Steps size="small" className={styles.steps} current={current}>
					<Step title="填写信息"></Step>
					<Step title="完善信息"></Step>
				</Steps>
				<div className={styles.stepsContent}>
					<Card bordered={false} bodyStyle={{padding: '24px 0px'}}>
						{
							current === 0
								? <BasicInformation/>
								: <PerfectInformation/>
						}
					</Card>
				</div>
				<div className={styles.stepsAction}>
					{current < 1 && (
						<Button type="primary" onClick={() => next()}>
							下一步
						</Button>
					)}
					{current > 0 && (
						<Button type="primary" style={{margin: '0 8px'}} onClick={() => prev()}>
							确认完成
						</Button>
					)}
				</div>
			</Modal>
		</React.Fragment>
	)
};

export default PersonalInformation;

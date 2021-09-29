import React, {useReducer} from 'react';
import BasicContents from '@components/Contents/BasicContents';
import {init, reducer, State} from "@pages/teachingCenter/Store";
import {Card, Col, Row, Tabs} from "antd";
import ChangeTeachingMaterials from "@pages/teachingCenter/components/ChangeTeachingMaterials";
import ChooseACourse from "@pages/teachingCenter/components/ChooseACourse";
import EducationResources from "@pages/teachingCenter/components/EducationResources";
import InstructionalDesign from "@pages/teachingCenter/components/InstructionalDesign";
import MidTerm from "@pages/teachingCenter/components/MidTerm";
import LessonPreparation from "@pages/teachingCenter/components/LessonPreparation";
import AdvertisingSpace from "@pages/teachingCenter/components/AdvertisingSpace";
import styles from './styles.module.less';

const {TabPane} = Tabs;

const TeachingCenter = () => {
	const [state, dispatch] = useReducer(reducer, State, init);
	return (
		<React.Fragment>
			<Row gutter={16}>
				<Col span={5}>
					<ChangeTeachingMaterials state={state} dispatch={dispatch}/>
				</Col>
				<Col span={13}><ChooseACourse state={state} dispatch={dispatch}/></Col>
				<Col span={6}><MidTerm state={state} dispatch={dispatch}/></Col>
			</Row>
			<Row gutter={16} style={{paddingTop: 16}}>
				<Col span={18}>
					<Card bordered={false} className={styles.tabs} bodyStyle={{padding: 0}}>
						<Tabs centered={true}>
							<TabPane tab="教学资源" key="1">
								<EducationResources state={state} dispatch={dispatch}/>
							</TabPane>
							<TabPane tab="教学设计" key="2">
								<InstructionalDesign state={state} dispatch={dispatch}/>
							</TabPane>
						</Tabs>
					</Card>
				</Col>
				<Col span={6}>
					<Row gutter={16}>
						<Col span={24} style={{marginBottom: 16}}>
							<LessonPreparation/>
						</Col>
						<Col span={24}>
							<AdvertisingSpace/>
						</Col>
					</Row>
				</Col>
			</Row>
		</React.Fragment>
	)
};

export default TeachingCenter;

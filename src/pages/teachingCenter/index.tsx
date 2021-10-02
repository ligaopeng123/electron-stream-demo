import React, {useReducer} from 'react';
import BasicContents from '@components/Contents/BasicContents';
import {init, reducer, State} from "@pages/teachingCenter/Store";
import {Col, Row, Tabs} from "antd";
import ChangeTeachingMaterials from "@pages/teachingCenter/components/ChangeTeachingMaterials";
import ChooseACourse from "@pages/teachingCenter/components/ChooseACourse";
import EducationResources from "@pages/teachingCenter/components/EducationResources";
import InstructionalDesign from "@pages/teachingCenter/components/InstructionalDesign";
import MidTerm from "@pages/teachingCenter/components/MidTerm";
import LessonPreparation from "@pages/teachingCenter/components/LessonPreparation";
import AdvertisingSpace from "@pages/teachingCenter/components/AdvertisingSpace";
import useResize from "@hooks/useResize";
import Tabs1 from "@components/Tabs1";
import styles from './styles.module.less';

const {TabPane} = Tabs;

const TeachingCenter = () => {
	const [state, dispatch] = useReducer(reducer, State, init);
	const conentHeight = useResize();
	
	const bodyHeight = conentHeight - 76 - 76 - 16 - 16 - 24;
	
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
					<Tabs1 height={bodyHeight}>
						<TabPane tab="教学资源" key="1">
							<EducationResources state={state} dispatch={dispatch} height={bodyHeight}/>
						</TabPane>
						<TabPane tab="教学设计" key="2">
							<InstructionalDesign state={state} dispatch={dispatch}/>
						</TabPane>
					</Tabs1>
				</Col>
				<Col span={6}>
					<Row gutter={16} style={{height: bodyHeight}}>
						<Col span={24} style={{marginBottom: 16, height: 'calc(100% - 256px)'}}>
							<LessonPreparation/>
						</Col>
						<Col span={24} style={{height: 240}}>
							<AdvertisingSpace/>
						</Col>
					</Row>
				</Col>
			</Row>
		</React.Fragment>
	)
};

export default TeachingCenter;

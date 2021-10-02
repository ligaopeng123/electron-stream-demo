/**********************************************************************
 *
 * @模块名称: EducationResources
 *
 * @模块用途: EducationResources
 *
 * @创建人: pgli
 *
 * @date: 2021/9/27 20:59
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import EducationResourcesTabs from "@pages/teachingCenter/components/EducationResourcesTabs";
import EducationEmpty from "@pages/teachingCenter/components/EducationEmpty";
import {Card} from "antd";
import ContentCard from "@pages/teachingCenter/components/ContentCard";
import ColCard from "@components/ColCard";

const data = new Array<any>(13).fill(0).map((item) => item);

const EducationResources: React.FC<any> = (props: any) => {
	return (
		<Card bordered={false} bodyStyle={{height: props.height - 80 || '100%', overflowY: 'auto'}}>
			<EducationResourcesTabs/>
			{/*空数据状态*/}
			{/*<EducationEmpty/>*/}
			<ColCard data={data} col={3} render={(row: any) => {
				return <ContentCard action={`add`}/>
			}}/>
		</Card>
	)
};

export default EducationResources;

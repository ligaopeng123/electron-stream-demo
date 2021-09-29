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

const EducationResources: React.FC<any> = (props: any) => {
	return (
		<Card bordered={false} bodyStyle={{height: 514}}>
			<EducationResourcesTabs/>
			<EducationEmpty/>
		</Card>
	)
};

export default EducationResources;

/**********************************************************************
 *
 * @模块名称: EducationEmpty
 *
 * @模块用途: EducationEmpty
 *
 * @创建人: pgli
 *
 * @date: 2021/9/27 21:30
 *
 **********************************************************************/
import React from 'react';
import {Button} from "antd";
import Empty1 from "@components/Empty1";

const EducationEmpty: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Empty1
				description="暂无本课上课资源 您可以点击下方添加资源"
			>
				<Button style={{color: '#35A75F', borderColor: '#35A75F'}} shape="round">我要添加</Button>
			</Empty1>
		</React.Fragment>
	)
};

export default EducationEmpty;

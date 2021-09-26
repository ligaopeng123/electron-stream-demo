/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/9/26 21:45
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from "./styles.module.less";
import {Select} from "antd";

const {Option} = Select;

const AutoSelect: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Select
				showSearch //
				style={{width: 200}}
				placeholder="请选择课程"
				optionFilterProp="children"
				{...props}
				className={`${styles.select}  ${props.className || ''}`}
				// onChange={onChange}
				// onFocus={onFocus}
				// onBlur={onBlur}
				// onSearch={onSearch}
				filterOption={(input, option: any) =>
					option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
				}
			>
				<Option value="jack">一单元：物理的运动</Option>
				<Option value="lucy">二单元：物理的运动</Option>
				<Option value="tom">三单元：物理的运动</Option>
			</Select>
		</React.Fragment>
	)
};

export default AutoSelect;

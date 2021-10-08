/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/10/7 20:25
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import FileViewer from 'react-file-viewer';
import styles from './index.module.less';
import {uuid} from "@gaopeng123/utils";

type ViewerProps = {
	type?: string;
	file?: string;
}
const Viewer: React.FC<ViewerProps> = (props) => {
	const {type, file} = props;
	const onError = () => {
	
	};
	return (
		<React.Fragment>
			<FileViewer
				fileType={type}
				filePath={file}
				errorComponent={<div>加载文件过大，暂不支持过大文件预览，请直接下载</div>}
				onError={onError}/>
			)
		</React.Fragment>
	)
};

export default Viewer;

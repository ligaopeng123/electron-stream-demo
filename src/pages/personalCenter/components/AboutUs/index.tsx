/**********************************************************************
 *
 * @模块名称: AboutUs
 *
 * @模块用途: AboutUs 关于我们
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 23:31
 *
 **********************************************************************/
import {Button} from 'antd';
import React, {useState, useEffect} from 'react';
import styles from './index.module.less';
import img from '../../../../assets/personalCenter/baseInfo/2.png';

type AboutUsProps = {};
const AboutUs: React.FC<AboutUsProps> = (props) => {
	return (
		<div className={styles.content}>
			<div className={styles.item1}>
				<div>
					<div><img style={{height: 46}} src={'./assets/logo.png'}/>
						<span className={styles.a}>教学辅助平台</span>
					</div>
					<div className={styles.b}>版本号：1.0.0.0012</div>
				</div>
				<div className={styles.bths}>
					<Button size={`large`} type="primary" danger>清除缓存</Button>
					<Button size={`large`} style={{marginLeft: 24}} type="primary">检查更新</Button>
				</div>
			</div>
			<div className={styles.c}>
				作为官方唯一指定小学科学教师培训平台，连续3年承接“全国教科版小学科学教材培训大会”，帮助全国 19余万教师通过线上和线下的方式参与学习，传播辅助教学内容及科学普及知识，获得了高度评价。
				<p></p>
				自2017年公司创建成立两方面项目：“科米课堂”及“科米+”，将高品质的成像素材通过直播及录播形式 展示，为学校打造互联网模式融合课堂，为家庭传播科学教育理念，普及专业家庭教育知识。
			</div>
			<div className={styles.item1} style={{paddingTop: 24}}>
				<div>
					<div className={styles.d}>联系电话</div>
					<div>官方网站</div>
					<div style={{color: '#35A75F'}}>www.kemiketang.com</div>
				</div>
				<div className={styles.item2}>
					<div>
						<div className={styles.d}>公众号：科米课堂教学平台</div>
						<div>如需帮助，请扫码关注公众号，咨询在线客服。</div>
					</div>
					<div style={{marginLeft: 'auto'}}><img src={img}/></div>
				</div>
			</div>
			<div className={styles.item3}>
				Copyright©️2021 科米课堂 保留所有权利
			</div>
		</div>
	)
};

export default AboutUs;

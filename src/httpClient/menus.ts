/**********************************************************************
 *
 * @模块名称: menus
 *
 * @模块用途: menus
 *
 * @date: 2021/10/10 15:33
 *
 * @版权所有: pgli
 *
 **********************************************************************/
const menus = [
	{
		"id": 30,
		"name": "教学中心",
		"path": "/teachingCenter",
		"component": "pages/teachingCenter",
		"exact": true,
		"auth": null,
		"icon": "teachingCenter"
	},
	{
		"id": 33,
		"name": "期中期末考试",
		"path": "/testQuestions",
		"component": "pages/testQuestions",
		"hideInMenu": true,
		"exact": true,
		"auth": null,
		"icon": "teachingCenter"
	},
	{
		"id": 32,
		"name": "期中期末考试预览",
		"path": "/testViewer",
		"component": "pages/testQuestions/components/TestViewer",
		"hideInMenu": true,
		"exact": true,
		"auth": null,
		"icon": "teachingCenter"
	},
	{
		"id": 47,
		"name": "延时课堂",
		"path": "/delayClass",
		"exact": true,
		"icon": "delayClass",
		"component": "pages/delayClass"
	},
	{
		"id": 51,
		"name": "教师培训",
		"path": "/teacherTraining",
		"auth": null,
		"icon": "teacherTraining",
		"component": "pages/teacherTraining"
	},
	{
		"id": 128,
		"name": "个人中心",
		"path": "/personalCenter",
		"component": "pages/personalCenter",
		"auth": null,
		"icon": "personalCenter"
	}
];

export default menus;

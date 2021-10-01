/**
 *  用户登录模块
 */
import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import useOEM from "@/hooks/useOEM";
import {Card, message} from "antd";
import {useRecoilState} from "recoil";
import CurrentUser from "@store/CurrentUser";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {uuid} from "@gaopeng123/utils";
import HeaderTitle from "@/layouts/UserLayout/HeaderTitle";
import './styles.less';

const theme = createTheme();

type LoginStatus = {
	uuid: string,
	username: string,
	password: string
}

const UserLayout: React.FC<any> = (props: any) => {
	/**
	 * oem数据消费
	 */
	const loginLogo = useOEM('loginLogo');
	const loginName = useOEM('loginName');
	const loginDesc = useOEM('loginDesc');
	/**
	 * 检查登录状态
	 */
	const [loginStatus, setLoginStatus] = useState<LoginStatus>({
		username: '',
		password: '',
		uuid: ''
	});
	
	/**
	 * 菜单的第一项 默认为初始页面
	 */
	const onFinish = () => {
		// 登录后将用户信息缓存到全局变量里面
		// 登录 菜单管理模块 处理第一次跳转的重定向问题
		setTimeout(() => {
			props.history.push({
				pathname: `/`,
			});
		}, 10);
	};
	/**
	 * 保存用户登录信息
	 */
	const [currentUser, setCurrentUser] = useRecoilState(CurrentUser);
	
	useEffect(() => {
		if (loginStatus.uuid) {
			const {username, password} = loginStatus;
			setCurrentUser({name: username, token: ''});
			onFinish();
		}
		return () => {
		
		}
	}, [loginStatus]);
	
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [userNameError, setUserNameError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	
	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};
	
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	
	const handleChange = (event: React.ChangeEvent<Element>) => {
		// @ts-ignore
		if (event.target?.value) {
			const name = event.target.getAttribute('name');
			if (name === 'username' && userNameError) {
				setUserNameError(false);
			} else if (name === 'password' && passwordError) {
				setPasswordError(false);
			}
		}
	};
	/**
	 * 提交逻辑
	 */
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const username = data.get('username') as string;
		const password = data.get('password') as string;
		if (!username || !password) {
			!username && setUserNameError(true);
			!password && setPasswordError(true);
			return;
		}
		setLoginStatus({
			username,
			password,
			uuid: uuid()
		});
	};
	
	return (
		<Card bordered={false} style={{height: '100%'}}
		      headStyle={{borderBottom: 0}}
		      bodyStyle={{height: '90%'}}
		      title={<HeaderTitle/>}>
			<ThemeProvider theme={theme}>
				<Grid container component="main" sx={{height: '100%'}}>
					<CssBaseline/>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage: 'url(/assets/login.png)',
							backgroundRepeat: 'no-repeat',
							// backgroundColor: 'rgba(0,0,0,0)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
					<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
						<Box
							sx={{
								my: 8,
								mx: 4,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
							}}
							className={`login-form`}
						>
							<Typography className={`login-text`} component="h1" variant="h5">
								登录账号
							</Typography>
							<Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
								<TextField
									error={userNameError}
									margin="normal"
									required
									fullWidth
									id="username"
									label="请输入您的用户名"
									name="username"
									autoComplete="username"
									onChange={handleChange}
									helperText={userNameError ? "请输入用户名" : null}
									autoFocus
									InputProps={{
										startAdornment: <InputAdornment position="start"></InputAdornment>,
									}}
								/>
								<TextField
									error={passwordError}
									margin="normal"
									required
									fullWidth
									name="password"
									label="请输入您的密码"
									onChange={handleChange}
									type={showPassword ? 'text' : 'password'}
									id="password"
									autoComplete="current-password"
									helperText={passwordError ? "请输入密码" : null}
									InputProps={{
										startAdornment: <InputAdornment position="start"></InputAdornment>,
										endAdornment: <InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff/> : <Visibility/>}
											</IconButton>
										</InputAdornment>
									}}
								/>
								{/*<FormControlLabel*/}
								{/*control={<Checkbox value="remember" color="primary"/>}*/}
								{/*label="Remember me"*/}
								{/*/>*/}
								<Grid container>
									<Grid item xs>
									
									</Grid>
									<Grid item>
										<Link href="#" variant="body2">
											忘记密码
										</Link>
									</Grid>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{mt: 3, mb: 2}}
									className={`login-sumbit-button`}
								>
									登录
								</Button>
								<Grid className={`login-register`}>
									<Link href="#" variant="body2">
										{"没有账号？点击注册"}
									</Link>
								</Grid>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</ThemeProvider>
		</Card>
	);
};

export default withRouter(UserLayout);


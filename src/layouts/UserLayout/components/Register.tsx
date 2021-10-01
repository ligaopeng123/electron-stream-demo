/**********************************************************************
 *
 * @模块名称: Register
 *
 * @模块用途: Register
 *
 * @创建人: pgli
 *
 * @date: 2021/10/1 12:30
 *
 **********************************************************************/
import React, {useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
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
import '../styles.less';

const theme = createTheme();

type LoginStatus = {
	uuid: string,
	phone: string,
	password: string,
	verification: string,
}

type RegisterProps = {
	leftImage: string;
	title: string | React.ReactNode,
	description?: string | React.ReactNode,
}
const Register: React.FC<RegisterProps & RouteComponentProps> = (props) => {
	/**
	 * 检查登录状态
	 */
	const [loginStatus, setLoginStatus] = useState<LoginStatus>({
		phone: '',
		password: '',
		uuid: '',
		verification: ''
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
			const {phone, password} = loginStatus;
			setCurrentUser({name: phone, token: ''});
			onFinish();
		}
		return () => {
		
		}
	}, [loginStatus]);
	
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [phoneError, setphoneError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [verificationError, setVerificationError] = useState<boolean>(false);
	
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
			if (name === 'phone' && phoneError) {
				setphoneError(false);
			} else if (name === 'password' && passwordError) {
				setPasswordError(false);
			} else if (name === 'verification' && verificationError) {
				setVerificationError(false);
			}
		}
	};
	/**
	 * 提交逻辑
	 */
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const phone = data.get('phone') as string;
		const password = data.get('password') as string;
		const verification = data.get('verification') as string;
		if (!phone || !password || !verificationError) {
			!phone && setphoneError(true);
			!password && setPasswordError(true);
			!verificationError && setVerificationError(true);
			return;
		}
		setLoginStatus({
			phone,
			password,
			verification,
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
							backgroundImage: `url(${props.leftImage})`,
							backgroundRepeat: 'no-repeat',
							// backgroundColor: 'rgba(0,0,0,0)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
					{/*component={Paper} elevation={6} square*/}
					<Grid item xs={12} sm={8} md={5}>
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
								{props.title}
							</Typography>
							<Typography className={`login-text-description`} component="h1" variant="subtitle2">
								{props.description}
							</Typography>
							<Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
								<TextField
									className={`form-item`}
									error={phoneError}
									margin="normal"
									required
									fullWidth
									id="phone"
									label="请输入您的手机号"
									name="phone"
									autoComplete="phone"
									onChange={handleChange}
									helperText={phoneError ? "请输入用户名" : null}
									autoFocus
									InputProps={{
										startAdornment: <InputAdornment position="start"></InputAdornment>,
									}}
								/>
								<Grid container>
									<Grid item xs>
										<TextField
											error={verificationError}
											helperText={verificationError ? "请输入请输入您的验证码" : null}
											autoComplete="verification"
											name="verification"
											required
											fullWidth
											id="verification"
											label="请输入您的验证码"
											autoFocus
											InputProps={{
												startAdornment: <InputAdornment position="start"></InputAdornment>,
											}}
										/>
									</Grid>
									<Grid item>
										<Button
											type="submit"
											fullWidth
											variant="contained"
											sx={{mt: 6, mb: 4}}
											className={`login-sumbit-verification`}
										>
											获取验证码
										</Button>
									</Grid>
								</Grid>
								<TextField
									className={`form-item`}
									error={passwordError}
									helperText={passwordError ? "请输入密码" : null}
									margin="normal"
									required
									fullWidth
									name="password"
									label="请输入您的密码"
									onChange={handleChange}
									type={showPassword ? 'text' : 'password'}
									id="password"
									autoComplete="current-password"
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
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{mt: 3, mb: 2}}
									className={`login-sumbit-button-login`}
								>
									登录
								</Button>
								<Grid className={`login-register`}>
									<Link href="#/login" variant="body2">
										{"已有账号？点击登录账号"}
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

export default withRouter(Register);

import React from 'react';
import { Avatar, Button, Card, Col, Input, Row, Typography } from 'antd';
import './App.css';
import OtpInputs from './Components/OptInputs';

import Logo from './Asset/arm-chat.png';

const App = () => {
	return (
		<div className='login-card'>
			<Row justify='space-around' align='middle' gutter={[16, 8]} style={{ backgroundColor: '#FAFAFA' }}>
				<Col span={24} className='text-align-centre'>
					<Avatar shape='square' size={100} src={Logo} />
				</Col>
				<Col span={24} className='card-styling'>
					<Card className='card-align'>
						<Row justify='space-around' align='middle' gutter={[16, 32]}>
							<Col span={24} className='text-align-centre'>
								<Typography.Title level={4}>Please enter OTP to verify your account</Typography.Title>
							</Col>
							<Col span={24} className='text-align-centre'>
								<Typography.Text>
									An OTP (One Time Password) has been sent to +12213243443
								</Typography.Text>
							</Col>
							<Col span={24}>
								<OtpInputs />
							</Col>
							<Col span={24}>
								<Button className='button-width'>VERIFY OTP</Button>
							</Col>
							<Col span={24}>
								<Button type='link' className='button-align'>
									Resend OTP
								</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default App;

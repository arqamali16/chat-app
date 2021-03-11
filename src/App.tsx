import React from 'react';
import { Avatar, Button, Card, Col, Input, Row, Typography } from 'antd';
import './App.css';

const App = () => {
	return (
		<div className='login-card'>
			<Row justify='space-around' align='middle' gutter={[16, 48]} style={{ backgroundColor: '#FAFAFA' }}>
				<Col span={24} className='text-align-centre'>
					<Avatar shape='square' size={64} />
				</Col>
				<Col span={24} style={{ maxWidth: '30%' }}>
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
								<Row justify='space-around' align='middle' style={{ marginLeft: '10%' }}>
									<Col span={6}>
										<Input className='otp-text'></Input>
									</Col>
									<Col span={6}>
										<Input className='otp-text'></Input>
									</Col>
									<Col span={6}>
										<Input className='otp-text'></Input>
									</Col>
									<Col span={6}>
										<Input className='otp-text'></Input>
									</Col>
								</Row>
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

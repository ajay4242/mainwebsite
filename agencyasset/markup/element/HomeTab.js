import React,{Fragment,  useState} from 'react';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

//Images
// import pic5 from './../../images/about/pic5.jpg';
// import pic6 from './../../images/about/pic6.jpg';
// import pic7 from './../../images/about/pic7.jpg';
// import pic8 from './../../images/about/pic8.jpg';

function Para(){
	return(
		<>
			<div className="abuot-box p-lr30">
				<p>We take care of our clients, and they take care of us. It’s all about relationships. We offer an attractive blend of technical know-how and artistic creativity bundled with intelligent techniques and call-to-actions that make your life easy. The majority of our work comes from client referrals, word-of-mouth, and online leads from people. We would love the opportunity to work with your company. </p>
			</div>	
		</>
	)
}

const HomeTab = (props) => {
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	  
	return(
		<Fragment>			
			<div className="container-fluid">
				<div className="dlab-tabs choseus-tabs">
					<ul className="nav row justify-content-center"  id="myTab" role="tablist">
						{/* <li>
							<a className= {classnames({ active : activeTab === '1' }) + ' className if avialble'}  onClick={() => { toggle('1'); }}	
							><span className="title-head">Cost Effectiveness</span></a>
						</li> */}
						<li>
							
						<a style={{  cursor: 'pointer' }} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><span className="title-head">Cost Effectiveness</span></a>
						</li>
						<li>
						
								<a style={{  cursor: 'pointer' }} className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><span className="title-head">Intelligent Technology</span></a>
						</li>
						<li>
						
								<a  style={{  cursor: 'pointer' }} className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}}><span className="title-head">Fully Decentralized</span></a>
						</li>
						<li>
						
								<a style={{  cursor: 'pointer' }} className={classnames({active:activeTab === '4'}) + ''} onClick={()=>{ toggle('4');}}><span className="title-head">Flexible and customizable</span></a>
						</li>
					</ul>
				</div>	
			</div>
			<div className="container">
				<div className="tab-content chosesus-content">
					<div id="cost" className="tab-pane active">
						<TabContent activeTab={activeTab}>
							<TabPane tabId="1">
								<div className="row p-tb50">
									<div className="col-lg-6 m-b10 col-md-4 about-img " >
									<img src="/images/whychoseus/cost.jpg" alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30 " >
											<h4 className="font-weight-300">Project Cost Effectiveness</h4>
											<ul className="list-checked primary">
												<li><span>Reduced Expenses and Increased Revenue</span></li>
												<li><span>Flexible price model suitable for all.</span></li>
												<li><span>Pay as you go</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="2">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src="/images/whychoseus/tech.jpg" alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Intelligent Technology</h4>
											<ul className="list-checked primary">
												<li><span>Saves time in processes and tasks</span></li>
												<li><span>The ability to develop new, innovative approaches</span></li>
												<li><span>Easier to manage</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="3">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src="/images/whychoseus/decen.jpg" alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Fully Decentralized</h4>
											<ul className="list-checked primary">
												<li><span>No single entity controlling the Dapp</span></li>
												<li><span>It doesn’t rely on a single point of failure</span></li>
												<li><span> Faster and more secure development ecosystem</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="4">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src="/images/whychoseus/cous.jpg" alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Flexible and customizable</h4>
											<ul className="list-checked primary">
												<li><span>Modify or build according to individual or personal specifications</span></li>
												<li><span> ​Able to be made or changed in ways that suit individual people or tasks</span></li>
												<li><span>We are fully customizable and allows users to create their own word.</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							
						</TabContent>
					</div>	
				</div>
			</div>	
		</Fragment>
	)
	
}	
export default HomeTab;
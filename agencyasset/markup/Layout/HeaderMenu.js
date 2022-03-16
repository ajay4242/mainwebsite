import React,{Component} from 'react';
import Link from 'next/link';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link href="/"><a><span className="ti-home"></span> <i className="fa fa-chevron-down"></i></a></Link>
						<ul className="sub-menu">
							<li><Link href="/"><a className="dez-page">Home 1</a></Link></li>
							<li><Link href="/"><a className="dez-page">Home 2</a></Link></li>
							<li><Link href="/"><a className="dez-page">Home 3</a></Link></li>
							<li><Link href="/"><a className="dez-page">Home 4</a></Link></li>
							<li><Link href="/"><a className="dez-page">Home 5</a></Link></li>
							<li><Link href="/"><a className="dez-page">Home 6 <span className="new-page">New</span></a></Link></li>
							<li><Link href="/"><a className="dez-page">Home 7 <span className="new-page">New</span></a></Link></li>
						</ul>
					</li>
					<li><Link href="/"><a>Pages <i className="fa fa-chevron-down"></i></a></Link>
						<ul className="sub-menu">
							<li><Link href="/"><a>About Us <i className="fa fa-angle-right"></i></a></Link>
								<ul className="sub-menu">
									<li><Link href="/"><a className="dez-page">About Us 1</a></Link></li>
									<li><Link href="/"><a className="dez-page">About Us 2</a></Link></li>
								</ul>
							</li>
							<li><Link href="/"><a>Error Page <i className="fa fa-angle-right"></i></a></Link>
								<ul className="sub-menu">
									<li><Link href="/"><a className="dez-page">Error 403</a></Link></li>
									<li><Link href="/"><a className="dez-page">Error 404</a></Link></li>
									<li><Link href="/"><a className="dez-page">Error 405</a></Link></li>
								</ul>
							</li>
							<li><Link href="/"><a>Coming Soon <i className="fa fa-angle-right"></i></a></Link>
								<ul className="sub-menu">
									<li><Link href="/"><a className="dez-page">Coming Soon 1 </a></Link></li>
								</ul>
							</li> 
							<li><Link href="/"><a className="dez-page">Under Maintenance</a></Link></li>
							<li><Link href="/"><a className="dez-page">Expertise</a></Link></li>
							<li><Link href="/"><a className="dez-page">Project management</a></Link></li>
							<li><Link href="/"><a className="dez-page">Our Projects</a></Link></li>
							<li><Link href="/"><a className="dez-page">Project Details </a></Link></li>
							<li><Link href="/"><a className="dez-page">Our Team</a></Link></li>
							<li><Link href="/"><a className="dez-page">FAQ's</a></Link></li>
							<li><Link href="/"><a className="dez-page">Login </a></Link></li>
							<li><Link href="/"><a className="dez-page">Register </a></Link></li>
							<li><Link href="/"><a className="dez-page">Contact Us</a></Link></li>
						</ul>
					</li>
					<li><Link href="/"><a>Our Service <i className="fa fa-chevron-down"></i></a></Link>
						<ul className="sub-menu">
							<li><Link href="/"><a className="dez-page">Services</a></Link></li>
							<li><Link href="/"><a className="dez-page">Services Details</a></Link></li>
						</ul>
					</li>
					{/* <li><Link to={'#'}>Blog <i className="fa fa-chevron-down"></i></a></Link>
						<ul className="sub-menu">
							<li><Link to={'#'}>Blog Standard <i className="fa fa-angle-right"></i></a></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-standard'} className="dez-page">Standard</a></Link></li>
									<li><Link to={'./blog-standard-left-sidebar'} className="dez-page">Standard Left Sidebar</a></Link></li>
									<li><Link to={'./blog-standard-right-sidebar'} className="dez-page">Standard Right Sidebar</a></Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Blog Classic <i className="fa fa-angle-right"></i></a></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-classic-grid'} className="dez-page">Classic</a></Link></li>
									<li><Link to={'./blog-classic-left-sidebar'} className="dez-page">Classic Left Sidebar</a></Link></li>
									<li><Link to={'./blog-classic-right-sidebar'} className="dez-page">Classic Right Sidebar</a></Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Blog List <i className="fa fa-angle-right"></i></a></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-list-left-sidebar'} className="dez-page">List Left Sidebar</a></Link></li>
									<li><Link to={'./blog-list-right-sidebar'} className="dez-page">List Right Sidebar</a></Link></li>
								</ul>
							</li>
							<li><Link to={'./blog-details'} className="dez-page">Blog Details</a></Link></li>
						</ul>
					</li> */}
					{/* <li><Link to={'#'}>Our Portfolio <i className="fa fa-chevron-down"></i></a></Link>
						<ul className="sub-menu left">
							<li><Link to={'./portfolio-full-width'} className="dez-page">Portfolio Full Width  </a></Link></li>
							<li><Link to={'./portfolio-grid-2'} className="dez-page">Portfolio Grid 2 </a></Link></li>
							<li><Link to={'./portfolio-grid-3'} className="dez-page">Portfolio Grid 3 </a></Link></li>
							<li><Link to={'./portfolio-grid-4'} className="dez-page">Portfolio Grid 4 </a></Link></li>
						</ul>
					</li> */}
					{/* <li><Link to={'#'}>Shop <i className="fa fa-chevron-down"></i></a></Link>
						<ul className="sub-menu left">
							<li><Link to={'./shop-columns'} className="dez-page">Shop Columns</a></Link></li>
							<li><Link to={'./shop-columns-sidebar'} className="dez-page">Shop Columns Sidebar</a></Link></li>
							<li><Link to={'./shop-product-details'} className="dez-page">Product Details</a></Link></li>
							<li><Link to={'./shop-cart'} className="dez-page">Cart</a></Link></li>
							<li><Link to={'./shop-checkout'} className="dez-page">Checkout</a></Link></li>
							<li><Link to={'./shop-wishlist'} className="dez-page">Wishlist</a></Link></li>
							<li><Link to={'./shop-login'} className="dez-page">Shop Login</a></Link></li>
							<li><Link to={'./shop-register'} className="dez-page">Shop Register</a></Link></li>
						</ul>
					</li> */}
					{/* <li><Link to={'#'}>Element <i className="fa fa-chevron-down"></i> </a></Link>
						<ul className="sub-menu left">
							<li><Link to={'./short-icon-box'} className="dez-page">Icon Box</a></Link></li>
							<li><Link to={'./short-counter'} className="dez-page">Counter</a></Link></li>
							<li><Link to={'./short-portfolio'} className="dez-page">Portfolio</a></Link></li>
							<li><Link to={'./short-tabs'} className="dez-page">Tabs</a></Link></li>
							<li><Link to={'./short-team'} className="dez-page">Team</a></Link></li>
							<li><Link to={'./short-testimonial'} className="dez-page">Testimonial</a></Link></li>
							<li><Link to={'./short-form'} className="dez-page">Form</a></Link></li>
							<li><Link to={'./short-accordions'} className="dez-page">Accordions</a></Link></li>
						</ul>
					</li> */}
				</ul>
			</>
		)
	}
}
export default HeaderMenu;
{/* <Link href="/"><a
About Us</a>
 </a></Link> */}
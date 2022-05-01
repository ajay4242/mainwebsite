import Link from "next/link";
import Quote2 from "../element/quote-2";
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";


function ContactUs2() {
  return (
    <>
	<Header2/>
	<div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/banner/bnr5.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Get in touch</h1>
					<h2>Don’t hesitate to contact us if you have any questions, comments or want to say Hi! We will try to respond to everything you ask.</h2>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Get A Quote --> */}
		<Quote2/>
			
	</div>
	<Footer2/>
       </>
  )
}

export default ContactUs2;
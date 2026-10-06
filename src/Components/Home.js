import { Link } from "react-router-dom";

function Home()
{
    return(
        <>
     {/* <!-- ============================================================ */}
         {/* TOP BAR */}
         {/* ============================================================ --> */}
      <div id="topbar">
         <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
               <div className="top-contact d-flex flex-wrap">
                  <span><i className="fas fa-phone-alt"></i>+1 (800) 123-4567</span>
                  <span><i className="fas fa-envelope"></i>hello@sarabfood.com</span>
                  <span><i className="fas fa-map-marker-alt"></i>42 Flavor Street, NY</span>
               </div>
               <div className="d-flex align-items-center gap-3">
                  <span className="ttag"><i className="fas fa-fire me-1"></i>Free Delivery Today!</span>
                  <div className="tsoc">
                     <a href="#"><i className="fab fa-facebook-f"></i></a>
                     <a href="#"><i className="fab fa-instagram"></i></a>
                     <a href="#"><i className="fab fa-tiktok"></i></a>
                     <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- ============================================================ */}
         {/* NAVBAR */}
         {/* ============================================================ --> */}
      <nav className="navbar navbar-expand-lg" id="nav">
         <div className="container">
            <a className="navbar-brand" href="#">
               <div className="blogo">
                  <div className="bico"><i className="fas fa-utensils"></i></div>
                  <div>
                     <div className="bname">Sar<span>ab</span></div>
                     <div className="bsub">Fast Food & Restaurant</div>
                  </div>
               </div>
            </a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
               <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><Link className="nav-link" to=''>Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/menu'>Menu</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/chefs'>Chefs</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/reservation'>Reservation</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/testimonials'>Reviews</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/contact'>Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/api fetching'>Api Fetching</Link></li>
                  <li className="nav-item"><Link className="nav-link" to='/api tasking'>Api Tasking</Link></li>
               </ul>
               <div className="d-flex align-items-center gap-1">
                  {/* <!-- FIX 1: Search button --> */}
                  <button id="navSearchBtn" title="Search"><i className="fas fa-search"></i></button>
                  <a href="#menu" className="nav-link nav-cta"><i className="fas fa-shopping-bag me-1"></i>Order Now</a>
               </div>
            </div>
         </div>
      </nav>
      {/* <!-- ============================================================ */}
         {/* FIX 1 � SEARCH OVERLAY POPUP */}
         {/* ============================================================ --> */}
      <div id="searchOv">
         <button className="sovclose" id="searchClose"><i className="fas fa-times"></i></button>
         <div className="sovbox">
            <h4>What are you craving today?</h4>
            <div className="sovinput">
               <input type="text" id="searchInput" placeholder="Search burgers, pizza, chicken..." autoComplete="off"/>
               <button><i className="fas fa-search"></i></button>
            </div>
            {/* <!-- Categories inside search box --> */}
            <div className="sovcats">
               <div className="sovcat active" data-cat="all">
                  <img src="img/menu/1.jpg" alt=""/>All Items
               </div>
               <div className="sovcat" data-cat="burgers">
                  <img src="img/menu/1.jpg" alt=""/>Burgers
               </div>
               <div className="sovcat" data-cat="pizza">
                  <img src="img/menu/2.jpg" alt=""/>Pizza
               </div>
               <div className="sovcat" data-cat="chicken">
                  <img src="img/menu/3.jpg" alt=""/>Chicken
               </div>
               <div className="sovcat" data-cat="wraps">
                  <img src="img/menu/4.jpg" alt=""/>Wraps
               </div>
               <div className="sovcat" data-cat="pasta">
                  <img src="img/menu/5.jpg" alt=""/>Pasta
               </div>
               <div className="sovcat" data-cat="desserts">
                  <img src="img/menu/6.jpg" alt=""/>Desserts
               </div>
            </div>
            <div className="sovtrend">
               <p><i className="fas fa-fire me-1"></i>Trending Searches</p>
               <span className="ttag">Smash Burger</span>
               <span className="ttag">Nashville Chicken</span>
               <span className="ttag">Truffle Pizza</span>
               <span className="ttag">Lava Cake</span>
               <span className="ttag">Loaded Fries</span>
               <span className="ttag">Mango Shake</span>
            </div>
         </div>
      </div>
      {/* <!-- ============================================================ */}
         {/* HERO */}
         {/* ============================================================ --> */}
      <section id="hero">
         <div className="hs hs1"></div>
         <div className="hs hs2"></div>
         <div className="hbgtxt">FOOD</div>
         <div className="container">
            <div className="row align-items-center g-5">
               <div className="col-lg-6">
                  <div className="hbadge">
                     <div className="hbi"><i className="fas fa-star"></i></div>
                     <span>#1 Rated Fast Food Restaurant in New York</span>
                  </div>
                  <h1 className="htitle">Delicious <span className="hl">Fast Food</span><br/>for Every Moment</h1>
                  <p className="hdesc">Experience bold flavors crafted from premium ingredients. From crispy burgers to gourmet pizzas - every bite is an adventure worth savoring.</p>
                  <div className="d-flex flex-wrap gap-3 mb-2">
                     <a href="#menu" className="btn-red"><i className="fas fa-utensils"></i>Explore Menu</a>
                     {/* <!-- FIX 2: Magnific popup video trigger --> */}
					 <a href="https://www.youtube.com/watch?v=RXv_uIN6e-Y" className="magnific_popup btn-play popup-youtube">
						<div className="pico"><i className="fas fa-play"></i></div>
						<span>Watch Our Story</span>
					 </a>
                  </div>
                  <div className="hstats d-flex gap-3 flex-wrap mt-4">
                     <div className="hstat"><span className="snum">850<em>+</em></span><small>Happy Customers</small></div>
                     <div className="sdiv"></div>
                     <div className="hstat"><span className="snum">120<em>+</em></span><small>Menu Items</small></div>
                     <div className="sdiv"></div>
                     <div className="hstat"><span className="snum">15<em>+</em></span><small>Expert Chefs</small></div>
                     <div className="sdiv"></div>
                     <div className="hstat"><span className="snum">12<em>yr</em></span><small>Experience</small></div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div>
                     <div className="hcircle">
                        <img src="img/banner-img.jpg" alt="Burger"/>
                     </div>
                     <div className="fcard fc1">
                        <div className="fcoi r"><i className="fas fa-fire"></i></div>
                        <div><span className="fcnum">Hot Deal</span><span className="fcsm">30% off today</span></div>
                     </div>
                     <div className="fcard fc2">
                        <div className="fcoi y"><i className="fas fa-star"></i></div>
                        <div><span className="fcnum">4.9/5</span><span className="fcsm">2k+ reviews</span></div>
                     </div>
                     <div className="fcard fc3">
                        <div className="fcoi g"><i className="fas fa-clock"></i></div>
                        <div><span className="fcnum">20 min</span><span className="fcsm">Fast delivery</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- MARQUEE --> */}
      <div className="mqsec">
         <div className="mqtrack">
            <div className="mqitem"><i className="fas fa-circle"></i>Crispy Fried Chicken</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Gourmet Burgers</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Artisan Pizzas</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Fresh Wraps &amp; Rolls</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Loaded Fries</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Ice Cream Shakes</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Grilled Sandwiches</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Crispy Fried Chicken</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Gourmet Burgers</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Artisan Pizzas</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Fresh Wraps &amp; Rolls</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Loaded Fries</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Ice Cream Shakes</div>
            <div className="mqitem"><i className="fas fa-circle"></i>Grilled Sandwiches</div>
         </div>
      </div>
      {/* <!-- CATEGORY --> */}
      <section id="category">
         <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
               <span className="slbl">What We Offer</span>
               <h2 className="stitle">Browse by <span>Category</span></h2>
               <div className="sline"></div>
               <p className="sdesc mx-auto" >From sizzling burgers to exotic world cuisines - find your favourite in our menu</p>
            </div>
            <div className="row g-3 justify-content-center">
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="0">
                  <div className="catcard active" data-filter="all">
                     <img className="catimg" src="img/category/1.jpg" alt=""/>
                     <div className="catnm">All Items</div>
                     <div className="catct">99 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="70">
                  <div className="catcard" data-filter="burgers">
                     <img className="catimg" src="img/category/2.jpg" alt=""/>
                     <div className="catnm">Burgers</div>
                     <div className="catct">24 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="140">
                  <div className="catcard" data-filter="pizza">
                     <img className="catimg" src="img/category/3.jpg" alt=""/>
                     <div className="catnm">Pizza</div>
                     <div className="catct">18 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="210">
                  <div className="catcard" data-filter="chicken">
                     <img className="catimg" src="img/category/4.jpg" alt=""/>
                     <div className="catnm">Fried Chicken</div>
                     <div className="catct">15 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="280">
                  <div className="catcard" data-filter="wraps">
                     <img className="catimg" src="img/category/5.jpg" alt=""/>
                     <div className="catnm">Wraps</div>
                     <div className="catct">12 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="350">
                  <div className="catcard" data-filter="desserts">
                     <img className="catimg" src="img/category/6.jpg" alt=""/>
                     <div className="catnm">Desserts</div>
                     <div className="catct">20 items</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
}
export default Home;
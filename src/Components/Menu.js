import React, { useState } from "react";

function Menu() {
  const [filter, setFilter] = useState("all");

  const menuItems = [
    { id: 1, cat: "burgers", title: "Classic Smash Burger", price: "$14.99", old: "$18.99", desc: "Double smashed patty, cheddar, caramelized onions, pickles & special sauce", img: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=500", badge: "Hot" },
    { id: 2, cat: "pizza", title: "Margherita Royale", price: "$19.99", old: "$24.99", desc: "San Marzano tomatoes, buffalo mozzarella, basil & truffle oil on sourdough", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500", badge: "New" },
    { id: 3, cat: "chicken", title: "Nashville Hot Chicken", price: "$12.99", old: "$16.99", desc: "Crispy fried chicken in fiery Nashville spice blend with honey drizzle", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500", badge: "Best Seller" },
    { id: 4, cat: "wraps", title: "Loaded Fajita Wrap", price: "$10.99", old: "", desc: "Grilled chicken, peppers, sour cream & guacamole in a warm tortilla", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500", badge: "" },
    { id: 5, cat: "desserts", title: "Nutella Lava Cake", price: "$8.99", old: "$11.99", desc: "Molten chocolate cake with Nutella center, vanilla ice cream & caramel", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500", badge: "New" },
    { id: 6, cat: "pasta", title: "Truffle Mushroom Pasta", price: "$16.99", old: "", desc: "Al dente tagliatelle, wild mushrooms, black truffle, parmesan & thyme", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500", badge: "Chef's Pick" },
  ];

  const filtered = filter === "all" ? menuItems : menuItems.filter(i => i.cat === filter);

  return (
    <section id="menu" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="slbl">What's Cooking</span>
          <h2 className="stitle">Our Delicious <span>Menu</span></h2>
          <div className="sline"></div>
        </div>

        <div className="text-center mb-4">
          {["all", "burgers", "pizza", "chicken", "wraps", "desserts", "pasta"].map(c => (
            <button key={c} className={`filtbtn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map(item => (
            <div className="col-sm-6 col-lg-4 mwrap" key={item.id}>
              <div className="mcard">
                <div className="mimg">
                  <img src={item.img} alt={item.title} />
                  {item.badge && <div className="mbdg hot"><i className="fas fa-star"></i> {item.badge}</div>}
                  <div className="mhrt"><i className="far fa-heart"></i></div>
                </div>
                <div className="mbody">
                  <div className="mcat">{item.cat}</div>
                  <div className="mtit">{item.title}</div>
                  <div className="mdesc">{item.desc}</div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">{item.price} {item.old && <small>{item.old}</small>}</div>
                    </div>
                    <button className="madd"><i className="fas fa-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5"><a href="#!" className="btn-red"><i className="fas fa-th-large"></i> View Full Menu</a></div>
      </div>
    </section>
  )
}
export default Menu;
// import React, { useState } from "react";
// import "./Sidebar.css";
// import logo_grow from "../Assets/Logo/logo.png";
// import logo from "../Assets/Logo/apple-touch-icon-60x60.png";
// import { AiOutlineHome } from "react-icons/ai";
// import { IoPeopleOutline } from "react-icons/io5";
// import { TfiFolder } from "react-icons/tfi";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { SlCallIn } from "react-icons/sl";
// import { SlUser } from "react-icons/sl";
// import { FiCreditCard } from "react-icons/fi";
// import { TfiBookmarkAlt } from "react-icons/tfi";
// import { LuFilePen } from "react-icons/lu";
// import { FiMessageSquare } from "react-icons/fi";
// import { LiaChartBarSolid } from "react-icons/lia";
// import { RightOutlined } from "@ant-design/icons";
// import { AiOutlineDown } from "react-icons/ai";

// const Sidebar = ({ isOpen }) => {

//   const [openMenu, setOpenMenu] = useState(null);

//   const handleClick=(menu)=>{
//     setOpenMenu(openMenu === menu ? null : menu);
//   }
//   return (
//     <div>
//         {isOpen ? (
//             <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src={logo_grow} alt="App Logo"/>
//       </div>
//       <ul className="sidebar-menu">
//         <li><div className="menu-item"><span className="left"><AiOutlineHome size={22} /> Dashboard</span></div></li>
//         <li><div className="menu-item" onClick={() => handleClick('customers')}><span className="left"><IoPeopleOutline size={22} /> Customers</span> <div className="arrow">{openMenu=== "customers" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="customers" ? "open":""}`}>
//           <div>Client</div>
//           <div>Client Users</div>
//         </div>
//         </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('projects')}><span className="left"><TfiFolder size={22}/> Projects</span> <div className="arrow">{openMenu=== "projects" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="projects" ? "open":""}`}>
//           <div>Projects</div>
//           <div>Templates</div>
//         </div>
//         </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('tasks')}><span className="left"><TfiMenuAlt size={22}/> Tasks</span></div></li>
//         <li><div className="menu-item" onClick={() => handleClick('leads')}><span className="left"><SlCallIn size={22}/> Leads</span> </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('sales')}><span className="left"><FiCreditCard size={22}/> Sales</span> <div className="arrow">{openMenu=== "sales" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="customers" ? "open":""}`}>
//           <div>Invoices</div>
//           <div>Payments</div>
//           <div>Estimates</div>
//           <div>Subscription</div>
//           <div>Products</div>
//           <div>Expenses</div>
//         </div>
//         </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('proposals')}><span className="left"><TfiBookmarkAlt size={22}/> Proposals</span> <div className="arrow">{openMenu=== "proposals" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="proposals" ? "open":""}`}>
//           <div>Proposals</div>
//           <div>Templates</div>
//         </div>
//         </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('contracts')}><span className="left"><LuFilePen size={22}/> Contracts</span> <div className="arrow">{openMenu=== "contracts" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="contracts" ? "open":""}`}>
//           <div>Contracts</div>
//           <div>Templates</div>
//         </div>
//         </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('support')}><span className="left"><FiMessageSquare size={22}/> Support</span> <div className="arrow">{openMenu=== "support" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="support" ? "open":""}`}>
//           <div>Tickets</div>
//           <div>Canned</div>
//           <div>Knowledgebase</div>
//           <div>Messages</div>
//         </div>
//         </div></li>
//         <li><div className="menu-item" onClick={() => handleClick('team')}><span className="left"><SlUser size={22}/> Team</span> <div className="arrow">{openMenu=== "team" ? <RightOutlined className="right-icon"/> : <AiOutlineDown/>}</div>
//         <div className={`submenu ${openMenu==="customers" ? "open":""}`}>
//           <div>Team Members</div>
//           <div>Time Sheets</div>
//         </div>
//          </div></li>
//         <li><div className="menu-item"><span className="left"><LiaChartBarSolid size={22}/> Reports</span></div></li>
//       </ul>
//     </div>
//         ):(
//             <div className="close_sidebar">
//       <div className="sidebar-logo">
//         <img src={logo} alt="App Logo"/>
//       </div>
//       <ul className="sidebar-menu">
//         <li><AiOutlineHome size={22} /> </li>
//         <li><IoPeopleOutline size={22} /> </li>
//         <li><TfiFolder size={22}/> </li>
//         <li><TfiMenuAlt size={22}/> </li>
//         <li><SlCallIn size={22}/> </li>
//         <li><FiCreditCard size={22}/> </li>
//         <li><TfiBookmarkAlt size={22}/>  </li>
//         <li><LuFilePen size={22}/>  </li>
//         <li><FiMessageSquare size={22}/> </li>
//         <li><SlUser size={22}/></li>
//         <li><LiaChartBarSolid size={22}/></li>
//       </ul>
//     </div>
//         )}
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import "./Sidebar.css";
// import logo_grow from "../Assets/Logo/logo.png";
// import logo from "../Assets/Logo/apple-touch-icon-60x60.png";

// import { AiOutlineHome, AiOutlineDown } from "react-icons/ai";
// import { IoPeopleOutline } from "react-icons/io5";
// import { TfiFolder, TfiMenuAlt, TfiBookmarkAlt } from "react-icons/tfi";
// import { SlCallIn, SlUser } from "react-icons/sl";
// import { FiCreditCard, FiMessageSquare } from "react-icons/fi";
// import { LuFilePen } from "react-icons/lu";
// import { LiaChartBarSolid } from "react-icons/lia";
// import { RightOutlined } from "@ant-design/icons";

// const Sidebar = ({ isOpen }) => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const handleClick = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <div>
//       {isOpen ? (
//         <div className="sidebar">
//           <div className="sidebar-logo">
//             <img src={logo_grow} alt="App Logo" />
//           </div>

//           <ul className="sidebar-menu">
//             <li>
//               <div className="menu-item">
//                 <span className="left">
//                   <AiOutlineHome size={22} /> Dashboard
//                 </span>
//               </div>
//             </li>

//             {/* Customers */}
//             <li>
//               <div
//                 className="menu-item"
//                 onClick={() => handleClick("customers")}
//               >
//                 <span className="left">
//                   <IoPeopleOutline size={22} /> Customers
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "customers" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div
//                 className={`submenu ${openMenu === "customers" ? "open" : ""}`}
//               >
//                 <div className="submenu-item">Client</div>
//                 <div className="submenu-item">Client Users</div>
//               </div>
//             </li>

//             {/* Projects */}
//             <li>
//               <div
//                 className="menu-item"
//                 onClick={() => handleClick("projects")}
//               >
//                 <span className="left">
//                   <TfiFolder size={22} /> Projects
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "projects" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div
//                 className={`submenu ${openMenu === "projects" ? "open" : ""}`}
//               >
//                 <div className="submenu-item">Projects</div>
//                 <div className="submenu-item">Templates</div>
//               </div>
//             </li>

//             {/* Tasks */}
//             <li>
//               <div className="menu-item">
//                 <span className="left">
//                   <TfiMenuAlt size={22} /> Tasks
//                 </span>
//               </div>
//             </li>

//             {/* Leads */}
//             <li>
//               <div className="menu-item">
//                 <span className="left">
//                   <SlCallIn size={22} /> Leads
//                 </span>
//               </div>
//             </li>

//             {/* Sales */}
//             <li>
//               <div className="menu-item" onClick={() => handleClick("sales")}>
//                 <span className="left">
//                   <FiCreditCard size={22} /> Sales
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "sales" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div className={`submenu ${openMenu === "sales" ? "open" : ""}`}>
//                 <div className="submenu-item">Invoices</div>
//                 <div className="submenu-item">Payments</div>
//                 <div className="submenu-item">Estimates</div>
//                 <div className="submenu-item">Subscription</div>
//                 <div className="submenu-item">Products</div>
//                 <div className="submenu-item">Expenses</div>
//               </div>
//             </li>

//             {/* Proposals */}
//             <li>
//               <div
//                 className="menu-item"
//                 onClick={() => handleClick("proposals")}
//               >
//                 <span className="left">
//                   <TfiBookmarkAlt size={22} /> Proposals
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "proposals" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div
//                 className={`submenu ${openMenu === "proposals" ? "open" : ""}`}
//               >
//                 <div className="submenu-item">Proposals</div>
//                 <div className="submenu-item">Templates</div>
//               </div>
//             </li>

//             {/* Contracts */}
//             <li>
//               <div
//                 className="menu-item"
//                 onClick={() => handleClick("contracts")}
//               >
//                 <span className="left">
//                   <LuFilePen size={22} /> Contracts
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "contracts" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div
//                 className={`submenu ${openMenu === "contracts" ? "open" : ""}`}
//               >
//                 <div className="submenu-item">Contracts</div>
//                 <div className="submenu-item">Templates</div>
//               </div>
//             </li>

//             {/* Support */}
//             <li>
//               <div
//                 className="menu-item"
//                 onClick={() => handleClick("support")}
//               >
//                 <span className="left">
//                   <FiMessageSquare size={22} /> Support
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "support" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div
//                 className={`submenu ${openMenu === "support" ? "open" : ""}`}
//               >
//                 <div className="submenu-item">Tickets</div>
//                 <div className="submenu-item">Canned</div>
//                 <div className="submenu-item">Knowledgebase</div>
//                 <div className="submenu-item">Messages</div>
//               </div>
//             </li>

//             {/* Team */}
//             <li>
//               <div className="menu-item" onClick={() => handleClick("team")}>
//                 <span className="left">
//                   <SlUser size={22} /> Team
//                 </span>
//                 <div className="arrow">
//                   {openMenu === "team" ? (
//                     <RightOutlined className="right-icon" />
//                   ) : (
//                     <AiOutlineDown />
//                   )}
//                 </div>
//               </div>
//               <div className={`submenu ${openMenu === "team" ? "open" : ""}`}>
//                 <div className="submenu-item">Team Members</div>
//                 <div className="submenu-item">Time Sheets</div>
//               </div>
//             </li>

//             {/* Reports */}
//             <li>
//               <div className="menu-item">
//                 <span className="left">
//                   <LiaChartBarSolid size={22} /> Reports
//                 </span>
//               </div>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <div className="close_sidebar">
//           <div className="sidebar-logo">
//             <img src={logo} alt="App Logo" />
//           </div>
//           <ul className="sidebar-menu">
//             <li>
//               <AiOutlineHome size={22} />
//             </li>
//             <li>
//               <IoPeopleOutline size={22} />
//             </li>
//             <li>
//               <TfiFolder size={22} />
//             </li>
//             <li>
//               <TfiMenuAlt size={22} />
//             </li>
//             <li>
//               <SlCallIn size={22} />
//             </li>
//             <li>
//               <FiCreditCard size={22} />
//             </li>
//             <li>
//               <TfiBookmarkAlt size={22} />
//             </li>
//             <li>
//               <LuFilePen size={22} />
//             </li>
//             <li>
//               <FiMessageSquare size={22} />
//             </li>
//             <li>
//               <SlUser size={22} />
//             </li>
//             <li>
//               <LiaChartBarSolid size={22} />
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import "./Sidebar.css";
import logo_grow from "../Assets/Logo/logo.png";
import logo from "../Assets/Logo/apple-touch-icon-60x60.png";

import { AiOutlineHome, AiOutlineDown } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { TfiFolder, TfiMenuAlt, TfiBookmarkAlt } from "react-icons/tfi";
import { SlCallIn, SlUser } from "react-icons/sl";
import { FiCreditCard, FiMessageSquare } from "react-icons/fi";
import { LuFilePen } from "react-icons/lu";
import { LiaChartBarSolid } from "react-icons/lia";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Arrow toggle function
  const renderArrow = (menu) => {
    return openMenu === menu ? (
      <AiOutlineDown />
    ) : (
      <RightOutlined className="right-icon" />
    );
  };

  return (
    <div>
      {isOpen ? (
        <div className="sidebar">
          <div className="sidebar-logo">
            <img src={logo_grow} alt="App Logo" />
          </div>

          <ul className="sidebar-menu">
            {/* Dashboard */}
            <li>
              <div className="menu-item">
                <span className="left">
                  <AiOutlineHome size={22} /> <Link to="/" className="link">Dashboard</Link>
                </span>
              </div>
            </li>

            {/* Customers */}
            <li>
              <div className="menu-item" onClick={() => handleClick("customers")}>
                <span className="left">
                  <IoPeopleOutline size={22} /> Customers
                </span>
                <div className="arrow">{renderArrow("customers")}</div>
              </div>
              <div className={`submenu ${openMenu === "customers" ? "open" : ""}`}>
                <div className="submenu-item"><Link to="/clients" className="link">Client</Link></div>
                <div className="submenu-item"><Link to="#client-users" className="link">Client Users</Link></div>
              </div>
            </li>

            {/* Projects */}
            <li>
              <div className="menu-item" onClick={() => handleClick("projects")}>
                <span className="left">
                  <TfiFolder size={22} /> Projects
                </span>
                <div className="arrow">{renderArrow("projects")}</div>
              </div>
              <div className={`submenu ${openMenu === "projects" ? "open" : ""}`}>
                <div className="submenu-item">Projects</div>
                <div className="submenu-item">Templates</div>
              </div>
            </li>

            {/* Tasks */}
            <li>
              <div className="menu-item">
                <span className="left">
                  <TfiMenuAlt size={22} /> Tasks
                </span>
              </div>
            </li>

            {/* Leads */}
            <li>
              <div className="menu-item">
                <span className="left">
                  <SlCallIn size={22} /> Leads
                </span>
              </div>
            </li>

            {/* Sales */}
            <li>
              <div className="menu-item" onClick={() => handleClick("sales")}>
                <span className="left">
                  <FiCreditCard size={22} /> Sales
                </span>
                <div className="arrow">{renderArrow("sales")}</div>
              </div>
              <div className={`submenu ${openMenu === "sales" ? "open" : ""}`}>
                <div className="submenu-item">Invoices</div>
                <div className="submenu-item">Payments</div>
                <div className="submenu-item">Estimates</div>
                <div className="submenu-item">Subscription</div>
                <div className="submenu-item">Products</div>
                <div className="submenu-item">Expenses</div>
              </div>
            </li>

            {/* Proposals */}
            <li>
              <div className="menu-item" onClick={() => handleClick("proposals")}>
                <span className="left">
                  <TfiBookmarkAlt size={22} /> Proposals
                </span>
                <div className="arrow">{renderArrow("proposals")}</div>
              </div>
              <div className={`submenu ${openMenu === "proposals" ? "open" : ""}`}>
                <div className="submenu-item">Proposals</div>
                <div className="submenu-item">Templates</div>
              </div>
            </li>

            {/* Contracts */}
            <li>
              <div className="menu-item" onClick={() => handleClick("contracts")}>
                <span className="left">
                  <LuFilePen size={22} /> Contracts
                </span>
                <div className="arrow">{renderArrow("contracts")}</div>
              </div>
              <div className={`submenu ${openMenu === "contracts" ? "open" : ""}`}>
                <div className="submenu-item">Contracts</div>
                <div className="submenu-item">Templates</div>
              </div>
            </li>

            {/* Support */}
            <li>
              <div className="menu-item" onClick={() => handleClick("support")}>
                <span className="left">
                  <FiMessageSquare size={22} /> Support
                </span>
                <div className="arrow">{renderArrow("support")}</div>
              </div>
              <div className={`submenu ${openMenu === "support" ? "open" : ""}`}>
                <div className="submenu-item">Tickets</div>
                <div className="submenu-item">Canned</div>
                <div className="submenu-item">Knowledgebase</div>
                <div className="submenu-item">Messages</div>
              </div>
            </li>

            {/* Team */}
            <li>
              <div className="menu-item" onClick={() => handleClick("team")}>
                <span className="left">
                  <SlUser size={22} /> Team
                </span>
                <div className="arrow">{renderArrow("team")}</div>
              </div>
              <div className={`submenu ${openMenu === "team" ? "open" : ""}`}>
                <div className="submenu-item">Team Members</div>
                <div className="submenu-item">Time Sheets</div>
              </div>
            </li>

            {/* Reports */}
            <li>
              <div className="menu-item">
                <span className="left">
                  <LiaChartBarSolid size={22} /> Reports
                </span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="close_sidebar">
          <div className="sidebar-logo">
            <img src={logo} alt="App Logo" />
          </div>
          <ul className="sidebar-menu">
            <li><AiOutlineHome size={22} /></li>
            <li><IoPeopleOutline size={22} /></li>
            <li><TfiFolder size={22} /></li>
            <li><TfiMenuAlt size={22} /></li>
            <li><SlCallIn size={22} /></li>
            <li><FiCreditCard size={22} /></li>
            <li><TfiBookmarkAlt size={22} /></li>
            <li><LuFilePen size={22} /></li>
            <li><FiMessageSquare size={22} /></li>
            <li><SlUser size={22} /></li>
            <li><LiaChartBarSolid size={22} /></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

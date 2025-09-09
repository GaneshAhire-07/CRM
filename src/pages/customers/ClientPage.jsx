// import React from 'react'

// const ClientPage = () => {
//   return (
//     <div className="client">
//       <span>Clients</span>
//       <p>Welcome to the client page. Here you can manage your clients.</p>
//     </div>
//   );
// }

// export default ClientPage;

import React from "react";
import "./ClientPage.css";
import { SearchOutlined } from "@ant-design/icons";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsBoxArrowDown } from "react-icons/bs";
import { BsBoxArrowUp } from "react-icons/bs";


const ClientPage = () => {
  return (
    <div className="client">
      <div className="client-container">
      <div className="client-header">
        {/* <h1 className="page-title">Clients</h1> */}
      {/* <p className="breadcrumb">APP &gt; CLIENTS</p> */}
      </div>

      <div className="client-actions">
        <div className="search-bar">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
      </div>
        <button>
          <FaArrowTrendUp />
        </button>
        <button>
          <BsBoxArrowDown />
        </button>
        <button>
          <BsBoxArrowUp />
        </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;



// src/pages/Clients.jsx
// import React from "react";
// import {
//   FiSearch,
//   FiBarChart2,
//   FiDownload,
//   FiUpload,
//   FiFilter,
//   FiTrash2,
//   FiMail,
//   FiEdit2,
// } from "react-icons/fi";

// const Clients = () => {
//   const clients = [
//     {
//       id: 7,
//       company: "Fast Applications Inc",
//       owner: "Amy Davis",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//       projects: 0,
//       invoices: "$490.00",
//       tags: ["infographic-design"],
//       category: "Default",
//       status: "Active",
//     },
//     {
//       id: 17,
//       company: "Rapid Software Inc",
//       owner: "Megan Washington",
//       avatar: "https://randomuser.me/api/portraits/women/45.jpg",
//       projects: 4,
//       invoices: "$2,204.40",
//       tags: ["logo-design"],
//       category: "Default",
//       status: "Active",
//     },
//     {
//       id: 20,
//       company: "Bella Shoes & Bags Pvt",
//       owner: "Judith Grant",
//       avatar: "https://randomuser.me/api/portraits/women/46.jpg",
//       projects: 0,
//       invoices: "$75.00",
//       tags: ["seo-marketing"],
//       category: "Default",
//       status: "Active",
//     },
//     {
//       id: 1,
//       company: "Dellon Inc",
//       owner: "Jill Rawson",
//       avatar: "https://randomuser.me/api/portraits/women/47.jpg",
//       projects: 1,
//       invoices: "$560.00",
//       tags: ["web-design"],
//       category: "Default",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="p-6">
//       {/* Page Title */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-semibold text-blue-600">Clients</h1>
//         <p className="text-gray-500 text-sm">APP &gt; CLIENTS</p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <p className="text-gray-500">Clients</p>
//           <h2 className="text-xl font-bold">10</h2>
//           <div className="h-1 bg-blue-400 mt-2"></div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <p className="text-gray-500">Projects</p>
//           <h2 className="text-xl font-bold">15</h2>
//           <div className="h-1 bg-blue-400 mt-2"></div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <p className="text-gray-500">Invoices</p>
//           <h2 className="text-xl font-bold">$14,687.47</h2>
//           <div className="h-1 bg-purple-400 mt-2"></div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <p className="text-gray-500">Payments</p>
//           <h2 className="text-xl font-bold">$14,653.77</h2>
//           <div className="h-1 bg-black mt-2"></div>
//         </div>
//       </div>

//       {/* Toolbar */}
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded shadow w-64">
//           <FiSearch className="text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="outline-none w-full text-sm"
//           />
//         </div>
//         <div className="flex space-x-2">
//           <button className="p-2 bg-white rounded shadow">
//             <FiBarChart2 />
//           </button>
//           <button className="p-2 bg-white rounded shadow">
//             <FiUpload />
//           </button>
//           <button className="p-2 bg-white rounded shadow">
//             <FiDownload />
//           </button>
//           <button className="p-2 bg-white rounded shadow">
//             <FiFilter />
//           </button>
//           <button className="p-3 bg-red-500 text-white rounded-full shadow">+</button>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <table className="w-full text-left text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3">ID</th>
//               <th className="p-3">Company Name</th>
//               <th className="p-3">Account Owner</th>
//               <th className="p-3">Pending Projects</th>
//               <th className="p-3">Invoices</th>
//               <th className="p-3">Tags</th>
//               <th className="p-3">Category</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((c) => (
//               <tr key={c.id} className="border-t">
//                 <td className="p-3">{c.id}</td>
//                 <td className="p-3">{c.company}</td>
//                 <td className="p-3 flex items-center space-x-2">
//                   <img
//                     src={c.avatar}
//                     alt={c.owner}
//                     className="w-6 h-6 rounded-full"
//                   />
//                   <span>{c.owner}</span>
//                 </td>
//                 <td className="p-3">{c.projects}</td>
//                 <td className="p-3">{c.invoices}</td>
//                 <td className="p-3">
//                   {c.tags.map((t, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-200 text-xs px-2 py-1 rounded mr-1"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </td>
//                 <td className="p-3">{c.category}</td>
//                 <td className="p-3 text-blue-600 font-medium">{c.status}</td>
//                 <td className="p-3 flex space-x-2">
//                   <button className="text-red-500">
//                     <FiTrash2 />
//                   </button>
//                   <button className="text-blue-500">
//                     <FiMail />
//                   </button>
//                   <button className="text-green-500">
//                     <FiEdit2 />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Clients;

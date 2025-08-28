// import React from "react";
// import "./DashboardCard.css";

// const ClientCard = ({ value, label, color }) => {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <div className="card-text">
//           <h3>{value}</h3>
//           <p>{label}</p>
//         </div>
//       </div>
//       <div className="card-border" style={{ backgroundColor: color }}></div>
//     </div>
//   );
// };

// export default ClientCard;


import React from "react";
import "./ClientCard.css";

const ClientCard = ({ value, label, color }) => {
  return (
    <div className="card">
      <h2 className="card-value">{value}</h2>
      <p className="card-label">{label}</p>
      <div className="card-line" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ClientCard;

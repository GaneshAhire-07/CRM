import React, { useState } from "react";
import ClientCard from "../../components/ClientCard";
import "./ClientPage.css";
import Card from "../../components/ClientCard";
import { SearchOutlined } from "@ant-design/icons";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuArrowDownToLine, LuFilter } from "react-icons/lu";
import {
  MdOutlineEmail,
  MdOutlineFileDownload,
  MdOutlineFileUpload,
} from "react-icons/md";
import { FiPlus, FiUsers } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { TfiPin2 } from "react-icons/tfi";
import { HiOutlineStar } from "react-icons/hi";
import EditClient from "../../components/client/EditClient";
import ClientEmail from "../../components/client/ClientEmail";
import ImportClientsModal from "../../components/client/ImportClient";
import ExportClientsModal from "../../components/client/ExportClients";
import FilterClientsModal from "../../components/client/FilterClients";
import AddClient from "../../components/client/AddClient";

const clients = [
  {
    id: 7,
    company: "Fast Applications Inc",
    owner: "Amy Davis",
    pending: 0,
    invoices: "$490.00",
    tags: ["infographic-design", "catlog-design", "branding services"],
    category: "Default",
    status: "Active",
    description: "This is a sample description for Fast Applications Inc.",
    billing_address: {
      street: "10 Septa Drive",
      city: "Rochester",
      state: "kent",
      zip: "X12 6DT",
      country: "United Kingdom",
      telephone: "032519313937",
      website: "www.fastapplications.com",
      vat_number: "AS263628GX",
    },
    shipping_address: {
      street: "10 Septa Drive",
      city: "Rochester",
      state: "kent",
      zip: "X12 6DT",
      country: "United Kingdom",
    },
    enabled_modules: "User System Setting",
    more: {
      vat: "This is a sample VAT info.",
      last_project: "04/07/2021",
      Comment: "Priority client",
      project_type: "Web Development",
    },
  },
  {
    id: 17,
    company: "Rapid Software Inc",
    owner: "Megan Washington",
    pending: 4,
    invoices: "$2,204.40",
    tags: ["logo-design"],
    category: "Default",
    status: "Active",
    description: "",
    billing_address: {
      street: "45 Alpha Street",
      city: "San Francisco",
      state: "California",
      zip: "CA 94105",
      country: "USA",
      telephone: "415-555-1234",
      website: "www.rapidsoftware.com",
      vat_number: "RS1234567",
    },
  },
  {
    id: 20,
    company: "Bella Shoes & Bags Pvt",
    owner: "Judith Grant",
    pending: 0,
    invoices: "$75.00",
    tags: ["seo-marketing"],
    category: "Default",
    status: "Active",
    description: " This is a sample description for Bella Shoes & Bags Pvt.",
    billing_address: {
      street: "789 Fashion Ave",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      telephone: "212-555-7890",
      website: "www.bellashoes.com",
      vat_number: "BSB9876543",
    },
  },
  {
    id: 1,
    company: "Dellon Inc",
    owner: "Jill Rawson",
    pending: 1,
    invoices: "$560.00",
    tags: ["web-design"],
    category: "Default",
    status: "Active",
    description: " This is a sample description for Dellon Inc.",
    billing_address: {
      street: "123 Main St",
      city: "Los Angeles",
      state: "California",
      zip: "CA 90001",
      country: "USA",
      telephone: "310-555-1234",
      website: "www.dellon.com",
      vat_number: "DI1234567",
    },
  },
  {
    id: 8,
    company: "Enco Power Company",
    owner: "Elleno Winsor",
    pending: 1,
    invoices: "$2,048.00",
    tags: ["website-maintenance", "product-design"],
    category: "Default",
    status: "Active",
    description: "This is a sample description for Enco Power Company.",
  },
];

const Clients = () => {
  const [openTagId, setOpenTagId] = useState(null);
  const [search, setSearch] = useState("");
  const [showStats, setShowStats] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const [clientsd, setClients] = useState(
    clients.map((c) => ({ ...c, pinned: false }))
  );
  const [popupType, setPopupType] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showExport, setShowExport] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    company: [],
    category: [],
    tags: [],
    status: [],
    vat: "",
    projectType: "",
    dateRange: [],
  });
  const [showAddClient, setShowAddClient] = useState(false);


  const filterClients = (clients, filters) => {
    return clients.filter((client) => {
      // Company
      if (filters.company.length > 0 && !filters.company.includes(client.company)) {
        return false;
      }

      // Category
      if (filters.category.length > 0 && !filters.category.includes(client.category)) {
        return false;
      }

      // Tags
      if (filters.tags.length > 0) {
        const hasTag = client.tags?.some((tag) => filters.tags.includes(tag));
        if (!hasTag) return false;
      }

      // Status
      if (filters.status.length > 0 && !filters.status.includes(client.status)) {
        return false;
      }

      // VAT (search inside billing_address.vat_number)
      if (
        filters.vat &&
        !client?.billing_address?.vat_number
          ?.toLowerCase()
          .includes(filters.vat.toLowerCase())
      ) {
        return false;
      }

      // Project Type
      if (filters.projectType && client?.more?.project_type !== filters.projectType) {
        return false;
      }

      // Date Range (last_project in DD/MM/YYYY)
      if (filters.dateRange.length === 2) {
        const clientDate = dayjs(client?.more?.last_project, "DD/MM/YYYY");
        if (!clientDate.isBetween(filters.dateRange[0], filters.dateRange[1], "day", "[]")) {
          return false;
        }
      }

      // Search text (check company and owner)
      if (
        search &&
        !client.company.toLowerCase().includes(search.toLowerCase()) &&
        !client.owner.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  // ✅ derive filteredClients
  const filteredClients = filterClients(clientsd, appliedFilters);

  const handleEditClick = (client) => {
    setSelectedClient(client);
    setPopupType("edit");
  };

  const handleEmailClick = (client) => {
    setSelectedClient(client);
    setPopupType("email");
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const handleSubmit = (id) => {
    alert("Updated Client ID: " + id);
    setSelectedClient(null);
  };


  const toggleTags = (id) => {
    setOpenTagId(openTagId === id ? null : id);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
  };

  const handleDelete = () => {
    setClients(clientsd.filter((c) => c.id !== deleteId));
    setDeleteId(null);
  };

  

  const handlePinClick = (id) => {
    setClients((prev) =>
      prev.map((c) => (c.id === id ? { ...c, pinned: !c.pinned } : c))
    );
  };

  return (
    <div className="clients-page">
      <div className="client-container">
        <div className="client-header">
          <h1 className="page-title">Clients</h1>
          <p className="breadcrumb">APP &gt; CLIENTS</p>
        </div>

        <div className="client-actions">
          <div className="search-bar">
            <SearchOutlined size={25} />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button onClick={() => setShowStats(!showStats)}>
            <FaArrowTrendUp
              size={25}
              color="#3a3a3a4e"
              style={{ marginLeft: "-5px" }}
            />
          </button>
          <button onClick={() => setShowImport(true)}>
            <MdOutlineFileDownload
              size={25}
              color="#3a3a3a4e"
              style={{ marginLeft: "-5px" }}
            />
          </button>
          <button onClick={() => setShowExport(true)}>
            <MdOutlineFileUpload
              size={25}
              color="#3a3a3a4e"
              style={{ marginLeft: "-5px" }}
            />
          </button>
          <button onClick={() => setShowFilter(true)}>
            <LuFilter
              size={25}
              color="#3a3a3a4e"
              style={{ marginLeft: "-5px" }}
            />
          </button>
          <div className="plus-btn" onClick={() => setShowAddClient(true)}>
            <FiPlus size={28} />
          </div>
        </div>
      </div>

      {showStats && (
        <div className="stats-container">
          <div className="stat-card">
            <ClientCard
              value={clients.length}
              label="Clients"
              color="#00c6a9"
            />
          </div>
          <div className="stat-card">
            <ClientCard
              value={clients.reduce((sum, c) => sum + c.pending, 0)}
              label="Projects"
              color="#5cc2fdff"
            />
          </div>
          <div className="stat-card">
            <ClientCard
              value={`$${clients
                .reduce(
                  (sum, c) => sum + parseFloat(c.invoices.replace(/[$,]/g, "")),
                  0
                )
                .toFixed(2)}`}
              label="Invoices"
              color="#8977feff"
            />
          </div>
          <div className="stat-card">
            <ClientCard value="$5200" label="Payments" color="#5e5e5eff" />
          </div>
        </div>
      )}

      <table className="clients-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Company Name</th>
            <th>Account Owner</th>
            <th>Pending Projects</th>
            <th>Invoices</th>
            <th>Tags</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.length > 0 ? (
            filteredClients.map((c) => (
              <tr key={c.id}>
                <td>{c.company}</td>
                <td>{c.owner}</td>
                <td>{c.pending}</td>
                <td>{c.invoices}</td>
                {/* <td>{c.tags}</td> */}
                <td className="tags-cell">
                  {c.tags[0]}
                  <button
                    className="ellipsis-btn"
                    onClick={() => toggleTags(c.id)}
                  >
                    ⋮
                  </button>
                  {openTagId === c.id && (
                    <div className="tags-popup">
                      <strong>All Tags</strong>
                      <ul>
                        {c.tags.map((tag, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </td>
                <td>{c.category}</td>
                <td>
                  <span className="status active">{c.status}</span>
                </td>
                <td>
                  <button
                    className="action-btn delete"
                    onClick={() => confirmDelete(c.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                  <button
                    className="action-btn edit"
                    onClick={() => handleEditClick(c)}
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="action-btn mail"
                    onClick={() => handleEmailClick(c)}
                  >
                    <MdOutlineEmail />
                  </button>
                  <button className="action-btn users">
                    <FiUsers />
                  </button>
                  <button
                    className={`action-btn ping ${c.pinned ? "pinned" : ""}`}
                    onClick={() => handlePinClick(c.id)}
                  >
                    <TfiPin2 />
                  </button>
                  <button className="action-btn star">
                    <HiOutlineStar />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showImport && (
        <ImportClientsModal
          onClose={() => setShowImport(false)}
          onImport={(newClients) => {
            setClients((prev) => [...prev, ...newClients]);
            setShowImport(false);
          }}
        />
      )}

      {showExport && (
        <ExportClientsModal
          onClose={() => setShowExport(false)}
          clients={clientsd}
          visible={showExport}
        />
      )}

      {showFilter && (
        <FilterClientsModal
          visible={showFilter}
          clients={clientsd}
          onClose={() => setShowFilter(false)}
          onApply={(filters) => {
            setAppliedFilters(filters);
            setShowFilter(false);
          }}
          onReset={() =>
            setAppliedFilters({
              company: [],
              category: [],
              tags: [],
              status: [],
              vat: "",
              projectType: "",
              dateRange: [],
            })
          }
        />
      )}

      {showAddClient && (
        <AddClient
          onClose={() => setShowAddClient(false)}
          onSubmit={(newClient) => {
            setClients((prev) => [
              ...prev,
              { ...newClient, id: Date.now(), pinned: false },
            ]);
            setShowAddClient(false);
          }}
        />
      )}

      {deleteId !== null && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Are you sure you want to delete this client?</p>
            <div className="popup-buttons">
              <button className="yes-btn" onClick={handleDelete}>
                Yes
              </button>
              <button className="no-btn" onClick={() => setDeleteId(null)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedClient && popupType === "edit" && (
        <div className="popup-overlay">
          <EditClient
            client={selectedClient}
            onClose={handleCloseModal}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      {selectedClient && popupType === "email" && (
        <div className="popup-overlay">
          <ClientEmail
            client={selectedClient}
            onClose={handleCloseModal}
            onSend={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Clients;

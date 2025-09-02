import React, { useState } from "react";
import "./EditClient.css";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { IoCloseSharp } from "react-icons/io5";

const EditClient = ({ client, onClose, onSubmit }) => {
const [showDescription, setShowDescription] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [showAM, setShowAM] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState(client?.more?.comment || "");
    const [description, setDescription] = useState(client?.description || "");

  if (!client) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Client</h2>
          <button className="close-btn" onClick={onClose}>
            <IoCloseSharp />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(client.id);
          }}
        >
          <label>
            Company Name*
          </label>
          <input type="text" defaultValue={client.company} required />

          <label>
            Category*
          </label>
          <select type="text" defaultValue={client.category || "Default"} >
              <option>Default</option>
              <option>Web Development</option>
              <option>Content Marketing</option>
              <option>Graphic Design</option>
              <option>App Development</option>
            </select>

          <label>
            Status
          </label>
          <select defaultValue={client.status || "Active"}>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          <div className="toggle-section">
            <label>Description & Details</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={showDescription}
                onChange={() => setShowDescription(!showDescription)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {showDescription && (
            <div className="description-box">
              <ReactQuill
                value={description}
                onChange={(content) => setDescription(content)} 
                placeholder="Enter client description..."
                rows="6"
                defaultValue={client.description || ""}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
              />
            </div>
          )}

          <div className="toggle-section">
            <label>Billing Address</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={showBilling}
                onChange={() => setShowBilling(!showBilling)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {showBilling && (
            <div className="description-box">
              <label>Street</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.street || ""}
                placeholder="Street"
              />
              <label>City</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.city || ""}
                placeholder="City"
              />
              <label>State</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.state || ""}
                placeholder="State"
              />
              <label>ZIP Code</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.zip || ""}
                placeholder="ZIP Code"
              />
              <label>Country</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.country || ""}
                placeholder="Country"
              />
              <label>Telephone</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.telephone || ""}
                placeholder="Telephone"
              />
              <label>Website</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.website || ""}
                placeholder="Website"
              />
              <label>VAT/TAX Number</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.vat_number || ""}
                placeholder="VAT/TAX Number"
              />
            </div>
          )}

          <div className="toggle-section">
            <label>Shipping Address</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={showShipping}
                onChange={() => setShowShipping(!showShipping)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {showShipping && (
            <div className="description-box">
              <label>Street</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.street || ""}
                placeholder="Street"
              />
              <label>City</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.city || ""}
                placeholder="City"
              />
              <label>State</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.state || ""}
                placeholder="State"
              />
              <label>ZIP Code</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.zip || ""}
                placeholder="ZIP Code"
              />
              <label>Country</label>
              <input
                type="text"
                defaultValue={client?.billing_address?.country || ""}
                placeholder="Country"
              />
            </div>
          )}

          <div className="toggle-section">
            <label>App Modules</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={showAM}
                onChange={() => setShowAM(!showAM)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {showAM && (
            <div className="description-box">
              <label>App Modules</label>
              <select type="text" defaultValue={client.app_module || ""} >
              <option>Use System Settings</option>
              <option>Use Custome Settings</option>
              </select>
            </div>
          )}

          <div className="toggle-section">
            <label>More Information</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={showMore}
                onChange={() => setShowMore(!showMore)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {showMore && (
            <div className="description-box">
              <label>VAT</label>
              <input
                type="text"
                defaultValue={client?.more?.vat || ""}
                placeholder="vat"
              />
              <label>Last Project</label>
              <input
                type="text"
                defaultValue={client?.more?.last_project || ""}
                placeholder="last project date"
              />
              <label>Comment</label>
              <div className="description-box">
              <ReactQuill
                value={comment}
                onChange={(content) => setComment(content)} 
                placeholder="Enter comment..."
                rows="6"
                defaultValue={client?.more?.comment || ""}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
              />
            </div>

            <label>Project Type</label>
              <select
                type="text"
                defaultValue={client?.billing_address?.street || ""}
                placeholder="Street"
              />
            </div>
          )}


          <div className="modal-footer">
            <button type="button" onClick={onClose} className="close-btn">
              Close
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClient;

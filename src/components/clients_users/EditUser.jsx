// import React, { useState } from 'react';

// const initialState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     telephone: '',
//     position: '',
//     timeZone: '',
//     socialToggle: false,
//     social: {
//         twitter: '',
//         facebook: '',
//         linkedin: '',
//         github: '',
//         dribbble: '',
//     },
// };

// const timeZones = [
//     'UTC−12:00',
//     'UTC−11:00',
//     'UTC−10:00',
//     'UTC−09:00',
//     'UTC−08:00',
//     'UTC−07:00',
//     'UTC−06:00',
//     'UTC−05:00',
//     'UTC−04:00',
//     'UTC−03:00',
//     'UTC−02:00',
//     'UTC−01:00',
//     'UTC±00:00',
//     'UTC+01:00',
//     'UTC+02:00',
//     'UTC+03:00',
//     'UTC+04:00',
//     'UTC+05:00',
//     'UTC+06:00',
//     'UTC+07:00',
//     'UTC+08:00',
//     'UTC+09:00',
//     'UTC+10:00',
//     'UTC+11:00',
//     'UTC+12:00',
// ];

// export default function EditUser({ onClose, onSubmit }) {
//     const [form, setForm] = useState(initialState);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (name === 'socialToggle') {
//             setForm((prev) => ({ ...prev, socialToggle: checked }));
//         } else if (name.startsWith('social.')) {
//             const key = name.split('.')[1];
//             setForm((prev) => ({
//                 ...prev,
//                 social: { ...prev.social, [key]: value },
//             }));
//         } else {
//             setForm((prev) => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (onSubmit) onSubmit(form);
//     };

//     return (
//         <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
//             <h2>Edit User</h2>
//             <div>
//                 <label>First Name</label>
//                 <input name="firstName" value={form.firstName} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Last Name</label>
//                 <input name="lastName" value={form.lastName} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Email</label>
//                 <input name="email" type="email" value={form.email} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Telephone</label>
//                 <input name="telephone" value={form.telephone} onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Position</label>
//                 <input name="position" value={form.position} onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Time Zone</label>
//                 <select name="timeZone" value={form.timeZone} onChange={handleChange}>
//                     <option value="">Select Time Zone</option>
//                     {timeZones.map((tz) => (
//                         <option key={tz} value={tz}>{tz}</option>
//                     ))}
//                 </select>
//             </div>
//             <div style={{ margin: '16px 0' }}>
//                 <label>
//                     <input
//                         type="checkbox"
//                         name="socialToggle"
//                         checked={form.socialToggle}
//                         onChange={handleChange}
//                     />{' '}
//                     Social Profile
//                 </label>
//             </div>
//             {form.socialToggle && (
//                 <div style={{ marginBottom: 16, paddingLeft: 16 }}>
//                     <div>
//                         <label>Twitter</label>
//                         <input name="social.twitter" value={form.social.twitter} onChange={handleChange} />
//                     </div>
//                     <div>
//                         <label>Facebook</label>
//                         <input name="social.facebook" value={form.social.facebook} onChange={handleChange} />
//                     </div>
//                     <div>
//                         <label>LinkedIn</label>
//                         <input name="social.linkedin" value={form.social.linkedin} onChange={handleChange} />
//                     </div>
//                     <div>
//                         <label>GitHub</label>
//                         <input name="social.github" value={form.social.github} onChange={handleChange} />
//                     </div>
//                     <div>
//                         <label>Dribbble</label>
//                         <input name="social.dribbble" value={form.social.dribbble} onChange={handleChange} />
//                     </div>
//                 </div>
//             )}
//             <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
//                 <button type="button" onClick={onClose}>Close</button>
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     );
// }

import React from "react";
import { Modal, Form, Input, Select } from "antd";

const { Option } = Select;

const EditUser = ({ visible, onOk, onCancel, record, clients, form }) => {
  return (
    <Modal
      title="Edit User"
      open={visible}   // if using antd v5, use "open". For v4, use "visible".
      onOk={onOk}
      onCancel={onCancel}
      okText="Save"
    >
      <Form form={form} layout="vertical" initialValues={record}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="client" label="Client" rules={[{ required: true }]}>
          <Select>
            {clients.map((client) => (
              <Option key={client} value={client}>
                {client}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUser;

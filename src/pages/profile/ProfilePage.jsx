import React, { useState, useRef } from "react";
import { Camera, Upload, X, Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProfileImageUpload = () => {
    const navigate = useNavigate(); 
  const handleGoBack = () => {
    window.history.back();
  };
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
  );
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const profileDetails = {
    name: "Faith Hamilton",
    email: "faith@example.com",
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setShowUploadOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!previewImage) return;

    setIsUploading(true);

    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update profile image
      setProfileImage(previewImage);
      setPreviewImage(null);

      // Show success message
      alert("Profile image updated successfully!");
    } catch (error) {
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Handle camera capture
  const handleCamera = () => {
    alert("Camera feature would be implemented here");
    setShowUploadOptions(false);
  };

  // Cancel preview
  const cancelPreview = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const menuItems = [
    { icon: "👤", label: "Update My Profile" },
    { icon: "⏰", label: "My Time Sheets" },
    { icon: "📝", label: "My Notes" },
    { icon: "🔔", label: "Notification Settings" },
    { icon: "🎨", label: "Change Theme" },
    { icon: "🔒", label: "Update Password" },
  ];

  return (
    <>
      <style jsx>{`
        .profile-container {
          min-height: 100vh;
          background-color: #f8fafc;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
        }

        .profile-card {
          max-width: 380px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .profile-header {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%);
          padding: 24px;
          text-align: center;
          color: white;
          position: relative;
        }

        .go-back-button {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          backdrop-filter: blur(10px);
        }

        .go-back-button:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .profile-image-container {
          position: relative;
          display: inline-block;
          margin: 20px 0 16px 0;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .profile-avatar:hover {
          transform: scale(1.05);
        }

        .camera-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          cursor: pointer;
        }

        .profile-image-container:hover .camera-overlay {
          opacity: 1;
        }

        .update-avatar-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 24px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .update-avatar-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .upload-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          padding: 6px 0;
          min-width: 180px;
          z-index: 20;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .upload-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 16px;
          border: none;
          background: none;
          color: #374151;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .upload-option:hover {
          background-color: #f3f4f6;
        }

        .preview-controls {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .preview-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .cancel-btn {
          background: #ef4444;
          color: white;
        }

        .cancel-btn:hover {
          background: #dc2626;
          transform: scale(1.1);
        }

        .confirm-btn {
          background: #10b981;
          color: white;
        }

        .confirm-btn:hover {
          background: #059669;
          transform: scale(1.1);
        }

        .confirm-btn:disabled {
          background: #86efac;
          cursor: not-allowed;
          transform: none;
        }

        .profile-info {
          padding: 28px 24px;
        }

        .profile-details {
          text-align: center;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f3f4f6;
        }

        .profile-name {
          font-size: 22px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 6px 0;
          letter-spacing: -0.025em;
        }

        .profile-email {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 14px 16px;
          border: none;
          background: none;
          color: #374151;
          font-size: 15px;
          text-align: left;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.2s ease;
          font-weight: 400;
        }

        .menu-item:hover {
          background-color: #f8fafc;
          color: #1f2937;
          transform: translateX(2px);
        }

        .menu-icon {
          font-size: 18px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logout-section {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        .logout-btn {
          background: none;
          border: none;
          color: #9ca3af;
          font-size: 14px;
          cursor: pointer;
          transition: color 0.2s ease;
          font-weight: 500;
        }

        .logout-btn:hover {
          color: #ef4444;
        }

        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(4px);
        }

        .loading-content {
          background: white;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          max-width: 300px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e5e7eb;
          border-top: 4px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        .loading-text {
          color: #374151;
          font-size: 16px;
          font-weight: 500;
          margin: 0;
        }

        .button-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .click-outside {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
        }

        .hidden {
          display: none;
        }

        @keyframes spin {
          0% { 
            transform: rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
          }
        }

        @media (max-width: 480px) {
          .profile-container {
            padding: 12px;
          }
          
          .profile-card {
            max-width: 100%;
            margin: 0;
            border-radius: 12px;
          }
          
          .profile-header {
            padding: 20px 16px;
          }
          
          .profile-info {
            padding: 24px 20px;
          }
          
          .go-back-button {
            top: 12px;
            left: 12px;
            padding: 6px 10px;
            font-size: 13px;
          }
          
          .profile-avatar {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>

      <div className="profile-container">
        <div className="profile-card">
          {/* Header */}
          <div className="profile-header">
            <button 
              onClick={() => navigate(-1)} 
              className="go-back-button"
            >
              <ArrowLeft size={18} /> Go Back
            </button>

            <div className="profile-image-container">
              {/* Profile Image */}
              <div style={{ position: 'relative' }}>
                <img
                  src={previewImage || profileImage}
                  alt="Profile"
                  className="profile-avatar"
                  onClick={() =>
                    !previewImage && setShowUploadOptions(!showUploadOptions)
                  }
                />

                {/* Camera icon overlay */}
                {!previewImage && (
                  <div
                    className="camera-overlay"
                    onClick={() => setShowUploadOptions(!showUploadOptions)}
                  >
                    <Camera size={24} />
                  </div>
                )}
              </div>

              {/* Upload Options */}
              {showUploadOptions && !previewImage && (
                <div className="upload-dropdown">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="upload-option"
                  >
                    <Upload size={16} />
                    Upload Photo
                  </button>
                  <button
                    onClick={handleCamera}
                    className="upload-option"
                  >
                    <Camera size={16} />
                    Take Photo
                  </button>
                </div>
              )}

              {/* Preview Controls */}
              {previewImage && (
                <div className="preview-controls">
                  <button
                    onClick={cancelPreview}
                    className="preview-btn cancel-btn"
                  >
                    <X size={16} />
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="preview-btn confirm-btn"
                  >
                    {isUploading ? (
                      <div className="button-spinner"></div>
                    ) : (
                      <Check size={16} />
                    )}
                  </button>
                </div>
              )}
            </div>

            <div>
              <button className="update-avatar-btn">
                Update Avatar
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            <div className="profile-details">
              <h2 className="profile-name">
                {profileDetails.name}
              </h2>
              <p className="profile-email">{profileDetails.email}</p>
            </div>

            {/* Menu Items */}
            <div className="menu-items">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="menu-item"
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Logout */}
            <div className="logout-section">
              <button className="logout-btn">
                Logout
              </button>
            </div>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Upload Status */}
          {isUploading && (
            <div className="loading-overlay">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <p className="loading-text">Uploading image...</p>
              </div>
            </div>
          )}

          {/* Click outside to close */}
          {showUploadOptions && (
            <div
              className="click-outside"
              onClick={() => setShowUploadOptions(false)}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileImageUpload;
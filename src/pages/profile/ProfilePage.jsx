import React from 'react';
import { User, Clock, FileText, Bell, Palette, Lock, LogOut } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white p-6 text-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616c27da422?w=150&h=150&fit=crop&crop=face" 
            alt="Faith Hamilton"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-1">Faith Hamilton</h2>
        <p className="text-sm text-gray-500 mb-4">faith@example.com</p>
        <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
          Update Avatar
        </button>
      </div>

      {/* Menu Items */}
      <div className="mt-6 bg-white">
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
          <User className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">Update My Profile</span>
        </div>
        
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
          <Clock className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">My Time Sheets</span>
        </div>
        
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
          <FileText className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">My Notes</span>
        </div>
        
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
          <Bell className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">Notification Settings</span>
        </div>
        
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
          <Palette className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">Change Theme</span>
        </div>
        
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
          <Lock className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">Update Password</span>
        </div>
        
        <div className="flex items-center px-4 py-4 text-gray-600 hover:bg-gray-50 cursor-pointer">
          <LogOut className="w-4 h-4 mr-3 text-gray-400" />
          <span className="text-gray-600">Logout</span>
        </div>
      </div>
    </div>
  );
}
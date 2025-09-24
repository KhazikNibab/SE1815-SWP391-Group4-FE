import React, { useState } from 'react';
import { UserPlus, Mail, Phone, Key, Eye, EyeOff, Copy, Check } from 'lucide-react';

const AccountCreation = () => {
  const [formData, setFormData] = useState({
    msnv: '',
    phone: '',
    role: 'dealer_staff',
    fullName: '',
    email: ''
  });
  
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-generate email based on MSNV
  const generateEmail = (msnv) => {
    if (msnv) {
      return `${msnv}@evdealer.com`;
    }
    return '';
  };

  // Auto-generate password
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      email: name === 'msnv' ? generateEmail(value) : prev.email
    }));
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Creating account:', {
        ...formData,
        password: generatedPassword
      });
      setIsSubmitting(false);
      alert('Tài khoản đã được tạo thành công!');
      
      // Reset form
      setFormData({
        msnv: '',
        phone: '',
        role: 'dealer_staff',
        fullName: '',
        email: ''
      });
      setGeneratedPassword('');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <UserPlus className="h-8 w-8 text-primary-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Cấp tài khoản</h2>
            <p className="text-gray-600">Tạo tài khoản mới cho Dealer/EVM Staff và Dealer Manager</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MSNV (Employee ID) */}
            <div>
              <label htmlFor="msnv" className="block text-sm font-medium text-gray-700 mb-2">
                MSNV (Mã Số Nhân Viên) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="msnv"
                  name="msnv"
                  value={formData.msnv}
                  onChange={handleInputChange}
                  className="input-field pl-10"
                  placeholder="Nhập mã số nhân viên"
                  required
                />
                <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Nhập họ và tên"
                required
              />
            </div>

            {/* Email (Auto-generated) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input-field pl-10 bg-gray-50"
                  placeholder="Email sẽ được tạo tự động"
                  readOnly
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Email được tạo tự động dựa trên MSNV</p>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field pl-10"
                  placeholder="Nhập số điện thoại"
                  required
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Role */}
            <div className="md:col-span-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Vai trò <span className="text-red-500">*</span>
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="dealer_staff">Dealer Staff</option>
                <option value="dealer_manager">Dealer Manager</option>
                <option value="evm_staff">EVM Staff</option>
              </select>
            </div>
          </div>

          {/* Password Generation */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Mật khẩu ban đầu</h3>
              <button
                type="button"
                onClick={handleGeneratePassword}
                className="btn-primary flex items-center space-x-2"
              >
                <Key className="h-4 w-4" />
                <span>Tạo mật khẩu tự động</span>
              </button>
            </div>

            {generatedPassword && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Key className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Mật khẩu đã được tạo</p>
                      <p className="text-xs text-yellow-600">Người dùng cần thay đổi mật khẩu này khi đăng nhập lần đầu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={generatedPassword}
                    className="w-full px-3 py-2 bg-white border border-yellow-300 rounded-lg font-mono text-sm"
                    readOnly
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setFormData({
                  msnv: '',
                  phone: '',
                  role: 'dealer_staff',
                  fullName: '',
                  email: ''
                });
                setGeneratedPassword('');
              }}
            >
              Làm mới
            </button>
            <button
              type="submit"
              disabled={!generatedPassword || isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Đang tạo...' : 'Tạo tài khoản'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountCreation;

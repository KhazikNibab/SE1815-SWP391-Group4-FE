import React, { useState } from 'react';
import { 
  Home, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Megaphone, 
  Percent, 
  LayoutGrid,
  Plus,
  Eye,
  Calendar,
  TrendingUp,
  ExternalLink,
  Car,
  UserCheck,
  FileText,
  Settings
} from 'lucide-react';
import AccountCreation from './AccountCreation';
import AccountManagement from './AccountManagement';
import OverviewDashboard from './OverviewDashboard';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeSubSection, setActiveSubSection] = useState('dashboard');

  const navigationItems = [
    { id: 'overview', label: 'Home', icon: Home },
    { 
      id: 'orders', 
      label: 'Orders', 
      icon: ShoppingCart, 
      badge: '203',
      badgeColor: 'bg-red-100 text-red-800'
    },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { 
      id: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      subItems: [
        { id: 'dashboard', label: 'Dashboards' },
        { id: 'insights', label: 'Insights' },
        { id: 'reports', label: 'Reports' },
        { id: 'live-view', label: 'Live View' }
      ]
    },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'discounts', label: 'Discounts', icon: Percent },
    { id: 'apps', label: 'Apps', icon: LayoutGrid }
  ];

  const salesChannels = [
    { id: 'online-store', label: 'Online Store', icon: Car, hasEye: true },
    { id: 'facebook', label: 'Facebook', icon: 'facebook' },
    { id: 'facebook-shop', label: 'Facebook Shop', icon: 'facebook' },
    { id: 'instagram', label: 'Instagram', icon: 'instagram' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewDashboard />;
      case 'account-creation':
        return <AccountCreation />;
      case 'account-management':
        return <AccountManagement />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary-600">
            EV Dealer Management
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  setActiveSection(item.id);
                  if (item.subItems) {
                    setActiveSubSection(item.subItems[0].id);
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Sub-items */}
              {item.subItems && activeSection === item.id && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => setActiveSubSection(subItem.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSubSection === subItem.id
                          ? 'bg-primary-100 text-primary-800'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Sales Channels */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Sales Channels
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-1">
            {salesChannels.map((channel) => (
              <div
                key={channel.id}
                className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  {channel.icon === 'facebook' ? (
                    <div className="h-5 w-5 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">f</div>
                  ) : channel.icon === 'instagram' ? (
                    <div className="h-5 w-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white flex items-center justify-center text-xs font-bold">ig</div>
                  ) : (
                    <channel.icon className="h-5 w-5" />
                  )}
                  <span>{channel.label}</span>
                </div>
                {channel.hasEye && (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Admin Functions */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-1">
            <button
              onClick={() => setActiveSection('account-creation')}
              className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === 'account-creation'
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <UserCheck className="h-5 w-5" />
              <span>Cấp tài khoản</span>
            </button>
            <button
              onClick={() => setActiveSection('account-management')}
              className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === 'account-management'
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Quản lý tài khoản</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {activeSection === 'overview' ? 'Overview dashboard' : 
                 activeSection === 'account-creation' ? 'Cấp tài khoản' :
                 activeSection === 'account-management' ? 'Quản lý tài khoản' : 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Last 30 days</span>
              </button>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">Admin Panel</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

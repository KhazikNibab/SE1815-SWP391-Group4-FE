import React from 'react';
import { TrendingUp, ExternalLink, Car, Users, DollarSign, Activity } from 'lucide-react';

const OverviewDashboard = () => {
  // Mock data for KPIs
  const kpiData = [
    {
      title: 'Total sales',
      value: '$137,142.33',
      change: '+1,046%',
      changeType: 'positive',
      subItems: [
        { label: 'Online Store', value: '$137,142.33', change: '+1,046%', changeType: 'positive' }
      ],
      hasReport: true
    },
    {
      title: 'Online store sessions',
      value: '93,418',
      change: '+438%',
      changeType: 'positive',
      subItems: [
        { label: 'Visitors', value: '88,009', change: '+437%', changeType: 'positive' }
      ],
      hasReport: true
    },
    {
      title: 'Active dealers',
      value: '47',
      change: '+12%',
      changeType: 'positive',
      subItems: [
        { label: 'New this month', value: '8', change: '+3', changeType: 'positive' }
      ],
      hasReport: false
    },
    {
      title: 'Vehicle inventory',
      value: '1,234',
      change: '-5%',
      changeType: 'negative',
      subItems: [
        { label: 'Available', value: '1,156', change: '-3%', changeType: 'negative' }
      ],
      hasReport: true
    }
  ];

  // Mock chart data
  const salesData = [
    { date: 'May 18', current: 2500, previous: 800 },
    { date: 'Jun 1', current: 9500, previous: 1200 },
    { date: 'Jun 15', current: 7200, previous: 1500 }
  ];

  const sessionsData = [
    { date: 'May 18', current: 1800, previous: 600 },
    { date: 'Jun 1', current: 4800, previous: 800 },
    { date: 'Jun 15', current: 3600, previous: 1000 }
  ];

  const getChangeIcon = (changeType) => {
    return changeType === 'positive' ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
    );
  };

  const getChangeColor = (changeType) => {
    return changeType === 'positive' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Date Range Info */}
      <div className="text-sm text-gray-600">
        compared to Apr 18-May 17, 2024
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{kpi.title}</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-900">{kpi.value}</span>
                  <div className={`flex items-center space-x-1 ${getChangeColor(kpi.changeType)}`}>
                    {getChangeIcon(kpi.changeType)}
                    <span className="text-sm font-medium">{kpi.change}</span>
                  </div>
                </div>
                
                {/* Sub-items */}
                <div className="mt-4 space-y-2">
                  {kpi.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{subItem.label}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-900">{subItem.value}</span>
                        <div className={`flex items-center space-x-1 ${getChangeColor(subItem.changeType)}`}>
                          {getChangeIcon(subItem.changeType)}
                          <span className="text-xs">{subItem.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {kpi.hasReport && (
                <button className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Over Time Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">SALES OVER TIME</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
              {salesData.map((point, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex flex-col items-center space-y-1">
                    {/* Current period bar */}
                    <div 
                      className="w-8 bg-primary-600 rounded-t"
                      style={{ height: `${(point.current / 10000) * 200}px` }}
                    ></div>
                    {/* Previous period bar */}
                    <div 
                      className="w-8 bg-gray-300 rounded-t"
                      style={{ height: `${(point.previous / 10000) * 200}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{point.date}</span>
                </div>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>15K</span>
              <span>10K</span>
              <span>5K</span>
              <span>0</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              <span className="text-sm text-gray-600">Apr 18-May 17, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-600 rounded"></div>
              <span className="text-sm text-gray-600">May 18-Jun 16, 2024</span>
            </div>
          </div>
        </div>

        {/* Sessions Over Time Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">SESSIONS OVER TIME</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
              {sessionsData.map((point, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex flex-col items-center space-y-1">
                    {/* Current period bar */}
                    <div 
                      className="w-8 bg-primary-600 rounded-t"
                      style={{ height: `${(point.current / 5000) * 200}px` }}
                    ></div>
                    {/* Previous period bar */}
                    <div 
                      className="w-8 bg-gray-300 rounded-t"
                      style={{ height: `${(point.previous / 5000) * 200}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{point.date}</span>
                </div>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>7.5K</span>
              <span>5K</span>
              <span>2.5K</span>
              <span>0</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              <span className="text-sm text-gray-600">Apr 18-May 17, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-600 rounded"></div>
              <span className="text-sm text-gray-600">May 18-Jun 16, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View all
          </button>
        </div>
        
        <div className="space-y-4">
          {[
            { action: 'New dealer registered', user: 'Honda Center HCM', time: '2 hours ago', type: 'dealer' },
            { action: 'Vehicle order placed', user: 'Toyota Dealer', time: '4 hours ago', type: 'order' },
            { action: 'Payment received', user: 'Ford Showroom', time: '6 hours ago', type: 'payment' },
            { action: 'Inventory updated', user: 'System', time: '8 hours ago', type: 'inventory' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-full ${
                activity.type === 'dealer' ? 'bg-blue-100' :
                activity.type === 'order' ? 'bg-green-100' :
                activity.type === 'payment' ? 'bg-yellow-100' :
                'bg-gray-100'
              }`}>
                {activity.type === 'dealer' ? <Users className="h-4 w-4 text-blue-600" /> :
                 activity.type === 'order' ? <Car className="h-4 w-4 text-green-600" /> :
                 activity.type === 'payment' ? <DollarSign className="h-4 w-4 text-yellow-600" /> :
                 <Activity className="h-4 w-4 text-gray-600" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.user}</p>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;

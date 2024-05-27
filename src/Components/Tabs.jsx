import React, { useState } from 'react';
import { CardBody } from './CardBody';


export const Tabs = ({loading}) => {
    
    
    const [activeTab, setActiveTab] = useState('Resources');
  
  
    const tabs = [
        { name: 'Resources', isActive: activeTab === 'Resources' },
        { name: 'Requests', isActive: activeTab === 'Requests' },
        { name: 'Users', isActive: activeTab === 'Users' }
    ];

    return (
        <>
          <div className='w-[45%] h-10 my-10 mx-auto text-center flex border border-solid border-gray-300 bg-gray-100 rounded-md font-medium' style={{ fontFamily: "'HK Grotesk', sans-serif" }}>
            {tabs.map(tab => (
                <span 
                    key={tab.name}
                    className={`flex-1 text-center pt-[1%] border-r border-gray-300 cursor-pointer ${tab.isActive ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => setActiveTab(tab.name)}
                >
                    {tab.name}
                </span>
            ))}
         </div>
        <CardBody   activeTab = {activeTab} loading={loading}/>
        
        </>
      
    );
};

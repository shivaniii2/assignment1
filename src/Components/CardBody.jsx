import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { useSelector } from 'react-redux';

export const CardBody = ({ activeTab ,loading }) => {
  const tabs = useSelector((store) => store.tabs);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
    setItems(activeTab === 'Resources' ? tabs.resourcesTab :
             activeTab === 'Requests' ? tabs.requestTab :
             activeTab === 'Users' ? tabs.usersTab : []);
  }, [activeTab, tabs]);

  const filteredItems = items && items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="loader"></div>
      </div>
    );
  }

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="relative" style={{ fontFamily: "'HK Grotesk', sans-serif" }}>
        <input
          type="text"
          className="border border-gray-300 h-10 w-[45%] pl-10 ml-36 font-light rounded-md"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  
        />
        <svg className="absolute top-[14px] left-[160px]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.05888 4.77944C8.05888 6.59063 6.59063 8.05888 4.77944 8.05888C2.96826 8.05888 1.5 6.59063 1.5 4.77944C1.5 2.96826 2.96826 1.5 4.77944 1.5C6.59063 1.5 8.05888 2.96826 8.05888 4.77944ZM7.58708 8.64771C6.79881 9.22083 5.8286 9.55888 4.77944 9.55888C2.13983 9.55888 0 7.41905 0 4.77944C0 2.13983 2.13983 0 4.77944 0C7.41905 0 9.55888 2.13983 9.55888 4.77944C9.55888 5.82859 9.22084 6.79878 8.64773 7.58704L12.001 10.9403L10.9403 12.001L7.58708 8.64771Z" fill="#171F46" />
        </svg>
      </div>

      <div className='flex flex-wrap ml-36'>
        {currentItems && currentItems.map((item) => (
          <Card
            key={item.id}
            iconUrl={item.icon_url}
            description={item.description}
            link={item.link}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
     {currentItems && currentItems.length >=6 && 
      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
}
    </>
  );
};

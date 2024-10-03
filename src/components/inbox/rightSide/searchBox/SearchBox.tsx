"use client"
import React from 'react'
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { IoSearch } from "react-icons/io5";
import "./searchBox.css"
interface IInbox {
  id: number;
  from: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  label: string;
}
interface ISearchBox{
  inbox: IInbox[]
}
const SearchBox = ({inbox}:ISearchBox) => {
  const filterEmail = (inputValue: string) => {
    return inbox.filter((item:IInbox) =>
      item.subject.includes(inputValue) ||
      item.message.includes(inputValue) ||
      item.from.includes(inputValue)
    );
  };
  
  const loadOptions = (
    inputValue: string,
    callback: (options: IInbox[]) => void
  ) => {
    setTimeout(() => {
      callback(filterEmail(inputValue));
    }, 1000);
  };
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoSearch  style={{ color: '#888' }} /> {/* Custom search icon */}
      </components.DropdownIndicator>
    );
  };
  const customStyles = {

    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: '0 8px',
      border: 'none', // Remove any internal borders (if applicable)
      boxShadow: 'none', // Ensure no box-shadow exists
      backgroundColor: 'transparent', // Make sure it's transparent
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      //border: 'none', // Remove the container border
     // boxShadow: 'none', // Remove any shadow
      backgroundColor: 'transparent', // No background color to interfere
    }),
  };
  return (
    <div>
       <AsyncSelect 
       cacheOptions
       loadOptions={loadOptions}
      //  defaultOptions
      getOptionLabel={(e) => `${e.subject} - ${e.from}`} // Display subject and from in dropdown
       getOptionValue={(e) => e.id.toString()} // Unique value based on email id
       placeholder="جستجو" // Custom placeholder text
       components={{ DropdownIndicator }} // Use custom dropdown indicator
       styles={customStyles} // Apply custom styles to remove border
       />
    </div>
  )
}

export default SearchBox

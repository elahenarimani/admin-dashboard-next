"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { IoSearch } from "react-icons/io5";
import "./searchBoxSent.css";
import { BorderRight, BorderRightOutlined } from "@mui/icons-material";
import { CompContext } from "@/app/CompProvider";
// import { useThemeContext } from "@/app/theme-provider/ThemeContextProvider";

// import {CompEmailContext}from "../../../../app/inbox/page"
interface IcompEmail {
  to: string ;
  subject: string ;
  content: string ;
  id: number;
}
// interface ISearchBox {
//   inbox: IInbox[];
// }
const SearchBoxSent = () => {
  // const { compEmail , setCompEmail} = useThemeContext()
   const Compose = useContext(CompContext)
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const CompEmailContextX = useContext(CompEmailContext)
  const filterEmail = (inputValue: string) => {
    return Compose?.compEmail?.filter(
      (item) =>
        item.subject.includes(inputValue) ||
        item.content.includes(inputValue) ||
        item.to.includes(inputValue)
    );
  };
  const loadOptions = (
    inputValue: string,
    callback: (options: IcompEmail[]) => void
  )=>{
  //  => {
  //   setTimeout(() => {
  //     callback(filterEmail(inputValue));
  //   }, 1000);
  // };
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoSearch style={{ color: "#888" }} /> {/* Custom search icon */}
      </components.DropdownIndicator>
    );
  };
  const customStyles = {
    control: (base: any, state: any) => ({//Customizes the input’s container, focusing on the border, box-shadow, and how the component looks when the menu is open. The input and arrow are reversed in order (due to the Persian layout).
      ...base,
      width: '330px', // Adjust the width of the entire control (including the input)
      height: '40px', // Adjust the height of the entire control
      backgroundColor: "#F5F6FA", // Set input background color
      // backGroundColor: '#F5F6FA',
      
      border: state.isFocused ? "2px solid #EFEFEF" : "2px solid #EFEFEF", // Your favorite border color when focused
      boxShadow: "none", // Remove default box-shadow (which may include blue border)
      borderRadius: state.menuIsOpen ? "12px 12px 0 0" : "30px", // Remove bottom border-radius when menu is open
      "&:hover": {
        border: state.isFocused ? "2px solid #EFEFEF" : "2px solid #EFEFEF",
      },
      outline: "none", // Removes the default outline
      display: "flex",
      flexDirection: "row-reverse", // Reverse the order of the input and arrow
    }),
    menu: (base: any) => ({//Styles the dropdown menu, aligning the border, removing the gap, and applying a matching border-radius for a seamless connection with the input.
      ...base,
      marginTop: 0, // Remove the gap between input and dropdown
      borderRadius: "0 0 12px 12px", // Connect dropdown with input by matching the border-radius
      border: "2px solid #EFEFEF", // Match border color of dropdown with input
      borderTop: "none", // Remove the border between the input and dropdown
      boxShadow: "none", //remove border when menue is open
      zIndex: 2,
    }),
    dropdownIndicator: (provided: any) => ({//Customizes the dropdown icon container, ensuring no background color or borders are applied.
      ...provided,
      padding: "0 8px",
      boxShadow: "none", // Ensure no box-shadow exists
      backgroundColor: "transparent", // Make sure it's transparent
      BorderRight: "none",
    }),
    indicatorsContainer: (provided: any) => ({//Similar to dropdownIndicator, but for the entire container holding indicators like the dropdown arrow.
      ...provided,
      backgroundColor: "transparent", // No background color to interfere
      padding: "0 3px", // Adjust padding for the arrow
    }),
    valueContainer: (base: any) => ({// Adjusts padding within the input field.
      ...base,
      padding: "0 0", // Adjust padding for the input field
    }),
    indicatorSeparator: () => ({//Removes the separator line between the input and dropdown icon.
      display: "none", // Hides the border between the input and the dropdown icon
    }),
  };
  return (
    <div>
      <AsyncSelect
        cacheOptions//Caches the options after loading them.
       // loadOptions={loadOptions}//The asynchronous function for loading options (filterEmail is called here).
        getOptionLabel={(e:any) => `${e.subject} - ${e.to}`} // Display subject and to in dropdown
        getOptionValue={(e:any) => e.id.toString()} // Unique value based on email id
        placeholder="جستجو" // Custom placeholder text
        components={{ DropdownIndicator }} // Use custom dropdown indicator
        styles={customStyles} // Apply custom styles to remove border
        noOptionsMessage={() => ""} // Return null to hide the message
        onFocus={() => setMenuIsOpen(true)}//Toggles the dropdown menu’s visibility on focus and blur, using
        onBlur={() => setMenuIsOpen(false)}//Toggles the dropdown menu’s visibility on focus and blur, using
        menuIsOpen={menuIsOpen}//Controls whether the dropdown is open based on the component’s focus state.
      />
    </div>
  );
};}
export default SearchBoxSent;

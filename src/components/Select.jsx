// import React from "react";
// import { Select } from "antd";
// import { nanoid } from "nanoid";
//
// const SelectOptions = ({ options }) => {
//   const { Option } = Select;
//
//   function onChange(value) {
//     console.log(`selected ${value}`);
//   }
//
//   function onSearch(val) {
//     console.log("search:", val);
//   }
//
//   return (
//     <Select
//       showSearch
//       style={{ width: 200 }}
//       placeholder="Select a person"
//       optionFilterProp="children"
//       onChange={onChange}
//       onSearch={onSearch}
//       filterOption={(input, option) =>
//         option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//       }
//     >
//       {options &&
//         options.map((name) => (
//           <Option key={nanoid()} value={name}>
//             {name}
//           </Option>
//         ))}
//     </Select>
//   );
// };
//
// export default SelectOptions;

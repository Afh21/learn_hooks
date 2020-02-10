import React from 'react';
// import { Select } from 'antd';
// const { Option } = Select;

// const SelectForm = React.forwardRef(
//    ({ label, register, options: data, handleSelectOriginCity }, ref) => (
//       <>
//          <Select
//             name={label}
//             style={{ width: '100%' }}
//             ref={ref}
//             onChange={handleSelectOriginCity}
//          >
//             {data && data.length
//                ? data.map(d => (
//                     <Option key={d.value} value={d.value}>
//                        {d.text}
//                     </Option>
//                  ))
//                : null}
//          </Select>
//       </>
//    )
// );

const SelectForm = React.forwardRef(
   ({ nameSelect, register, options: data }, ref) => (
      <>
         <select name={nameSelect} ref={ref}>
            {data && data.length
               ? data.map(d => (
                    <option key={d.value} value={d.value}>
                       {d.text}
                    </option>
                 ))
               : null}
         </select>
      </>
   )
);

export default SelectForm;

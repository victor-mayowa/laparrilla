import React from 'react'
import Select from 'react-select';

const EditUserSelect = ({onChange, options, value}) => {

    const defaultValue = (options, value) =>{
        return options ? options.find(option => option.value === value) : ""
    }


  return (
    <div>
        <Select
         className="w-[400px] border-[1px] border-slate-600 rounded-sm"
        value={defaultValue(options, value)}
        onChange={value =>{
            onChange(value)
        }}
        options={options}
        />
    </div>
  )
}

export default EditUserSelect
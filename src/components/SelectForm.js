import React from 'react'
import { Select } from '@mantine/core';
function SelectForm() {
  const data = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  return (
    <div>
       <Select
      label="Select your favorite framework/library"
      placeholder="Pick one"
      data={data}
      searchable
      nothingFound="No options"
    />
      
    </div>
  )
}

export default SelectForm

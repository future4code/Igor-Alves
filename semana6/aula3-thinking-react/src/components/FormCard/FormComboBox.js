import React from 'react';
import styled from 'styled-components'



const FilterContainer = styled.div `
`

const FormLabel = styled.label `
    margin-right: 1em;
`

const FormSelect = styled.select `
`

const FormOption = styled.option `
`


function FormComboBox() {
  return (
    <FilterContainer>
        <FormLabel>Filtro</FormLabel>
        <FormSelect>
            <FormOption>Nenhuma</FormOption>
            <FormOption>Incompletas</FormOption>
            <FormOption>Completas</FormOption>
        </FormSelect>
    </FilterContainer>
  );
}



export default FormComboBox;
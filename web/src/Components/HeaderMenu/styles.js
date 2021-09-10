import styled from 'styled-components';

export const HeaderDiv = styled.div `
  background-Color: white;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const HeaderUl = styled.ul `
  display: flex;
  
  list-style-type: none;
  background-color: #333;
  margin: 0;
  padding: 16px;
`;

export const HeaderLi = styled.li `
  display: flex;
 
  padding: 0px 8px;
  &:hover {
    font-weight: 800;
    //background-color: #111;
  }
`;
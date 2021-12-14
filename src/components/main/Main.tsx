import React, { FC, useState } from 'react';
import { MainBody, MainTitle, GlobalStyles } from './main.styles'
import ToDoInput from '../todoInput/ToDoInput';

const Main = () => {
    return (
      <>
      <GlobalStyles />
        <MainBody>
          <MainTitle>To Do</MainTitle>
          <ToDoInput />
        </MainBody>
      
      </>
    );
  }

export default Main
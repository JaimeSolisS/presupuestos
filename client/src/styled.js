import React from 'react';
import styled from "styled-components";

export const StyledContainer = styled.div `
    width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto; }
    @media (min-width: 576px) {
      .container {
        max-width: 540px; } }
    @media (min-width: 768px) {
      .container {
        max-width: 720px; } }
    @media (min-width: 992px) {
      .container {
        max-width: 960px; } }
    @media (min-width: 1200px) {
      .container {
        max-width: 1140px; } }
    padding: 3rem !important;
`;
export const StyledDivRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
 `;

export const StyledDivColOffSet = styled.div `
 flex: 0 0 50%;
    max-width: 50%;
    margin-left: 25%;
 
 `;

export const StyledDivFormGroup = styled.div `
 margin-bottom: 1rem;
 `;

export const StyledGridContainer = styled.div `
display: grid;
justify-content: space-evenly;
grid-template-columns: auto auto auto;
grid-gap: 10px;
padding: 10px;
`;

export const StyledInputFormControl = styled.input `
 bdisplay: block;
 width: 100%;
 padding: 0.4375rem 0;
 font-size: 1rem;
 line-height: 1.5;
 color: #495057;
 background-color: transparent;
 background-clip: padding-box;
 border: none;
 border-bottom: 1px solid rgba(0, 0, 0, 0.26);
 border-radius: 0;
 box-shadow: none;

 outline: none;
 &:focus {
    border-bottom: 2px solid #018B5D;
    transition: all 0.2s linear;
 }

 &:disabled {
    background: #F1F1F1;
    color: rgba(0, 0, 0, 0.26);
    transition-duration: 0.4s;
 }
 `;

export const StyledMailButton = styled.button `
 width: 100%;
 border-radius: 20px;
 margin-bottom: 1rem !important;
 padding: 1%;
 color:white;
 border:1px solid rgba(0, 0, 0, 0.26);
 background: #037dff;
 transition-duration: 0.4s;

 &:disabled {
    background: #F1F1F1;
    color: rgba(0, 0, 0, 0.26);
    transition-duration: 0.4s;
 }
 `;

export const StyledRegisterButton = styled.button `
border: none;
color: white;
padding: 10px 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
transition-duration: 0.4s;
background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  &:hover {
    background-color: #e7e7e7;
  }

  &:disabled {
      box-shadow: none;
      opacity: 0.3;
 `;

 export const StyledH4 = styled.h4 `
 text-align: center;
 text-decoration: none;
 color: black;
 `;

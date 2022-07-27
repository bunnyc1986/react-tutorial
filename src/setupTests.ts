// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// We assign React to global for Jest since webpack automatically
// provides @babel/preset-react when the project is built.
// @ts-ignore
import React from 'react';
global.React = React;

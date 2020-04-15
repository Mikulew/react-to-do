import React from 'react';
import FilterButton from '../components/FitlerButton';

const Footer = () => (
  <footer>
    <FilterButton filter="SHOW_ALL">All</FilterButton>
    <FilterButton filter="SHOW_ACTIVE">Active</FilterButton>
    <FilterButton filter="SHOW_COMPLETED">Completed</FilterButton>
  </footer>
);

export default Footer;

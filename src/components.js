import React from 'react';
import { Link } from 'react-router-dom';
import{Breadcrumb} from 'react-bootstrap';


const Navbar = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/Introduction" }}>Introduction</Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/Magictoys" }}>Magictoys</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        using_Library
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export { Navbar };
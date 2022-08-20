import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Siderbar = () => {

  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  const [d, setD] = useState(false)

  return (
    <aside className='sidebar'>
        <div className='sidebarContainer'>
            <ul>
            <li onClick={() => {setA(!a)}} className={`${a ? 'item active' : 'item '}`}>Payroll Management</li>
            <li onClick={() => {setB(!b)}} className={`${b ? 'item active' : 'item '}`}>Test</li>
            <li onClick={() => {setC(!c)}} className={`${c ? 'item active' : 'item '}`}>Leave</li>
            <li onClick={() => {setD(!d)}} className={`${d ? 'item active' : 'item '}`}>Performance</li>
            </ul>
        </div>
    </aside>
  )
}

export default Siderbar;

// export const Sidebar = [
//   {
//     title: 'Payroll Management',
//     path: '/payroll',
//     cName: 'item',
//   },
//   {
//     title: 'Leave',
//     path: '/leave',
//     cName: 'item',
//   },
//   {
//     title: 'Test',
//     path: '/test',
//     cName: 'item',
//   },
//   {
//     title: 'Performance',
//     path: '/performance',
//     cName: 'item',
//   },
// ]


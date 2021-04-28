import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Counter">Counter</Link></li>
                <li><Link to="/jsx">JSX</Link></li>
                <li><Link to="/props">Props & State</Link></li>
                <li><Link to="/todo">Todo</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar;
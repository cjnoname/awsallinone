import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as styles from './style.scss';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>OAuth Management</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/home'} activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/viewDetails'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span>View Details
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

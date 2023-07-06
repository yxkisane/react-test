import React from 'react';
import { Button } from 'antd';
import { NavLink } from "react-router-dom";

class Search extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button type="primary">
                    <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })} to={'login'}>
                        点我登录
                    </NavLink>
                </Button>
            </div>
        );
    }
}

export default Search;
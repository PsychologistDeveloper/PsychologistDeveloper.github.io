import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import StatisticsPage from './StatisticsPage.component';

export const mapStateToProps = (state) => ({
    isLoggedIn: state.AdminReducer.isLoggedIn,
    admin: state.AdminReducer.admin,
    isGrandAdmin: state.AdminReducer.admin.isGrandAdmin,
});

export const mapDispatchToProps = () => ({});

export const StatisticsPageContainer = (props) => {
    const { admin } = props;

    // DEMONSTRATION
    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setAdminData(admin);
        }, 20000);
    });

    return (
        <StatisticsPage admin={adminData} />
    );
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect(),
)(StatisticsPageContainer);

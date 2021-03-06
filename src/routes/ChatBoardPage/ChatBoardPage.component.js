import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { updateActivePopupId } from 'Store/Popup/Popup.action';

import ChatBoardQuestions from 'Components/ChatBoardQuestions';

import './ChatBoardPage.style.scss';

export const mapStateToProps = (state) => ({
    isMobile: state.DeviceReducer.isMobile,
});

export const mapDispatchToProps = (dispatch) => ({
    updateActivePopupId: (activePopupId) => dispatch(updateActivePopupId(activePopupId)),
});

export const ChatBoardPage = (props) => {
    const { activeTabId } = props;

    return (
        <main
            className="ChatBoardPage"
            aria-label="chat-board-page"
        >
            <ChatBoardQuestions
                activeTabId={activeTabId}
            />
        </main>
    );
};

export default compose(
    memo,
    connect(mapStateToProps, mapDispatchToProps),
)(ChatBoardPage);

import React from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import DeleteButton from '@mui/icons-material/DeleteOutline';
import PencilIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

import ClickOutside from 'Components/ClickOutside';

import './ChatBoardTabItem.style.scss';

export const ChatBoardTabItem = (props) => {
  const {
    tabName,
    tabId,
    activeTabId,
    setActiveTabId,
    removeTab,
    editTab,
    editValue,
    isEditting,
    setIsEditting,
    onEditChange,
    count,
  } = props;

  const buttonsMap = [
    {
      Component: PencilIcon,
      action: () => setIsEditting(true),
      isActive: !isEditting,
    },
    {
      Component: DeleteButton,
      action: () => removeTab(tabId),
      isActive: !isEditting,
    },
    {
      Component: AddIcon,
      action: () => editTab(tabId, { name: editValue }),
      isActive: isEditting,
    },
  ];

  const renderButtons = () => buttonsMap.map(({ Component, action, isActive }, i) => (
    <IconButton
      key={i}
      onClick={action}
      size="small"
      className={`ChatBoardTabItem-Button ${isActive && 'ChatBoardTabItem-Button_isActive'}`}
    >
      <Component />
    </IconButton>
  ));

  const renderInputField = () => (
    <Input
      autoFocus
      placeholder=""
      value={editValue}
      onChange={onEditChange}
    />
  );

  const renderTabContent = () => {
    if (isEditting) {
      return renderInputField();
    }

    return (
      <p className="ChatBoardTabItem-TabName">
        { tabName }
      </p>
    );
  };

  return (
    <ClickOutside onClick={() => setIsEditting(false)}>
      <div
        role="button"
        className={`ChatBoardTabItem ${activeTabId === tabId && 'ChatBoardTabItem_isActive'}`}
        onClick={() => setActiveTabId(tabId)}
        tabIndex={0}
      >
        { renderTabContent() }
        { renderButtons() }
        <span className="ChatBoardTabItem-Count">{ count }</span>
      </div>
    </ClickOutside>
  );
};

export default ChatBoardTabItem;

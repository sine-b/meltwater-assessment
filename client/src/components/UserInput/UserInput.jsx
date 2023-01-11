import React, { useState } from 'react';

import FileUpload from './FileUpload';
import BanlistInput from './BanlistInput';

export const UserInputContext = React.createContext();

const banPhrases = Object.freeze([
  `Hello world "Boston Red Sox", 'Pepperoni Pizza', 'Cheese Pizza', beer`,
  `An occurrence, of sorts 'that brings a problem' to, and they "realize it" needs fixing`,
]);

const UserInput = ({ onFileCensored, handleLoading }) => {
  const [file, setFile] = useState();
  const [statusText, setStatusText] = useState('');
  const [banString, setBanString] = useState(banPhrases[0]); // change index to change default blacklist

  return (
    <UserInputContext.Provider
      value={{
        file,
        setFile,
        statusText,
        setStatusText,
        banString,
        setBanString,
        onFileCensored,
        handleLoading,
      }}
    >
      <div style={{ display: 'flex' }}>
        <FileUpload />
        <BanlistInput />
      </div>
    </UserInputContext.Provider>
  );
};

export default UserInput;

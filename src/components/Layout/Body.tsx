import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { login, logout } from 'app/store/systemSlice';

const Body = () => {
  const dispatch = useAppDispatch();
  const systemState = useAppSelector(s => s.system);

  useEffect(() => {
    console.log(systemState);
  }, [systemState]);

  const handleLogin = () => {
    if (systemState.logined) {
      dispatch(logout());
    } else {
      dispatch(login('a token'));
    }
  };

  return (
    <main className="l-body">
      <p>logined: { systemState.logined.toString() }</p>
      <button onClick={handleLogin}>test</button>
      <div className="test"></div>
    </main>
  );
};

export default Body;

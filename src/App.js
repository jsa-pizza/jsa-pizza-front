// main을 데려고오고 네브바 등 fixed 되어있는걸 가져옵니다
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Footer, Snackbar } from 'components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Main from './containers/Main';
import { NavContainer } from './containers';

function App() {
  const { snackbarShow, content } = useSelector((state) => (state.snackbar));
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Main />
        <NavContainer />
        <Footer />
        <Snackbar
          snackbarShow={snackbarShow}
          content={content}
        />
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;

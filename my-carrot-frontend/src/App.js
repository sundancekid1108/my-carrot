import logo from './logo.svg';
import { Route, Routes, useRoutes } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import Signin from './pages/signin/signin';
import ItemDetail from './pages/item/itemdetail'
import ItemList from './pages/item/itemlist'
import UploadItem from './pages/item/uploadItem'
import NotFound from './pages/notfound/notfound'
import ChatList from './pages/chat/chatlist';
import CommunityList from './pages/community/communitylist';


const App = (Component) => {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <Signin /> },
    { path: "/item/:id", element: <ItemDetail /> },
    { path: "/item", element: <ItemList /> },
    { path: "/item/uploaditem", element: <UploadItem /> },
    { path: "/nearby", element: <NotFound /> },
    { path: "/chat", element: <ChatList /> },
    { path: "/community", element: <CommunityList /> },
    { path: "*", element: <NotFound /> }
  ];

  const router = useRoutes(routes);


  return (
    <div
      className="w-full max-w-xl mx-auto"
    >{router}</div>


  );
}

export default App;

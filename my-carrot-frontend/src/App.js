import logo from './logo.svg';
import { Route, Routes, useRoutes } from 'react-router-dom'
import './App.css';
import Home from './pages/home'
import Signin from './pages/signin/index';
import ItemDetail from './pages/item/itemdetail'
import ItemList from './pages/item/index'
import UploadItem from './pages/item/uploadItem'
import NotFound from './pages/notfound'
import ChatList from './pages/chat';
import CommunityList from './pages/community';
import NearBy from './pages/nearby'
import Layout from './components/layout';


const App = (Component) => {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <Signin /> },
    { path: "/item/:id", element: <ItemDetail /> },
    { path: "/item", element: <ItemList /> },
    { path: "/item/uploaditem", element: <UploadItem /> },
    { path: "/nearby", element: <NearBy /> },
    { path: "/chat", element: <ChatList /> },
    { path: "/community", element: <CommunityList /> },
    {
      path: "*", element: <NotFound />
    }
  ];

  const router = useRoutes(routes);


  return (
    <div
      className="w-full max-w-xl mx-auto"
    >

      {router}

    </div>


  );
}

export default App;
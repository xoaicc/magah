import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from "./routes";
import {Fragment} from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {
            const Page = route.component;
            let Layout;

            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;

            return <Route key={i} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

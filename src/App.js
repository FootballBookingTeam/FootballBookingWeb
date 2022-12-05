import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

// import GithubCorner from 'react-github-corner';

import DetailsPage from './pages/DetailsPage';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './pages/MainPage';
import DefaultLayout from './layout/DefaultLayout';
import TurfManagement from './pages/AdminPage/TurfManagement';
const publicRoutes = [
    { path: '/', component: MainPage },
    // { path: '/detail/:id', component: DetailsPage },
    { path: '/turf', component: TurfManagement },
];
const privateRoutes = [];
function App() {
    return (
        // <MainPage/>
        <Router>
            <div className="App">
                <ScrollToTop>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        <Route path="/detail/:id" element={<DetailsPage />} />
                    </Routes>
                </ScrollToTop>
            </div>
        </Router>
    );
}
export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { Fragment } from 'react';

// import GithubCorner from 'react-github-corner';

// import DetailsPage from './pages/DetailsPage';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import DefaultLayout from './layout/DefaultLayout';
import TurfManagement from './pages/AdminPage/TurfManagement';
import TurfSchedule from './pages/AdminPage/TurfSchedule';
import RegisterPage from './pages/AuthPage/RegisterPage';
import LoginPage from './pages/AuthPage/LoginPage';
const publicRoutes = [
    { path: '/', component: MainPage },
    { path: '/details/:id', component: DetailsPage },
    { path: '/turf/:id', component: TurfSchedule },
    { path: '/turf', component: TurfManagement },
    { path: '/register', component: RegisterPage },
    { path: '/login', component: LoginPage },
];
const privateRoutes = [];
function App() {

    const items = JSON.parse(localStorage.getItem('items'));

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
                        {/* {items.jwt ? (
                            <Route path="*" element={<Navigate to="/" replace />} />
                        ) : (
                            <Route path="*" element={<Navigate to="/login" replace />} />
                        )} */}
                    </Routes>
                </ScrollToTop>
            </div>
        </Router>
    );
}
export default App;

//test

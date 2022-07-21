import React from 'react';


const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;

function About(){
    return <h2>О сайте</h2>;
}
function NotFound(){
    return <h2>Ресурс не найден</h2>;
}

function Main(){
    return <h2>Главная</h2>;
}
ReactDOM.createRoot(
    document.getElementById("root")
)
    .render(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
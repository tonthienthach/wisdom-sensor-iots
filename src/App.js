import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import mainRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {mainRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout;
            if (Layout) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            }
            return (
              <Route key={index} path={route.path} element={<Page />}></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

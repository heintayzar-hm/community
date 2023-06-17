import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense } from "react"
import { withErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Error from "./components/Error/Error"
import { ThemeProvider } from "@material-tailwind/react";

import routes from './pages/routes'
import Loading from './components/Loading/Loading'

/**
 * will be used for adding loading component for lazy loading and suspense, loop over routes and render them
 * @returns {JSX.Element}
 */
const RoutesComponent = () => {
  return (
    <>
      {/* use HashRouter instead of BrowserRouter for github pages and other static hosting */}
      <HashRouter>
        {/* routes should be scaled for large apps so it will be in new file */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {
            routes.map((route, index) => {
              // Suspense is used for lazy loading
              let element =  <Suspense fallback = { route.fallback }> { route.element } </Suspense>


              return (
                <Route key={index} path={route.path} element={element} />
              )
            })
          }
        </Routes>
      </HashRouter>
    </>
  )
}

/**
  * App component is the root component of the app
  * responsible for rendering the routes, theming and other global components(for now redux )
  * @returns {JSX.Element}
*/
const App = () => {
  const theme = {
    // will be used for theming
  }
  return (
    <Provider store={store}>
      {/* for local storage we will use redux-persist */}
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className="App font-secondary tracking-wider text-base">
          <ThemeProvider value={theme}>
            <RoutesComponent />
          </ThemeProvider>
        </div>
      </PersistGate>
    </Provider>
  )
}


// withErrorBoundary is used for error handling for the end user
const AppErrorBoundary = withErrorBoundary(App, {
  fallback: <Error />
})

export default AppErrorBoundary

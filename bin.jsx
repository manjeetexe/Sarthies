<ExamProvider>
      <Router>
        <div>
          {/* Conditionally render Header if authenticated */}
          {isAuthenticated && <Header />}
          
          <Routes>
            {/* Protect all routes except Signin */}
            <Route
              path="/Signin"
              element={isAuthenticated ? <Navigate to="/" /> : <Signin />}
            />
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Help"
              element={isAuthenticated ? <Help /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Test"
              element={isAuthenticated ? <TestPage /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Notes"
              element={isAuthenticated ? <Notes /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Lessons"
              element={isAuthenticated ? <Lessons /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Exam"
              element={isAuthenticated ? <Exam /> : <Navigate to="/Signin" />}
            />
          </Routes>

          {/* Show Nav only if authenticated */}
          {isAuthenticated && <Nav />}
        </div>
      </Router>
    </ExamProvider>
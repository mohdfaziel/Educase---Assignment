import { useState } from 'react'
import WelcomePage from './pages/WelcomePage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import AccountSettingsPage from './pages/AccountSettingsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNavigate={setCurrentPage} />
      case 'signin':
        return <SigninPage onNavigate={setCurrentPage} />
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} />
      case 'account':
        return <AccountSettingsPage onNavigate={setCurrentPage} />
      default:
        return <WelcomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xs mx-auto border border-gray-300 bg-white overflow-hidden" style={{height: '85vh', maxHeight: '700px'}}>
        {renderPage()}
      </div>
      
      {currentPage !== 'welcome' && (
        <div className="mt-4">
          <button 
            onClick={() => setCurrentPage('welcome')}
            className="p-1 bg-white rounded-full transition-shadow border border-gray-200"
            aria-label="Go to home"
          >
            <svg 
              className="w-4 h-4 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default App

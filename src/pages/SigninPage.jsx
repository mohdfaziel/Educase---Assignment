import { useState } from 'react'

const SigninPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const isFormValid = email.trim() !== '' && password.trim() !== ''
  
  const handleLogin = () => {
    if (isFormValid) {
      onNavigate('account')
    }
  }

  return (
    <div className="h-full bg-[#F7F8F9] flex items-start justify-center">
      <div className="px-5 py-8 w-full">
        <h1 className="text-xl font-bold text-gray-900 text-left mb-2">
          Signin to your<br />
          PopX account
        </h1>
        
        <p className="text-gray-400 text-sm font-medium text-start mb-5">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-xs font-medium">
              Email Address
            </label>
          </div>
          
          <div className="relative">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-xs font-medium">
              Password
            </label>
          </div>
          
          <div className="pt-2">
            <button 
              onClick={handleLogin}
              disabled={!isFormValid}
              className={`w-full py-2.5 rounded-lg font-medium text-xs transition-colors ${
                isFormValid 
                  ? 'bg-[#6C25FF] text-white cursor-pointer' 
                  : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninPage

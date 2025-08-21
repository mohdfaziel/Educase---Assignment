const SignupPage = ({ onNavigate }) => {
  const handleSignup = () => {
    onNavigate('account')
  }

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-4 py-6 flex-1 flex flex-col min-h-0">
        <h1 className="text-xl font-bold text-[#1D2226] text-left mb-6">
          Create your<br />
          PopX account
        </h1>
        
        <div className="space-y-5 flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full px-2.5 py-2 rounded-sm border border-gray-300 text-xs text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-[#6C25FF] text-xs font-medium">
              Full Name<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>
          
          <div className="relative">
            <input
              type="tel"
              placeholder="Enter Number"
              className="w-full px-2.5 py-1.5 rounded-sm border border-gray-300 text-xs text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-[#6C25FF] text-xs font-medium">
              Phone number<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>
          
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-2.5 py-1.5 rounded-sm border border-gray-300 text-xs text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-[#6C25FF] text-xs font-medium">
              Email address<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>
          
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-2.5 py-1.5 rounded-sm border border-gray-300 text-xs text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-[#6C25FF] text-xs font-medium">
              Password<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full px-2.5 py-1.5 rounded-sm border border-gray-300 text-xs text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6C25FF]"
            />
            <label className="absolute -top-2 left-3 bg-white px-1 text-[#6C25FF] text-xs font-medium">
              Company name
            </label>
          </div>
          
          <div>
            <p className="text-gray-700 text-xs font-medium mb-2">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </p>
            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  defaultChecked
                  className="w-4 h-4 accent-[#6C25FF]"
                />
                <span className="ml-1.5 text-gray-700 text-xs">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="w-4 h-4 accent-[#6C25FF]"
                />
                <span className="ml-1.5 text-gray-700 text-xs">No</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-2 flex-shrink-0">
          <button 
            onClick={handleSignup}
            className="w-full bg-[#6C25FF] text-white py-2.5 rounded-lg font-medium text-xs"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

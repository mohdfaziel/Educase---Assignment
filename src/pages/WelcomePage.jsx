const WelcomePage = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-[#F7F8F9]">
      <div className="flex-grow bg-[#F7F8F9]" style={{minHeight: '65%'}}>
      </div>
      
      <div className="px-4 pb-8 bg-[#F7F8F9] flex-shrink-0">
        <h1 className="text-xl font-bold text-gray-900 text-left mb-2">
          Welcome to PopX
        </h1>
        
        <p className="text-[#74777b] text-sm font-medium text-left mb-6">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        
        <div className="space-y-2.5">
          <button 
            onClick={() => onNavigate('signup')}
            className="w-full bg-[#6C25FF] text-white py-2.5 rounded-lg font-medium text-xs"
          >
            Create Account
          </button>
          
          <button 
            onClick={() => onNavigate('signin')}
            className="w-full bg-[#6C25FF4B] text-black py-2.5 rounded-lg font-medium text-xs"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage

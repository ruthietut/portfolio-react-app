// import React from 'react'

const Contact = () => {
  return (
    <div name="contact"className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
<form method="POST" action="https://getform.io/f/b9aa5487-51e7-43ff-940c-7e359994f37f" className="flex flex-col max-w-[600px] w-full">     
<div className="pb-8">
    <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300">Contact</p>
    <p className="text-gray-300 py-4">Submit the form below or shoot to my email- ruthifeobasi1@gmail.com </p>
</div>
<input type="text" placeholder="name" className="bg-[#ccd6f6] p-2 "/> 
<input type="email" placeholder="email" className="bg-[#ccd6f6] my-4 p-2"/> 
<textarea className="bg-[#ccd6f6] p-2" name="message" id="" cols="30" rows="10"></textarea>   
<button className="text-white border-2 hover:bg-purple-500 hover:border-purple-400 px-4 py-3 my-8 mx-auto flex items-center ">{"Let's collaborate"}</button>   
</form>
    </div>
  )
}

export default Contact
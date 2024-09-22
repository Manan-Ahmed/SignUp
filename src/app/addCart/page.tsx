"use client"

import { useState } from "react"


export default function AddCart(){
    const [eventPhoto,setEventPhoto] = useState<any>()

    const [eventName,setEventName] = useState('')
    const [eventCategory,setEventCategory] = useState('')
  
    const [eventDescription,setEventDescription] = useState('')
    const [eventLocation,setEventLocation] = useState('')
    const [customerNumber,setCustomerNumber] = useState('')
    const [eventDate,setEventDate] = useState('')

    const save = ()=>{
      const productData = {
        eventPhoto,
        eventName,
        eventCategory,
        eventDescription,
        eventLocation,
        customerNumber,
        eventDate
      }
      console.log(productData);
      
      setEventPhoto ('')
     setEventName('')
     setEventCategory('')
     setEventDescription('')
     setEventLocation('')
     setCustomerNumber('')
     setEventDate('')
    }


    return(
        <>
        <h1>Add Event Booking</h1>
        <div className="max-w-md mx-auto">
         <div className="relative z-0 w-full mb-5 group">
             <input type="file" value={eventPhoto} onChange={(e)=>{setEventPhoto(e.target.value)}} />
 </div>
   <div className="relative z-0 w-full mb-5 group">
     <input
      type="text"
      value={eventName}
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    onChange={(e)=>{setEventName(e.target.value)}}
      placeholder=" "
      required
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
     eventName
    </label>
  </div>
   <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      value={eventCategory}
      name="floating_password"
      id="floating_password"
      onChange={(e)=>{setEventCategory(e.target.value)}}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      eventCategory
    </label>
  </div> 
  

  <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      value={eventLocation}
      name="floating_password"
      id="floating_password"
      onChange={(e)=>{setEventLocation(e.target.value)}}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
     eventLocation
    </label>
  </div> 

  <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      value={eventDescription}
      name="floating_password"
      id="floating_password"
      onChange={(e)=>{setEventDescription(e.target.value)}}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
     eventDescription
    </label>
  </div> 


  <div className="grid md:grid-cols-2 md:gap-6">
 
   
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        value={customerNumber}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="floating_phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={(e)=>{setCustomerNumber(e.target.value)}}

        placeholder=" "
        required
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Phone number (123-456-7890)
      </label>
    </div>

    <div className="relative z-0 w-full mb-5 group">
      <input
        type="date"
        value={eventDate}
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        // name="floating_phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={(e)=>{setEventDate(e.target.value)}}

        placeholder="event date"
        required
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        eventDate
      </label>
    </div>
    
  </div>
  <button
    onClick={save}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
 >
    Save
  </button>
</div>
        

        </>
    )
}
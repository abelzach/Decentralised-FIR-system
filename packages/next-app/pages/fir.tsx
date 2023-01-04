export default function FIR() {
    return (     
    <div className='font-inter'>    
    <div className='flex flex-wrap h-screen flex-row justify-between'>
      <div className=' w-2/12 bg-[#131313]'>
        <p className="font-bold text-white text-xl ml-10 mt-5">
            DFIR
        </p>
        <div className='flex flex-col items-center'>
            <h1 className='mt-48 text-2xl font-extralight text-gray-100'>
                Filed by
            </h1>
            <p className='mt-4 text-base font-normal text-gray-200'>
                Kakkanad Police Station
            </p>
        </div>
      </div>
      <div className='w-10/12'>
        <div className='ml-10 mt-14'>
                <a href="/">
                <div className='flex flex-row gap-2'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                </svg>
                <p>
                    Home
                </p>
                </div>
                </a>
        <h1 className='text-4xl font-bold mt-4'>FIR Registration</h1>
             <p className='text-xl font-normal mt-2 text-slate-500'>Fill in the details regarding the report</p>
             <br/>
             <form className="w-ful">
              <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        FIR ID
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        NAME OF COMPLAINTENT
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        NAME OF ACCUSED
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        APPLICANT DETAILED NAME
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT DETAILED PARENTAGE
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT ADDRESS
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT CONTACT NUMBER
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT RELATIONSHIP WITH ACCUSED
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2">
                        FIR Description
                    </label>
                    <textarea className=" no-resize appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="Desc"></textarea>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        IPC SECTIONS
                    </label>
                    <input className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ipc" type="text"/>
                    </div>
                </div>

                <div className="flex justify-end md:flex md:items-center">
                    <div className="mr-24">
                    <button className="shadow bg-gradient-to-br from-teal-200 via-teal-400 to-teal-800 w-48 h-12 mt-4 text-slate-100focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                    </button>
                    </div>
                    <div className=""></div>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    )

}
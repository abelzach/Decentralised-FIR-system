import { Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function Evidence() {
    return (
        <>
        <div className="h-27 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
        <center>
            <h1>Evidence </h1>
            
            <h3>
                <Link href="/">Back to home</Link>
            </h3>
            <br/>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        CASE ID
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="caseId" type="text"/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3 w-96">
                        <label className="form-label inline-block mb-2 text-gray-700">Upload file</label>
                        <input className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                    </div>
                    </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Evidence Description
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="evidenceDesc"></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                    <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                    </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
                </form>
            <br/><br/><br/>
        </center>
            <style jsx>{`
            h1{
                font-size: 70px;
                font-weight: 800;
            }
            p {
            color: blue;
            }
            h3{
                font-size: 30px;
                font-weight: 400;
                color: #0070f3;
            }
        `}</style>
        </div>
        </>
    )

}
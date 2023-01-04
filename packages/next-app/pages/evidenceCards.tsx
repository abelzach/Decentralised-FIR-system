import { Center } from '@chakra-ui/react';
import Link from 'next/link'
import { Card, Stack, Image, Heading, Text, CardBody, SimpleGrid } from '@chakra-ui/react'
import {Evidences} from './evidencedata'



interface Evidence {
   "case_no" : number,
    "case_desc" : string,
}

interface Evidences_Props extends Array<Evidence>{};

var Evi: Evidences_Props = Evidences;
console.log(Evi);

export default function evidenceCards() {
    return (
        <>
        <div>
        <nav className="sm:px-4 py-2.5 opacity-100">
        <div className="container flex px-16 flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">DFIR</span>
            </a>
        </div>
        </nav>
            <h1>Evidences </h1>
            <p className='text-1xl font-bold mt-1 leading-tight text-slate-600'>Search and filter to find required evidences</p>

        <form className="flex items-center">   
            <label  className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
        </form>

        <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 4fr))'>

        {Evi.map(evi => <Card maxW='sm'>
                            <CardBody>
                                <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                {evi.case_desc}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                {evi.case_no}
                                </Text>
                                </Stack>
                            </CardBody>
                            </Card>
                                
                )
        }


            
            </SimpleGrid>
            <style jsx>{`
                h1{
                    font-size: 60px;
                    font-weight: 600;
                }
               
            `}</style>

        
        </div>
        </>
    )

}
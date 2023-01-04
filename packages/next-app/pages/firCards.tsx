import { Card, Stack, StackDivider, Box, Button, Heading, Text, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import {FIR} from './firdata'



interface FIRs {
    "fir_no" : number,
    "dor" : string,
    "name_complainant" : string,
    "name_accused" : string,
    "applicant_detail_name" : string,
    "applicant_detail_parentage" : string,
    "applicant_detail_address" : string,
    "applicant_detail_contact_no" : number,
    "applicant_relationship_accussed" : string,
}

interface FIR_Props extends Array<FIRs>{};

var FIRCard: FIR_Props = FIR;
console.log(FIRCard);

export default function firCards() {
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
        <center>
            <h1>FIR </h1>
            
        </center>

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

        {FIRCard.map(evi => <Card> 
                            <CardHeader>
                                <Heading size='md'>FIR ID {evi.fir_no}</Heading>
                            </CardHeader>

                            <Stack divider={<StackDivider />} spacing='4'>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Police Station
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                Kakkanad Police Station
                                </Text>
                            </Box>


                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Name of the Complainant
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.name_complainant}
                                </Text>
                            </Box>


                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Person Accussed
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.name_accused}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Person Accused
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.name_accused}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant Detail
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_name}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Parentage
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_parentage}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Address
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_address}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Contact detail
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_contact_no}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Relationship with Accussed
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_relationship_accussed}
                                </Text>
                            </Box>
                            </Stack>

                            
                        </Card>
                                
                )
        }


            
            </SimpleGrid>
            <style jsx>{`
                h1{
                    font-size: 70px;
                    font-weight: 800;
                }
            `}</style>

        
        </div>
        </>
    )

}
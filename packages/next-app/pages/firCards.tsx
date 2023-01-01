import { Card, Stack, StackDivider, Box, Button, Heading, Text, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link';

export default function evidenceCards() {
    return (
        <>
        <div className="h-27 bg-gradient-to-r from-rose-100 to-teal-100">
        <center>
            <h1>FIR </h1>
            <h3>
                <Link href="/">Back to home</Link>
            </h3>
        </center>
        <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 4fr))'>
        <Card>
            <CardHeader>
                <Heading size='md'>FIR ID</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Name
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Description
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    IPC sections
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <Card>
            <CardHeader>
                <Heading size='md'>FIR ID</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Name
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Description
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    IPC sections
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <Card>
            <CardHeader>
                <Heading size='md'>Client Report</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Summary
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Overview
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Analysis
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            </SimpleGrid>
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
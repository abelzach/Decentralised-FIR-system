import { Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function FIR() {
    return (
        <div>
    
        <center>
            <h1>FIR Registration</h1>
            
            <h3>
                <Link href="/">Back to home</Link>
            </h3>
            <br/>
            <form action="/" method="post">
                <label>First name:</label>
                <input
                    type="text"
                    id="first"
                    name="first"
                    pattern="[a-zA-Z]{1,18}"
                    title="Name should only contain alphabets"
                />
                <br/>
                <label >Last name:</label>
                <input
                    type="text"
                    id="last"
                    name="last"
                    pattern="[a-zA-Z]{1,18}"
                    title="Name should only contain alphabets"
                />
                <br/><br/>
                <button type="submit">Submit</button>
            </form>


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
    )

}
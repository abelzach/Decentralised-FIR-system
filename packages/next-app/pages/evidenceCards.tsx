import { Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function evidenceCards() {
    return (
        <>
        <center>
            <h1>Evidences </h1>
        </center>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    React Tailwind Card with Image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>

        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    React Tailwind Card with Image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>

        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    React Tailwind Card with Image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>

        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    React Tailwind Card with Image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>

        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    React Tailwind Card with Image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>
        
        </div>

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
        </>
    )

}

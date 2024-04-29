'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
const LoginComponent = () => {
    const [submit, setSubmit] = useState(false); // Use null to distinguish no response state
    const [value, setValue] = useState('');
    const [response, setResponse] = useState(false); // Use null to distinguish no response state
    const router = useRouter();
    const onChange = (e : any) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        setSubmit(true);
        if (checkResponse(value)) {
            setResponse(true); // Set response state to true on correct answer
            router.push('/journal'); // Redirect to journal page on correct answer
        } else {
            setResponse(false); // Set response state to false on incorrect answer
            setValue(''); // Clear the input field
        }
    };

    const checkResponse = (response: any) => {
        return response.toLowerCase() === 'linus'; // Handle case insensitivity here
    };

    return (
        <div className='w-screen h-screen bg-blue-300 flex flex-col justify-center items-center text-white'>
            <div className='w-full max-w-[600px] mx-auto'>
                <h1 className='text-3xl'>What will the Foops name their future dog?</h1>
            </div>
            <div>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <input
                        onChange={onChange}
                        value={value}
                        type="text"
                        placeholder="Enter your answer"
                        className="w-full h-12 p-4 text-xl outline-none bg-white bg-opacity-25 rounded-lg">
                    </input>
                    <button
                        type="submit"
                        className="bg-gray-800 px-10 py-4 mt-4 rounded-lg text-xl block mx-auto">
                        Submit
                    </button>
                </form>
                {response === false && submit === true && (
                    <div className = "text-red-500">
                        Incorrect answer. Please try again.
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginComponent;

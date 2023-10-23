import React from 'react'
import Card from './Card'

const AllCards = (props) => {
    let { data, src } = props;


    return (
        <div>
            <div className="flex flex-col gap-y-3 justify-center items-center overflow-x-none">
                <h2 className="mb-4 text-center text-2xl font-bold text-blue-600 marker:md:mb-6 lg:text-3xl">
                    Registered Users
                </h2>
                <div className="flex ssm:flex-row gap-x-5 justify-center items-center w-[95%] sssm:flex-col ">

                    {data.length === 0 && <h1 className=' text-purple-600 text-2xl font-sans text-center items-center p-4w-full '>No notes to display... Please Add some notes from above</h1>}
                    {data.map((cards) => {
                        return <Card first_name={cards.first_name} second_name={cards.second_name} gender={cards.gender} domain={cards.domain} email={cards.email} phone={cards.phone} degree={cards.degree} description={cards.description} src={cards.image} />
                    })}
                </div>


            </div>
        </div>
    )
}

export default AllCards
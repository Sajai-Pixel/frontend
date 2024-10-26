import React from 'react'
import Hero from '../components/Hero'
import RecipeItem from '../components/RecipeItem'

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='my-10 mx-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <RecipeItem />
                </div>
            </div>
        </div>
    )
}

export default Home

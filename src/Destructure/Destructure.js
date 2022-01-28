import React from 'react'

const Destructure = () => {

    const userResponse={userName:'test'}
    const Marks=[90,80,70,60,55]

    function getUserIPdetails({userName}){
        var userIP='0.0.0.0'
        return(
            [userName,' : ',userIP]
        )
    }

    function studentMarks([one,two,three]){
        return([one,two,three])
    }

    return(
        <div>
            <div className='body'>
                <p>getUserIPdetails()</p>
                <h1>{getUserIPdetails(userResponse)}</h1>
                <br/>
                <p>studentMarks()</p>
                {studentMarks(Marks).map(mark => <h1>{mark}</h1>)}
            </div>
        </div>
    )
}

export default Destructure
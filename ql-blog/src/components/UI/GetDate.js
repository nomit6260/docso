import React from 'react'

function GetDate({datetime}) {
    return (
        <div>
            {datetime.split("T")[0]}
        </div>
    )
}
export default GetDate
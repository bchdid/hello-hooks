import React, { useEffect } from 'react'

const Detail = ({ count }) => {

    // Like component will unmount
    useEffect(() => {
        return () => {
            console.log("Bye function detail comp")
        }
    }, [])

    return (
        <div>
            Hello from details {count}
        </div>

    )
}

// Like shouldComponentUpdate
export default React.memo(Detail, (prevProps, nextProps) => {
    // return false --> component will always render
    return false;
});

// export default React.memo(Detail);
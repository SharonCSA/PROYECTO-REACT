const CartWidget = () => {
    const notificationCount = 1; 
    return (
        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  hover:bg-orange-700 hover:text-white text-lg hover:rounded">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

                {notificationCount > 0 && (
                <span className="bg-red-400 text-white rounded-full px-2 py-1 text-xs absolute -mt-2 -ml-2">
                {notificationCount}
                </span>
        )}

                </a>
        </div>
    )
} 
export default CartWidget
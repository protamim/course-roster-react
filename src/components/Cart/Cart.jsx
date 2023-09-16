import PropTypes from 'prop-types';

const Cart = ({courseName, creditHr, totalPrice}) => {
    
    return (
        <>
            <div className='bg-white p-5 rounded-xl'>
                <div className='pb-3'>
                    <h3 className='text-lg text-pink-500 font-semibold'>Credit Hour remaining {20 - creditHr} hr</h3>
                </div>
                <div className='py-2 border-t'>
                    <h3 className='text-xl font-semibold'>Course Name</h3>
                    <div className='py-4'>
                    {courseName.map((item, index) => <h3 className='text-sm text-gray-500' key={index}> {index+1}. {item}</h3>)}
                    </div>
                </div>
                <div className='border-t py-2'>
                    <h3>Total credit hours: {creditHr} </h3>
                </div>
                <div className='border-t pt-2'>
                    <h3>Total Price: {totalPrice} USD</h3>
                </div>
            </div>
        </>
    );
};

Cart.propTypes = {
    courseName: PropTypes.array.isRequired,
    creditHr: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default Cart;
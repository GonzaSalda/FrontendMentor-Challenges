
const Notification = ({ item }) => {
    return (
        <>

            <img className='col-start-1 col-end-2  w-[45px] h-[45px]' src={item.img} alt="avatar" />
            
            {
                item.isImgComment &&
                <img className='col-start-3 col-end-4 w-[45px] h-[45px]' src={item.imgComment} alt="" />
            }

            <div className='col-start-2 col-end-3 row-start-1 row-end-2 flex flex-col'>
                <h5 className='font-bold'>{item.name} <span className='font-normal'>{item.text}</span> <span>{item.span}</span> {item.readed && <span className='w-2 h-2 inline-block rounded-full bg-[#E25858]'></span>}</h5>
                <span className='col-start-1 col-end-2  text-[#72757A]'>5day ago</span>
                {item.msg && <p className='col-start-2 col-end-3 row-start-2 row-end-3 border-2 rounded-md mb-2 py-3 px-2'>{item.msg}</p>}
            </div>

        </>
    )
}

export default Notification
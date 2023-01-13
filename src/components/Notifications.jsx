import Notification from './Notification'

const Notifications = ({people}) => {
  return (
    <>
       
            {people.map((item) =>(
              <div key={item.id} className={`${!item.readed && "bg-[#F6F9FE]"} ${item.isImgComment ? "grid-cols-[50px_10fr_50px]":"grid-cols-[50px_10fr]"} grid grid-rows-1  gap-3 mb-2 py-4 px-2 rounded-lg`}>
                <Notification  item={item} />
              </div>
            ))}
       

    </>
  )
}

export default Notifications
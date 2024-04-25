
const Sectionist = (props:any) => {
  return (
    <>
    <div className=" sm:h-[450px] sm:pb-0 pb-10  sm:grid sm:grid-cols-2 text-white bg-black border-t-4 border-[grey]">
        <div className="sm:p-[100px] sm:text-justify text-center sm:mt-0 mt-10">
        <h2 className=" sm:text-[40px] text-[30px] font-extrabold">{props.head}</h2>
        
        <p className="sm:text-[23px] text-[18px]">
          {props.para}
        </p>
        </div>
        <div className="sm:ml-20 ml-2 mt-5">
            <img src={props.img}  className="h-[300px]" alt="" />
        </div>
     

    </div>
   
    </>
  )
}

export default Sectionist
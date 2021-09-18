import React,{useRef} from React
const UseRefBasics=()=>{
    const refContainer=useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefualt();
        console.log('submited')
        console.log(refContainer.current.value)
    }
    useEffect(()=>{
        console.log('useEffect called')
        console.log(refContainer.current)
        refContainer.current.focus()
    })
    return(
        <>
            <form className={'form'}>
                <div>
                    <input type='text' ref={refContainer}/>
                </div>
                <button type='submit' ref={refButton}>submit</button>
            </form>
        </>
    )
}
export default UseRefBasics
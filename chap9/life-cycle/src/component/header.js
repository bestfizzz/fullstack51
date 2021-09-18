const Header =(props)=>{
    return(
        <header>
            <div className={'logo'}>logo</div>
            <input onChange={props.onChangeKeyword}/>
        </header>
    )
}
export default Header
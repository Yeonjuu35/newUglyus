function Logo(props) {
    return (
        <h1 className={`${props.cls ? props.cls : ''}`}>
          <img className={props.cls ? 'logoWidth' : 'logoWidth logoMargin'} src="./img/header/logo.svg" alt="어글리어스 로고" />
        </h1>
    )
}

export default Logo

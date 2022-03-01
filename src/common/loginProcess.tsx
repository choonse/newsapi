
export const setLogin = ({id, pwd}:any) => {
    if((id===process.env.REACT_APP_ID)&&(pwd===process.env.REACT_APP_PWD)){
        console.log('로그인 성공');
        localStorage.setItem('login',id);
        return true;
    }else{
        alert('아이디 또는 비밀번호를 확인해 주세요.')
    }
}
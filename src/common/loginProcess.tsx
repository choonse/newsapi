
// 로그인 처리작업
export const setLogin = ({id, pwd}:any) => {
    //로그인 성공
    if((id===process.env.REACT_APP_ID)&&(pwd===process.env.REACT_APP_PWD)){
        console.log('로그인 성공');
        localStorage.setItem('login',id);
        return true;
    //로그인 실패
    }else{
        
        alert('아이디 또는 비밀번호를 확인해 주세요.')
    }
}
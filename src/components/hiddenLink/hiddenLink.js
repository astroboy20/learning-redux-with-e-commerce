
import { useSelector } from 'react-redux'
import { selectIsloggedIn } from '../../redux/slice/authSlice'
const ShowOnLogin = ({children}) => {

    const isLoggedIn = useSelector(selectIsloggedIn)

    if(isLoggedIn){
        return children
    }
    return null
}
export const ShowOnLogOut = ({children}) => {

    const isLoggedIn = useSelector(selectIsloggedIn)

    if(!isLoggedIn){
        return children
    }
    return null
}

export default ShowOnLogin
import AppContext from './AppContext';
import { useContext } from 'react';

const Visibility = () => {
    const {visible} = useContext(AppContext)

    if (visible) {
        return null
    }
    return(
        <div>No stocks added yet.</div>
    )
}
export default Visibility
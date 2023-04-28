import { BlueChecked } from '../BlueCheck/BlueCheck';
import './Profile.css'

type ProfileProps = {
    name: string;
    image: string;
    checked: boolean;
}


export const Profile = (props: ProfileProps) => {
    const {name, image, checked} = props;
    return <div className='profile'>
        <img className='rounded-image' src={image} alt="Avatar"></img>
    <h1 style={{backgroundColor: 'yellow', color: 'black'}}>{name}</h1>
    {checked && <BlueChecked />}
</div>

}
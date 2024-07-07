import React, { } from "react";
import { Link } from 'react-router-dom';
import { deleteProfile } from '../API/profiles'
import { useQueryClient, MutateFunction } from 'react-query';
import '../Css/ProfileCard.css';

interface profile {
    id: string,
    nickname: string,
    surname: string,
    age: number,
    icon: string,
    deleteProfile: (id: string) => void
}

const ProfileCard: React.FC<profile> = ({ nickname, surname, age, icon, id, deleteProfile }) => {

    const btn_delete = async () => {
        deleteProfile(id);
    }

    return (
        <div>
            <div className='profile-card'>
                <div className='profile-image-container'>
                    <img src={icon} alt={`${nickname}'s profile`} className='profile-image' />
                </div>
                <div className='profile-info'>
                    <h3>{nickname}</h3>
                    <p>{surname}</p>
                    <p><strong>Yaş: </strong>{age}</p>
                    <Link to={`/profile/${id}`} className='view-profile'>Profile Git</Link>
                </div>
                <button className='delete-button' onClick={() => {  btn_delete() }}>Sil</button>
            </div>
        </div>
    )
}

export default ProfileCard;
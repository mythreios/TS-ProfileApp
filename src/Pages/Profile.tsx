import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { getProfile } from '../API/profiles';
import React from 'react';
import '../Css/Profile.css';

type params = {
    id: string
}

type profile = {

    id: string,
    age: number
    icon: string,
    nickname: string
    surname: string
}

const ProfilePage: React.FC = () => {

    const { id }: params = useParams() as params

    const { data, isLoading } = useQuery<profile>({
        queryFn: () => getProfile({ id: id }),
        queryKey: ["key"]
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    const createCard = () => {

        if (typeof data === "undefined") {
            return;
        }
        return (
            <div className="profile-container">
                <div className="profile-card">
                    <div className='profile-image-container'>
                        <img src={data.icon} alt={`${data.nickname}`} className='profile-image' />
                    </div>
                    <h2>{data.nickname}</h2>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Soyisim:</strong> {data.surname}</p>
                    <p><strong>Yaş:</strong> {data.age}</p>
                    <Link to="/" className="linkButton">Geri Git</Link>
                </div>

            </div>
        )
    }

    return (
        <>
            {createCard()}
        </>
    )
}

export default ProfilePage;
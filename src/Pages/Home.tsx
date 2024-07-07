import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { FC, ReactNode, useState } from 'react';
import { getAllProfiles, deleteProfile } from '../API/profiles';
import axios from 'axios';
import ProfileCard from '../Components/ProfileCard';

interface profile {
    id: string,
    nickname: string,
    surname: string,
    age: number,
    icon: string
}

const HomePage: React.FC = () => {

    const queryClient = useQueryClient();
    const [userProfiles, setUserProfiles] = useState([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["listOfProfiles"],
        queryFn: () => getAllProfiles()
    })

    const updateMutation = useMutation({
        mutationKey: ["deleteProfile"],
        mutationFn: async (id: string) => {
            try {
                await deleteProfile(id);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    console.error("Axios error alındı: ", err.response?.data);
                } else {
                    console.error("General error:", error);
                }
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["listOfProfiles"]);
        }
    })

    const renderProfiles = (): ReactNode => {
        return data.map((val: profile, index: number) => <ProfileCard key={index} nickname={val.nickname} surname={val.surname} age={val.age} icon={val.icon} id={val.id} deleteProfile={updateMutation.mutateAsync} />)
    }

    if (error) {
        console.log(error);
    }

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {renderProfiles()}
        </div>
    )
}

export default HomePage;
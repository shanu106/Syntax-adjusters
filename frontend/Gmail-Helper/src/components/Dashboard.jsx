import React, { useEffect } from 'react';
import { fetchGmailData } from '../utils/fetchGmailData';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const accessToken = location.state?.accessToken;
    console.log("hello");
    console.log("hello2", accessToken);
    useEffect(() => {
        if (!accessToken) return;

        const run = async () => {
            const emails = await fetchGmailData(accessToken);
            await fetch("http://localhost:3000/api/email/process", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ emails }),
            });
            console.log(emails);
        };
        run();
    }, [accessToken]);

    return (
        <div>
            Welcome to Your Gmail-powered Dashboard!
        </div>
    );
};

export default Dashboard;
import axios from "axios";
export const fetchGmailData = async (accessToken)=>{
    console.log("this is : ",accessToken)
    const lisRes = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=80&access_token=${accessToken}` );
    const {messages}= await lisRes.json();

    const detailedEmails = await Promise.all(
        messages.map(async ({id})=>{
            const detailRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`,{
                headers:{
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            const detail = await detailRes.json();
            const headers = detail.payload.headers;

            const from = headers.find(h => h.name === 'From')?.value || '';
            const subject = headers.find(h => h.name === 'Subject')?.value || '';
            const snippet = detail.snippet || '';

            return {from, subject,content:snippet};
        })
    )
    return detailedEmails;

}
import {google} from 'googleapis';

async function getEmails(accessToken){
    const oauth2client = new google.auth.OAuth2();
    oauth2client.setCredentials({access_token: accessToken});

    const gmail = google.gmail({version: 'v1', auth: oauth2client});

    const list = await gmail.users.messages.list({
        userId: 'me',
        maxResults: 10,
        labelIds:['INBOX']
    });
    const messages = list.data.messages || [];

    const emailData = await promise.all(messages.map(async (msg)=>{
        const details = await gmail.users.messages.get({
            userId:'me',
            id: msg.id
        });

        const headers = detail.data.payload.headers;

        const subject = headers.find(h=> h.name === 'Subject')?.value || '';
        const sender = headers.find(h=> h.name === 'From')?.value || '';
        const snippet = detail.data.snippet;

        return {id: msg.id, sender, subject, snippet};
    }))
    return emailData;
}

export default getEmails;
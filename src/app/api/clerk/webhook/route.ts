import { db } from "~/server/db";

export const POST = async (req: Request) => {
    // Handle POST request
    const {data} = await req.json()
    // console.log('data:', data)
    const emailaddress = data.email_addresses[0].email_address
    const firstname = data.first_name
    const lastname = data.last_name
    const imgurl = data.image_url
    const Id = data.id

    await db.user.create({
        data: {
            id: Id,
            emailAddress: emailaddress,
            firstName: firstname,
            lastName: lastname,
            imgUrl: imgurl,
        }
    })
    console.log("user created")
    return new Response('POST request handled', { status: 200 });
    
};

// export const GET = async (req: Request) => {
//     // Handle GET request
//     const {data} = await req.json()
//     console.log('data2:', data)
//     return new Response('GET request handled', { status: 200 });
// }; 
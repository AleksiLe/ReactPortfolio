import { Paper } from "@mui/material";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Loading from "../animatedloading/Loading";
interface Iprop {
    steamId: string,
    personaname: string,
    profileurl: string,
    avatar: string,
    avatarmedium: string,
    avatarfull: string,
    personastate: number,
    communityvisibilitystate: number,
    profilestate: number,
    lastlogoff: number, //unix time
    commentpermission: number,
    realname?: string,
    primaryclanid?: string,
    timecreated?: number, //?
    gameid?: string,
    gamerserverip?: string,
    gameextrainfo?: string,
    cityid?: number,
    loccountrycode?: string,
    locstatecode?: string,
    loccityid?: number
} //https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerSummaries_.28v0002.29


const queryClient = new QueryClient()
export default function SteamProfileCard(prop: {steamId: string}) {
    return (
        <QueryClientProvider client={queryClient}>
            <SteamCard steamId={prop.steamId}/>
        </QueryClientProvider>
    )
}

function SteamCard(prop: {steamId: string}) {
    console.log(prop)
    const steamApiKey = import.meta.env.VITE_STEAM_API_KEY
    const publicCORS = "https://cors-anywhere.herokuapp.com/" // Enables public CORS (WIP)
    const {isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch(`${publicCORS}https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=${prop.steamId}`).then(res => res.json()).then(data => data)
    }) //testing id 76561197960435530
    if (isLoading) return (
        <div>
            <Loading/>
        </div>
    )
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {data.response.players[0] ?
            <Paper elevation={5} sx={{ padding: 2, margin: 2, backgroundColor: "inherit", borderRadius: 2, color: 'white'}}>
                <h1>{data.response.players[0].steamid}</h1>
            </Paper> 
            : 
            <Paper elevation={5} sx={{ padding: 2, margin: 2, backgroundColor: "inherit", borderRadius: 2, color: 'white'}}>
                <h1>Not Found</h1>
            </Paper> 
            }
        <ReactQueryDevtools initialIsOpen />
        </div>
        
    )
}
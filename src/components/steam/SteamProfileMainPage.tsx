import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useTheme } from '@mui/material/styles';
import Loading from '../animatedloading/Loading';
const queryClient = new QueryClient()
export default function SteamProfileMainPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <SteamProfilePage />
        </QueryClientProvider>
    )
}

function SteamProfilePage() {
    const steamApiKey = import.meta.env.VITE_STEAM_API_KEY
    const publicCORS = "https://cors-anywhere.herokuapp.com/" // Enables public CORS (WIP)
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch(`${publicCORS}https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=76561197960435530`).then(res => res.json()).then(data => data)
    })
    const theme = useTheme()
  if (isLoading) return <Loading />
  
  if (error) return 'An error has occurred: ' + error.message
  
  return (
    <div style={{ paddingTop: `${theme.mixins.toolbar.minHeight}px` }}>
        <h1>Steam Profile</h1>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}
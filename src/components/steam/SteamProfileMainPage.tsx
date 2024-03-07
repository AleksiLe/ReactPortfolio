import { useTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import SteamProfileCard from './SteamProfileCard';
import { useState } from 'react';

export default function SteamProfileMainPage() {
    const theme = useTheme()
    const [steamId, setSteamId] = useState<string | null>(null)
    const [steadIdTextField, setSteamIdTextField] = useState<string>('')

        
    const handleKeyDown = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            setSteamId(steadIdTextField)
            setSteamIdTextField('')
        }
    }
  
  return (
    <div style={{ paddingTop: `${theme.mixins.toolbar.minHeight}px` }}>
        <TextField id="filled-basic" label="Steam 64 ID" variant="standard" 
            sx={{
            "& .MuiInput-underline:before": {
            borderBottom: "1px solid white"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid white"
            },
            "& .css-1eed5fa-MuiInputBase-root-MuiInput-root": {
            color: "white"
            },}}
            InputLabelProps={{ 
            style: { color: 'white'},
            }} 
            onChange={(event) => setSteamIdTextField(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
            value={steamId}
            />
        {steamId && <SteamProfileCard steamId={steamId}/>}
    </div>
  )
}
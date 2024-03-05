import "./Loaded.css"
import { useTheme } from '@mui/material'

export default function Loaded() {

    const theme = useTheme()
    return (
        <div className="slide-in" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
            }}>
            <h1>Loaded</h1>
        </div>
    )
}
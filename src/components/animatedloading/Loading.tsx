import { CircularProgress } from "@mui/material"
export default function Loading() {
    return (
        <div style={{    
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'}}>
             <CircularProgress size='4rem'/>
        </div>
    )
}
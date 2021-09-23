import { AppBar,Toolbar, makeStyles, createStyles, Typography, Theme, Select, MenuItem,  FormControl } from "@material-ui/core"
import { useAppContext } from 'src/AppContext';
import { useActions } from "building-editor-react";

const useStayles=makeStyles((theme: Theme)=>
    createStyles({
        root:{
            display: 'flex',
            flex:1
        }
    })
)
export default function Header():React.ReactElement{
    const classes = useStayles();
    const {mode, setMode } = useAppContext();

    const handleChange = (event: React.ChangeEvent<{value:unknown}>)=>{
        setMode(event.target.value as string);
    }
    
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <FormControl>
                        <Select labelId="mode-label" id="mode" value={mode} onChange={handleChange}>
                        <MenuItem value={'3d'}>3D</MenuItem>
                        <MenuItem value={'table'}>Table</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </div>
    )

}
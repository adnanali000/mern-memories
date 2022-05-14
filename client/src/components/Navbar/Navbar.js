import React,{useState,useEffect} from 'react'
import { AppBar, Typography,Toolbar,Button,Avatar } from '@material-ui/core'
import useStyles from './styles'
import memories from '../../images/memories.png'
import {useDispatch} from 'react-redux'
import {useNavigate , useLocation , Link} from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(user);

    useEffect(()=>{
        const token = user?.profile

        //JWT...

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    const logout = ()=>{
        dispatch({ type: 'LOGOUT'})

        navigate('/')
        setUser(null)

    }



    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img src={memories} className={classes.image} alt="memories" height="60" width="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
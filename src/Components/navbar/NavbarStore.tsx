import "./navbarStore.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import StoreIcon from '@mui/icons-material/Store';
import React, { useState } from "react";
import { Button, Popover } from "@mui/material";
import Typography from "@mui/material";

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined;

    
    return (
        <div className={'navbar'}>
            <div className={'wrapper'}>
                <div className="search">
                    <input type="text" placeholder={'Search...'} />
                    <SearchIcon />
                    </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            onClick={() => dispatch({ type: "TOGGLE" })}/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <Button aria-describedby={id} variant="contained" onClick={handleClick} className="icon-button" >
                        <StoreIcon className="icon-store"/>
                        </Button>
                  

                        <Popover 
                         id={id}
                         open={open} 
                         anchorEl={anchorEl} 
                         onClose={handleClose} 
                         anchorOrigin={{
                            vertical: 'bottom' , 
                            horizontal: 'center',
                        }}>
                        <div className="over">
                        <Button className="button-over">
                        New Store
                        </Button>    
                        </div>
                 
                        <div className="over">
                        <Button >
                        List Stores
                        </Button>    
                        </div>

                        <div className="over">
                        <Button >
                        Edit Store
                        </Button>    
                        </div>
                      
                        </Popover>
                    </div>
                    <div className="item">
                        <PermIdentityIcon className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
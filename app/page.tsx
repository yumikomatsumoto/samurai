"use client";
import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import  * as CSS from "csstype";

enum LiveStatus{
  Schedule=0,
  Live=1,
  Exit=99,
}

interface Thumnail{
  url: string,
  createdAt: string,
  title: string,
  liveStatus: LiveStatus
  liveChanel: string,
  liveActor: string,
}

export default function Home() {
  const[anchorEl,setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const thumnails: Thumnail[] = [
    {
      url:"http://img.youtube.com/vi/AuQov5W65LY/mqdefault.jpg",
      createdAt: "2/15 09:00",
      title:"マイクラバトミントンリーグ",
      liveStatus: LiveStatus.Schedule,
      liveChanel: "xxx",
      liveActor: "",
    },

    {
      url:"http://img.youtube.com/vi/jHRlw1e3YEg/mqdefault.jpg",
      createdAt:"2/16 11:00",
      title:"逆転裁判4",
      liveStatus: LiveStatus.Live,
      liveChanel: "xxx",
      liveActor: "",
    },

    {
      url: "http://img.youtube.com/vi/PFjnhRsJgHU/mqdefault.jpg",
      createdAt: "2/17 18:00",
      title: "私の酸素を吸わないでほしい ／ Vo.羽渦ミウネル",
      liveStatus: LiveStatus.Exit,
      liveChanel: "xxx",
      liveActor: "",
    },
  ];

  const TitleComponent=({children})=>{
    return(
      <div className="pt-6 flex justify-center items-center">
        {children}
      </div>
    );
  }

  const menuOptions=[
    {name:"VOMS.net", link: "/" },
    {name:"Concept",link: "concept"},
  ];

  const textStyle = () => {
    const divStyle: CSS.Properties={
      textAlign: 'center',
    }
    return divStyle
  }

  const liveStatusComponent=(liveStatus:LiveStatus)=>{
    switch(liveStatus){
      case LiveStatus.Schedule:
        return<>
        <div style={textStyle()}>
        <p className="bg-blue-600">配信予定</p>
        </div>
        </>

      case LiveStatus.Live:
        return<>
        <div style={textStyle()}>
        <p className="bg-red-300">配信中</p>
        </div>
        </>

        case LiveStatus.Exit:
          return<>
          <div style={textStyle()}>
          <p className="bg-gray-300">配信終了</p>
          </div>
          </>
      default:
        return;
      }
    }
  const cardComponent =(thumnail: Thumnail, key: number) =>(
    <Card key = {key} sx={{ width: 300 }} className="ml-4" >
    <CardContent className="border-b">
      <Typography className="font-bold mb-2 flex items-center">
        <AccessTimeIcon/>
        <span className="ml-2">{thumnail.createdAt}</span>
      </Typography>
      <div className="relative">
        <Typography variant="body2">
          <img
          src={`${thumnail.url}`}
          alt="サムネイル"
          />
        </Typography>
        <div className="absolute bottom-1 right-0 w-20 text0sm text-white tect-center">
          {liveStatusComponent(thumnail.liveStatus)}
        </div>
      </div>
      <Typography className="font-bold mt-2 flex items-center">
        <YouTubeIcon className="text-red-600"/>
        <span className="ml-2">{thumnail.title}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <div className="grid gird-cols-2 grid-rows-2 gap-4 text-xs ml-2 h-14">
        <div className="font-bold">配信ch</div>
        <div>{thumnail.liveChanel}</div>
        <div className="font-bold">出演</div>
        <div>{thumnail.liveActor}</div>
      </div>
    </CardActions>
  </Card>
  );

const handleClick=(event: React.MouseEvent<HTMLElement>)=>{
  setAnchorEl(event.currentTarget);
};

const handleClose=()=>{
  setAnchorEl(null);
};

  return (
      <>
      <div className="h-screen w-screen"
      style={{
        backgroundImage:"url(/background.jpeg)",backgroundSize:"cover", resize:"both"
      }}>

      <div className="flex justify-center">
        <TitleComponent>
            <h2 className="text-8xl font-extrabold">VOMS.net</h2>
          </TitleComponent>
          <div>
          <div className="flex items-center p-20px justify-end">
              <Link href="/">#voms_project</Link>
              <div className="pl-20">
                  <span>share</span>
                <TwitterIcon color="primary" className="ml-2"/>
                </div>
      <IconButton
       className="ml-28"
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon sx={{fontSize: 48}}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        {menuOptions.map((option)=>(
          <MenuItem
          key={option.name}
          onClick={handleClose}>

            <Link href={option.link}>{option.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
          </div>

          <TitleComponent>
            <h3 className="font-extrabold">VTuber “VOMS Project” Official</h3>
          </TitleComponent>

          <TitleComponent>
            <h3 className="text-2xl font-extrabold">Live Schedule</h3>
          </TitleComponent>
        </div>


          {/* TODO:メニューを実装する */}
        <div className="flex justify-center">
          {thumnails.map(cardComponent)}
        </div>
      </div>
  </>
  );
}

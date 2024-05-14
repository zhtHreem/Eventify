import { Container,LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ImageIcon from '@mui/icons-material/Image';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GradingIcon from '@mui/icons-material/Grading';
import { useLocation } from 'react-router-dom';

const ProgressBar_2 = ({progressValue}) => {
   let [startColor,setStartColor] = useState('black'); 
   let [addImageColor,setAddImageColor] = useState('#c2c3c4'); 
   let [addTicketColor,setAddTicketColor] = useState('#c2c3c4'); 
   let [ReviewColor,setreviewColor] = useState('#c2c3c4'); 

   const location = useLocation();
  useEffect(()=>{


    
    updateColor()


  },[])

  function updateColor(){
    // console.log(location)
    if(location.pathname == '/banner'){
      // console.log("here")
      setStartColor("#052c99")
      setAddImageColor("#052c99")
    }

    if(location.pathname == '/')
    {
      setStartColor("#052c99")
    }

    if(location.pathname == '/addticket'){
      setStartColor("#052c99")
      setAddImageColor("#052c99")
      setAddTicketColor('#052c99')
    }
    if(location.pathname == '/event'){
      setStartColor("#052c99")
      setAddImageColor("#052c99")
      setAddTicketColor('#052c99')
      setAddTicketColor('#052c99')
    }
  }

  // console.log(location.pathname);

  return (
    
    <Container  style={{marginTop:"10px",paddingBottom:"10px",paddingTop:"10px"}} >
         <LinearProgress  sx={{mb:3,height:"10px",borderRadius:"50px"}} variant="determinate" value={progressValue} />
        <Container sx={{display:"flex",textAlign:"center"}}>
            <Container>
            <PlayCircleFilledIcon color={startColor} sx={{fill:startColor}}/>
            <Typography  sx={{fontFamily:"Poppins",color:startColor}}>Start</Typography>
            </Container>
            
            <Container>
            <ConfirmationNumberIcon sx={{fill:addTicketColor}} />
            <Typography sx={{fontFamily:"Poppins",color:addTicketColor}}>Add Tickets</Typography>
            </Container>
            <Container>
            <GradingIcon sx={{fill:ReviewColor}} />
            <Typography sx={{fontFamily:"Poppins",color:ReviewColor}}>Review</Typography>
            </Container>
        </Container>
    </Container>
  )
}

export default ProgressBar_2
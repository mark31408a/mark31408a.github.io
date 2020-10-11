import React ,{useEffect,useState}from 'react';
import {Card,Button,ProgressBar} from 'react-bootstrap'

const LieDetector = (props) => {
    const [percentage, setpercentage] = useState(100);
    const [wrd, setwrd] = useState("");
    const [ans, setans] = useState(true);
    
    useEffect(() => {
        const interval = setInterval(() => {
                setpercentage(percentage=>percentage===100?percentage:percentage+10);
                
        }, 50);
        return () => clearInterval(interval);
      }, []);
      const TrueOnclick=()=>{
        if(percentage!==100) return
        setpercentage(0);
        setwrd(ans?"Congratulations! You are telling the truth.":"Stop lieing!!!")
      };
      const FalseOnclick=()=>{
        if(percentage!==100) return
        setpercentage(percentage=>0);
        setwrd(!ans?"Congratulations! You are telling the truth.":"Stop lieing!!!")
      };
      
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Img varient="bottom" src="./fingerprint.png" style={{ width: '5rem' }} onClick={()=>setans(!ans)}/>
                <Card.Title>Liedetector</Card.Title>
                <Card.Subtitle>I can see through everything...</Card.Subtitle>
                <Card.Text>answer the question!</Card.Text>
                <Button  variant="success" onClick={TrueOnclick}>true</Button>
                <Button variant="danger" onClick={FalseOnclick}>false</Button>
                <Card.Text>please be patient.</Card.Text>
                {percentage===100?<Card.Text>{wrd}</Card.Text>:<ProgressBar striped variant="warning" now={percentage} />}
                
  
            </Card.Body>
        </Card>
    );
}

export {LieDetector};
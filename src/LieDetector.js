import React ,{useEffect,useState}from 'react';
import {Card,Button,ProgressBar} from 'react-bootstrap'

const LieDetector = (props) => {
    const [percentage, setpercentage] = useState(100);
    const [wrd, setwrd] = useState("");
    const [ans, setans] = useState([true]);
    const [wait, setwait] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
                setpercentage(percentage=>percentage===100?percentage:percentage+10);
                
        }, 300);
        return () => clearInterval(interval);
      }, []);
      const TrueOnclick=()=>{
        if(percentage!==100){
            setwait(true)
            return 
        }
        setpercentage(0);
        setwrd(ans[0]?"Congratulations! You pass.":"Stop lieing!!!")
        if(ans.length>1){
            ans.shift()
            setans(ans);
        }

      };
      const FalseOnclick=()=>{
        if(percentage!==100){
            setwait(true)
            return 
        }
        setpercentage(percentage=>0);
        setwrd(!ans[0]?"Congratulations! You pass.":"Stop lieing!!!")
        if(ans.length>1){
            ans.shift()
            setans(ans);
        }
      };
      
    return (
        <Card style={{ width: '19rem' }}>
            <Card.Body>
                <Card.Img varient="bottom" src="./fingerprint.png" style={{ width: '5rem' }} onClick={()=>{
                    ans.push(true)
                    setans(ans)
                }}/>
                <span> </span>                
                <Card.Img varient="bottom" src="./fingerprint.png" style={{ width: '5rem' }}/>
                <span> </span>
                <Card.Img varient="bottom" src="./fingerprint.png" style={{ width: '5rem' }} onClick={()=>{
                    ans.push(false)
                    setans(ans)
                }}/>
                <Card.Title>Liedetector</Card.Title>
                <Card.Subtitle>I can see through everything...</Card.Subtitle>
                <Card.Text>answer the question!</Card.Text>
                <Button  variant="success" onClick={TrueOnclick}>true</Button>
                <Button variant="danger" onClick={FalseOnclick}>false</Button>
                <Card.Text> </Card.Text>
                {percentage===100?<Card.Text>{wrd}</Card.Text>:<ProgressBar striped variant="warning" now={percentage} />}
                {percentage!==100&&wait?<Card.Text>please be patient.</Card.Text>:""}
                
  
            </Card.Body>
        </Card>
    );
}

export {LieDetector};
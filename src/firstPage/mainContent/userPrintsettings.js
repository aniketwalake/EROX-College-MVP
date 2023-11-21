import React, {useState,useEffect} from "react";
import { storage } from "../../firebase"; 
import { ref,uploadBytesResumable } from 'firebase/storage';
import {v4} from 'uuid';

export default function Userprintsettings() {

    const [file, setFile] = useState(0);
    const [uploadSuccess, setUploadsuccess] = useState(false);
    const [progressbar, setProgressbar] = useState(0);
    const [copies, setCopies] = useState(0);
    const [color, setColor] = useState(true);
    const [BandWobj, setBandWobj] = useState({borderRadius:"10px",backgroundColor:"cyan"});
    const [colorobj, setColorobj] = useState({borderRadius:"10px"});
    const [layout, setLayout] = useState(true);
    const [Potraitobj, setPotraitobj] = useState({borderRadius:"10px",backgroundColor:"cyan"});
    const [Landscapeobj, setLandscapeobj] = useState({borderRadius:"10px"});

    function toggleColor(){
      setColorobj(()=>{return color===true?{borderRadius:"10px",}:{borderRadius:"10px",backgroundColor:"cyan"};});
      setBandWobj(()=>{return color===true?{borderRadius:"10px",backgroundColor:"cyan"}:{borderRadius:"10px",};});
    }

    function toggleLayout(){
      setPotraitobj(()=>{return layout===true?{borderRadius:"10px",backgroundColor:"cyan"}:{borderRadius:"10px",};})
      setLandscapeobj(()=>{return layout===true?{borderRadius:"10px",}:{borderRadius:"10px",backgroundColor:"cyan"};})
    }

    useEffect(toggleColor,[color]);
    useEffect(toggleLayout,[layout]);
      
    function handleFileChange(e){
        setUploadsuccess(false);
        setProgressbar(0);
        setFile(e.target.files[0]);
    }

    function increaseCopiesNumber(e){
      e.preventDefault();
      setCopies((copies)=> copies+1 );
    }

    function decreaseCopiesNumber(e){
      e.preventDefault();
      setCopies(copies => copies<=0?copies:copies-1);
    }

    function setBandWcopy(e){
      e.preventDefault();
      setColor(color=> color===true?color:!color);
    }

    function setColorCopy(e){
      e.preventDefault();
      setColor(color=> color===false?color:!color);
    }

    function setPotrait(e){
      e.preventDefault();
      setLayout(layout=> layout===true?layout:!layout);
      
    }

    function setLandscape(e){
      e.preventDefault();
      setLayout(layout=> layout===false?layout:!layout);
    }

    async function handleUpload(event) {
      event.preventDefault();
      try {
            let filename = file.name;   
            console.log(file.name);
            const storageref = ref(storage, `secondFiles`);
            const storageref2 = ref(storageref,`${filename}`+v4()+'.pdf');
            const metadata = {contentType:'application/pdf'};    
            const uploadedFile = uploadBytesResumable(storageref2,file,metadata);
            uploadedFile.on("state_changed",(snapshot)=>{
                let datatransfered = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                setProgressbar(datatransfered);
                if (datatransfered === 100){
                    setUploadsuccess(true);
                  }
            })
        }

      catch(error) {  
        console.log('error',error);
        }
    }


    return (
      <section id="home">
        <form className="user-settings-form">
            <div className="input-container">    
              <button className="input-button">     
                <input type="file" accept=".pdf" onChange={handleFileChange} className="file-input"></input>
                <img src="images/EROX/Website_Icon/upload.svg" alt="no-upload" style={{marginRight:"10px",height:"45px",width:"45px",paddingRight:"10px"}}></img>
                <div>
                  {file!==0 ? <span>{file.name} selected</span>:<span> Choose File / Drop File </span>}
                </div>
              </button>
              <div className="upload-info">
                {progressbar>0?
                  <div style={{borderWidth: "1px",borderStyle: "solid",width:"300px",display:"grid",alignItems:"center",height:"20px"}}>
                    <span style={{width:`${progressbar}%`,backgroundColor:"red",marginLeft:"0px",height:"20px"}}></span>
                    {`${Math.round(progressbar)}%`}
                  </div> : <div></div>}
                {uploadSuccess &&
                  <span style={{color:"green"}}>
                    upload successful
                  </span>}
              </div>
            </div>
            <div className="settings-button-divs">
              <div className="settings-buttons">
                <div style={{display:"grid",gridTemplateRows:"30px 50px"}}>
                    <div>
                      <h4 style={{margin:"0px"}}>
                        copies
                      </h4>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"100px 50px",alignItems:"center",border: "1px solid black",borderRadius:"10px",marginRight:"47px",height:"52px"}}>
                      <h3 style={{textAlign:"center",alignItems:"center",margin:"0px",width:"80px"}}>{copies}</h3>
                      <div style={{display:"grid",height:"50px",margin:"0px"}}>
                        <button onClick={increaseCopiesNumber} style={{borderRadius:"10px",fontSize:"10px"}}>&#x25B2;</button>
                        <button onClick={decreaseCopiesNumber} style={{borderRadius:"10px",fontSize:"10px"}}>&#x25BC;</button>
                      </div>
                    </div>    
                </div>
                <div style={{display:"grid",gridTemplateRows:"30px 50px"}}>
                  <div>
                    <h4 style={{margin:"0px"}}>
                      select color
                    </h4>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"90px 90px",columnGap:"5px"}}>
                    <button onClick={setColorCopy} style={colorobj}>COLOR</button>
                    <button onClick={setBandWcopy} style={BandWobj}>B&W</button>
                  </div>
                </div>
                <div>
                  <div>
                    <h4 style={{margin:"0px",marginBottom:"8px"}}>
                      paper size
                    </h4>
                  </div>
                  <div style={{height:"50px",width:"150px",display:"flex",alignItems:"center",borderRadius:"10px",border: "1px solid black"}}>
                    <span style={{marginLeft:"20px"}}>A4</span>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateRows:"30px 50px"}}>
                  <div>
                    <h4 style={{margin:"0px"}}>
                      select layout
                    </h4>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"90px 90px",columnGap:"5px"}}>
                    <button onClick={setPotrait} style={Potraitobj}>Potrait</button>
                    <button onClick={setLandscape} style={Landscapeobj}>Landscape</button>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" onClick={handleUpload} style={{height:"40px",width:"100px",borderRadius:"50px"}}>Upload</button>
              </div>
            </div>
        </form>
      </section>
    )
}
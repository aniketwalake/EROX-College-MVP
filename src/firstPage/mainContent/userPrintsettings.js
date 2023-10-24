import React, {useState} from "react";
import { storage } from "../../firebase"; 
import { ref,uploadBytes } from 'firebase/storage'
import {v4} from 'uuid'
export default function Userprintsettings() {

    const [file, setFile] = useState(null);
    
    function handleFileChange(e){
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    async function handleUpload(event){
      event.preventDefault();
      try {
      let filename = file.name   
      console.log(file.name);
      // let doc = await addDoc(collectionref,{color:'sin',name:'arjun','paper size':2,pdfFile:file,'total pages':2});
      // console.log(doc.id);
      const storageref = ref(storage, `firstFiles/files`);
      const storageref2 = ref(storageref.parent,`${filename}`+v4()+'.pdf');
      const metadata = {contentType:'application/pdf'};    
      const uploadedFile = await uploadBytes(storageref2,file,metadata);
      console.log(uploadedFile.metadata)  
      }
      catch(e) {  
        console.log('error',e)
      }
    }


    return (
        <form>
            <input type="file" accept=".pdf" onChange={handleFileChange}></input>
            <button type="button" onClick={handleUpload}>Upload</button>
        </form>

    )
}
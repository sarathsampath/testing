import React,{useState} from 'react'

function Displayimage() {
    const [variable,setvariable]=useState("aws.png")
    return (
        <div>
            <a href ="https://checkbucket1567.s3-eu-west-1.amazonaws.com/Sarath_Resume_Final.pdf" target="_blank">Download</a>
            <img src={require("../Imagesphoto_2020-07-25_09-30-58"+".png")}></img>
          <img src={"https://checkbucket1567.s3-eu-west-1.amazonaws.com/"+variable} alt="image" width="300px" height="400px"></img>
        </div>
    )
}

export default Displayimage

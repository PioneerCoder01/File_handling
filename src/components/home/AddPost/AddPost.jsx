import React from "react";
import './AddPost.css';
import Button from "../../buttons/buttons";
import upload from '../../../assets/icons/uploadFile.svg';

const AddPost = () =>{
    return(
        <div className="AddPost">
            <Button textBtn = "Add post" styleBtn = "gray"/>
            <img src={upload} alt="upload" />
        </div>
    )
}

export default AddPost;
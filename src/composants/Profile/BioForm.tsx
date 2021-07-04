import React from 'react'

export interface PersonQualification {
    Skilllabel : string;
    profession : string;
}
export interface PersonLocation {
    road : string;
    zip_code : number;
    city : string;
}
export interface PersonProps {
    name : {firstName : string, lastName : string};
    birthDate : Date;
    address : PersonLocation;
    phone_number : number;
    mail : string;
    description: string;
    profilPicture? : any;
    password : string;
    qualification : PersonQualification;
}


function BioForm({name, birthDate, address, phone_number, mail, description, password, qualification} : PersonProps) {
    return (
        <div>
            
        </div>
    )
}

export default BioForm


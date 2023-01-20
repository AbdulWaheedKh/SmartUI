
// import { Profile } from './profile.model';

import { Profile } from "./profileModel";

export class Institute {
    id: number;
    parentId: number;
    instituteName: String;
    instituteCode: String;
    phoneNumber: String;
    emailId: String;
    address: String;
    url:String
    profile: Profile;
    createdDate :Date;
    modifiedDate: Date;
    deleted: boolean;

/**
 * 
 * @param obj 
 */
    constructor(obj=null) {
        
        this.id = (obj==null)?null:obj.id; 
        this.parentId = (obj==null)?null:obj.parentId; 
        this.profile = (obj==null)?new Profile(null):obj.profile; 
        this.instituteName = (obj==null)? '':obj.instituteName;
        this.instituteCode = (obj==null)?'':obj.instituteCode ;
        this.phoneNumber = (obj==null)?'':obj.phoneNumber ;
        this.emailId = (obj==null)?'':obj.emailId ;
        this.url = (obj==null)?'':obj.url ;
        this.address = (obj==null)?'':obj.address ;
        this.createdDate = (obj == null) ? '' : obj.createdDate;
        this.modifiedDate = (obj == null) ? '' : obj.modifiedDate;
        this.deleted = (obj==null)?0:obj.deleted;
 
    }
}

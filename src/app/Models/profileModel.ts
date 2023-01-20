// import { Institute } from './institute.model';


export class Profile {
    id: number;
    firstName: String;
    lastName: String;
    mobileNoParent:String;
    gender:String;
    // genderOption: OptionValue;
    dob: Date;
    cnic: String;
    isGuardian: boolean;
    occupation: String;
    emailId: String;
    phoneNoHome: String;
    phoneNoPersonal: String;
    phoneNoOffice: String;
    emergencyContactNumber: String;
    emergencyContactName: String;
    postCode: String;
    city: String;
    createdDate: Date;
    modifiedDate: Date;
    homeAddress: String;
    workAddress: String;
    fullName:String;
   



    constructor(profile?) {

        profile = profile || {};
        this.id = profile.id;
        this.firstName = profile.firstName || '';
        this.lastName = profile.lastName || '';
        this.mobileNoParent = profile.mobileNoParent || '';
        this.gender = profile.gender || '';
        this.dob = profile.dob || '';
        this.cnic = profile.cnic || '';
        this.isGuardian = profile.isGuardian || '';
        this.occupation = profile.occupation || '';
        this.emailId = profile.emailId || '';
        this.phoneNoHome = profile.phoneNoHome || '';
        this.phoneNoPersonal = profile.phoneNoPersonal || '';
       
        this.phoneNoOffice = profile.phoneNoOffice || '';
        this.emergencyContactNumber = profile.emergencyContactNumber || '';
        this.emergencyContactName = profile.emergencyContactName || '';
        this.postCode = profile.postCode || '';
        this.city = profile.city || '';
        this.createdDate = profile.createdDate || '';
        this.modifiedDate = profile.modifiedDate || '';
        this.homeAddress = profile.homeAddress || '';
        this.workAddress = profile.workAddress || '';
        // this.genderOption = new OptionValue(profile.genderOption);
        this.fullName = this.fullName || ''; 

    }

}

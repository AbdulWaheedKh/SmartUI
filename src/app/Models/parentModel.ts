
import { AppConstants } from '../Utility/AppConstants';
import { Account } from './AccountModel';
import { Institute } from './instituteModel';
// import { Account } from './account.model';


import { Profile } from './profileModel';


export class Parent {
    id: Number;

    isGuardian: boolean;
    occupation: String;
    deleted: boolean;
    childRelationship: String;
    // whatsAppOption: OptionValue;
    otherNotes: String;
    // photographPermissionsOption: OptionValue;

    profile: Profile;
    institute: Institute;
    account: Account;

    loginAccountFlag:boolean = false; 



    /**
     * Constructor
     *
     * @param parent
     */
    constructor(parent?) {

        parent = parent || {};
        this.id = parent.id;
        this.isGuardian = parent.isGuardian || '';
        this.occupation = parent.occupation || '';
        // this.whatsAppOption = new OptionValue(parent.whatsAppOption);
        this.childRelationship = parent.childRelationship || '';
        this.otherNotes = parent.otherNotes || '';
        // this.photographPermissionsOption = new OptionValue(parent.photographPermissionsOption);
        this.deleted = parent.deleted || '';
        this.profile = new Profile(parent.profile);
        this.institute = new Institute(parent.Institute);
        this.loginAccountFlag = (parent==null || parent.acount==null)?false:true; 
        if (parent == null || parent.institute == null) {
            this.institute.id = AppConstants.INSTITUTE_ID;
        }
        if(parent == null || parent.account == null)
        {
            this.account = new Account();
            this.account.role.id = AppConstants.ROLE_ID_PARENT;
        }
        else
        {
            this.account = parent.account;
        }
        // this.account = new Account(parent.account);


    }
}

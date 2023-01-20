// import { Institute } from './institute.model';
// import { AppConstants } from 'app/app.constant';
// import { Role } from './role.model';
// import { AccountStatus } from './account-status.model';
// import { AccountType } from './account-type.model';
import { AppConstants } from '../Utility/AppConstants';
import { AccountType } from './AccountTpeModel';
import { Role } from './RoleModel';

export class Account{
    id:number;
    userName:string;
    password: String;
    confirmPassword: string;
    online: boolean;
    enabled: boolean;
     accountType: AccountType;
    instituteId: number;
    token: String;
    //  accountStatus: AccountStatus;
 
   
    role : Role;
    /**
     * 
     * @param account 
     */
    constructor(account?)
    {
        account = account || {};
        this.token = account.token || '';
        this.id = account.id || null ;
        this.userName = account.userName || '';
        this.password =  account.password || ''; 
        this.online =  account.online || '';
        this.enabled = account.enabled || '';
        this.accountType = account.accountType || new AccountType(null);
        this.confirmPassword = account.confirmPassword || '';

        // this.role = account.role || new Role(null);
        // this.accountStatus = account.accountStatus || new AccountStatus(null);
      //  this.institute = account.institute ||  new Institute(null);
        this.instituteId = account.instituteId ||AppConstants.INSTITUTE_ID; //@todo , update it later... 

    }
}
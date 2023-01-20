export class Role{
    id:number;
    description:string;
    modifiedDate = Date;
    createdDate = Date;
    modifiedBy:number;
   
    /**
     * 
     * @param role 
     */
    constructor(role?)
    {
        role = role || {};
        this.id = role.id || null ;
        this.description = role.description || '';
        this.modifiedDate =  role.modifiedDate ||  '';
        this.createdDate =  role.createdDate || '';
        this.modifiedBy = role.modifiedBy || '';
    }
}
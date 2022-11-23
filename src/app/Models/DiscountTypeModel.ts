

export class DiscountType {

    id: number;
    instituteId: number;
    academicYearId: number;
    name: string;
    description: string;
    createdDate: Date;
    modifiedDate: Date;
    deleted: boolean;

    // constructor(obj = null) {

    //     this.id = (obj == null) ? null : obj.id;
    //     this.name = (obj == null) ? '' : obj.name;
    //     this.description = (obj == null) ? '' : obj.description;
    //     this.instituteId = AppConstants.INSTITUTE_ID; //@todo , update it later...
    //     this.createdDate = (obj == null) ? '' : obj.createdDate;
    //     this.modifiedDate = (obj == null) ? '' : obj.modifiedDate;
    //     this.deleted = (obj == null) ? 0 : obj.deleted;

    // }
}
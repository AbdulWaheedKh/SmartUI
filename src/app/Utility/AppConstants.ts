
//API URL's
export class AppConstants{
    
    public static URL_BASE = 'http://localhost:8082/smartSchool/';

/*  CRUD DISCOUNT TYPE  11-30-2022   */

public static GET_DISCOUNT_ALL      =   AppConstants.URL_BASE +'institute/32/dicountTypes';
public static CREATE_DISCOUNT       =    AppConstants.URL_BASE +'discountTypesController/';
public static DEL_DISCOUNT_BY_ID    = AppConstants.URL_BASE +'discountTypesController/';
public static UPDATE_DISCOUNT_BY_ID = AppConstants.URL_BASE +'discountTypesController/updateDiscountType/';

/*  END DISCOUNT TYPE  */


/*  CRUD AY 11-30-2022   */

public static GET_AY_ALL =   AppConstants.URL_BASE +'institute/32/academicSessionYears';
public static CREATE_AY =    AppConstants.URL_BASE +'academicSessionController/';
public static DEL_AY_BY_ID = AppConstants.URL_BASE +'academicSessionController/';
public static UPDATE_AY_BY_ID = AppConstants.URL_BASE +'academicSessionController/';

/*  END AY  */


/*  CRUD AY 11-30-2022   */

public static GET_ClassCategory_ALL =   AppConstants.URL_BASE +'institute/32/ClassCategory';
public static CREATE_ClassCategory =    AppConstants.URL_BASE +'classCategoryController/';
public static DEL_ClassCategory_BY_ID = AppConstants.URL_BASE +'classCategoryController/';
public static UPDATE_ClassCategory_BY_ID = AppConstants.URL_BASE +'classCategoryController/';



public static CREATE_PARENT      =    AppConstants.URL_BASE +'parentController/';



/*  END Class Category  */
public static INSTITUTE_ID = 32;
public static ROLE_ID_PARENT = 33;


}
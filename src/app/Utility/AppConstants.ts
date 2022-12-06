
//API URL's
export class AppConstants{
    
    public static URL_BASE = 'http://localhost:8081/smartSchool/';

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

}
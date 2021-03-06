/**
 * Created by saint on 7/23/14.
 */

var api = {
    method:'jingdong.ware.product.catelogy.list.get',
    authorization:false,
    check:{
        catelogyId :{
            type:'Number',
            required:true
        },
        level:{
            type:'Number',
            required:true
        },
        isIcon :{
            type:'Boolean',
            required:true
        },
        isDescription :{
            type:'Boolean',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;
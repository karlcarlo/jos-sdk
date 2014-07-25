/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.imgzone.picture.update',
    authorization:true,
    check:{
        picture_id:{
            type:'String',
            required:true
        },
        picture_name:{
            type:'String',
            required:false
        },
        parent_cate_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;
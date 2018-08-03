const models = require('../models');

exports.new_post = function (req, res, next) {
    try {
        res.render('posts/new_post');
    }
    catch (e) {
        next(e);
    }
};

exports.submit_post = async function (req, res, next) {
    try {
        console.log('hehehehehehe.........')

        let params = req.body;
        console.log(req.files)
        console.log('pppppppppp')
        // let content_thread = await res.locals.member.getContentThread();
        // params['ContentThreadId'] = content_thread.id;
        // params['MemberId'] = res.locals.member.id;
        // let [p, error] = await models.post.createDraft(params);
        // if(p){
        //
        // }
        // res.render('posts/submit_post', {p: p, error: error, layout: false})
    }
    catch (e) {
        console.log(e)
        console.log('errrr......')
        next(e);
    }
};
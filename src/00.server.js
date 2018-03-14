/**
 * @file
 * @author zhaorong (zhaorong01@baidu.com)
 * @date 2018/03/13
 */

const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();
const router = new Router();

const upload = multer({dest: 'static'});
router.post('/upload', upload.single('myvideo'), async (ctx) => {
    //originalname 文件名称，path上传后文件的临时路径，mimetype文件类型
	const {originalname, path, mimetype} = ctx.req.file;
	//之后可以对文件进行上出上传到七牛等操作，完成操作后
	// fs.unlink(path)//删除文件
})

router.get('/', async (ctx, next) => {
    ctx.body = 'hello koa2';
    console.log(11);
});

router.get('/tologin', async (ctx, next) => {
    ctx.body = {
        errno: 0,
        data: {
            showGradeUpdate: 1
        }
    };
});

// curl -X POST -H 'Cookie: BDUSS=aaa' -H 'X-ik-token: xxx'  http://localhost:8090/login
router.post('/login', async (ctx, next) => {
    console.log('------');
    ctx.body = 'login page';
});



app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090, 'localhost');

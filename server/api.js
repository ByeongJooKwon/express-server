const router = require('express').Router();
const wallet = require('./routers/wallet.router');

// ���Ʈ ��� ����
const RouterType = {
    wallet
};
router.get('/:page/:proc', (req , res) => {
    if(RouterType[req.params.page]) {
        RouterType[req.params.page](req,res);
    }
});

router.post('/:page/:proc', (req, res) => {
    if (RouterType[req.params.page]) {
        RouterType[req.params.page](req, res);
    }
});

module.exports = router;

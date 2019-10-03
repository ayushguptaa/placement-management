var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
                        title: 'Placement management portal',
                        login_options: [{
                          login_type:'Student'
                        },{
                          login_type:'Company'
                        },{
                          login_type:'Admin'
                        },
                        ]
                      }
            );
});

module.exports = router;

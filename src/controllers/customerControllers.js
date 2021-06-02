const controller = {};


controller.index = (req,res) =>{
    res.render('index');
};

controller.map = (req,res) =>{
    res.render('map');
};

controller.foro = (req,res) =>{
    res.render('foro');
};


controller.chatbot = (req,res) =>{
    res.render('chatbot');
};

controller.login = (req,res) =>{
    res.render('login');
};

controller.list = (req, res) => {
    req.getConnection((err,conn) =>{
        conn.query('select * from  pruebacrud',(err,customers) => {
            if (err){
                res.json(err);
            }
            console.log(customers);
            res.render('customers',{
                data: customers
            });
        });
    });
};

controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('insert into pruebacrud set ?', [data],(err,customer) =>{
            console.log(customer);
            res.redirect('/');
        })
    });
};

controller.edit = (req,res) =>{
    const {id} = req.params;
    req.getConnection((err,conn) =>{
        conn.query("select * from pruebacrud where id = ?",[id],(err,customer) =>{
            console.log(customer);
            res.render('customer_edit',{
                data: customer[0]
            }); 
        });
    }); 
};

controller.update = (req,res) =>{
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn) =>{
        conn.query('update pruebacrud set ? where id = ?', [newCustomer,id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req,res) =>{
    const {id} = req.params;
    req.getConnection((err,conn) =>{
       conn.query('Delete from pruebacrud where id = ?',[id],(err,customer) =>{
            res.redirect('/');
       });
    });
};

module.exports = controller;
const controller = {};


controller.index = (req,res) =>{
    res.render('viewindex/index');
};

controller.map = (req,res) =>{
    res.render('viewindex/map');
};

controller.foro = (req,res) =>{
    req.getConnection((err,conn) =>{
        conn.query('select * from  publicaciones',(err,publications) => {
            if (err){
                res.json(err);
            }
            console.log(publications);
            res.render('viewindex/foro',{
                data: publications
            });
        });
    });
};


controller.chatbot = (req,res) =>{
    res.render('viewindex/chatbot');
};

controller.formlogin = (req,res) =>{
    res.render('formlogin');
};

controller.login = (req,res) =>{
    const user = req.body;
    req.getConnection((err,conn) =>{
        conn.query("select * from usuarios where nickname = ? ",[user.user],(err,customer) =>{
            conn.query("select * from usuarios where password = ? ",[user.password],(err,customer) =>{
                if(Object.keys(customer).length == 0){
                    res.render("formlogin");
                }else{
                    console.log(customer);
                    res.render("viewindex/index.ejs",{
                        data: customer
                    });
                }
            });
        });
    }); 
};

controller.add_publicacion = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('insert into publicaciones set ?', [data],(err,publicacion) =>{
            console.log(publicacion);
            res.redirect('foro');
        })
    });
};


///////////////////////////////////////////////////////////////

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
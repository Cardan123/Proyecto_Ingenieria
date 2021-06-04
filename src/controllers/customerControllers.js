const controller = {};


controller.init = (req,res) =>{
    req.session.data = {};
    res.render('index',{
        data: req.session.data
    });
};


controller.index = (req,res) =>{
    const user = req.session.data;
    console.log(req.session.data);
    res.render('index',{
        data: user 
    });
};

controller.map = (req,res) =>{
    res.render('map', {
        data: req.session.data  
    });
};

controller.foro = (req,res) =>{
    req.getConnection((err,conn) =>{
        conn.query('select * from  publicaciones',(err,publications) => {
            if (err){
                res.json(err);
            }
            console.log(publications);
            res.render('foro',{
                data: req.session.data,
                publi: publications
            });
        });
    });
};


controller.chatbot = (req,res) =>{
    res.render('chatbot',{
        data: req.session.data  
    });
};

controller.formlogin = (req,res) =>{
    res.render('formlogin');
};

controller.login = (req,res) =>{
    const user = req.body;
    console.log(user.nickname);
    console.log(user.password);
    req.getConnection((err,conn) =>{
        conn.query("select * from usuarios where nickname = ? and password = ?",[user.nickname,user.password],(err,customer_nickname) =>{
                if(Object.keys(customer_nickname).length == 0){
                    res.render("formlogin");
                }else{
                    console.log(customer_nickname);
                    const {id,nickname,password,type} = customer_nickname[0];
                    req.session.data = {id,nickname,password,type} ;
                    console.log(req.session.data);
                    res.render("index.ejs",{
                        data: req.session.data
                    });
                }
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

controller.salir = (req,res) =>{
    req.session.data = {};
    res.render('index',{
        data: req.session.data
    });
};

controller.edit_publicacion = (req,res) =>{
    const {id} = req.params;
    req.getConnection((err,conn) =>{
        conn.query("select * from publicaciones where id = ?",[id],(err,customer) =>{
            console.log(customer);
            res.render('formedit',{
                data: req.session.data,
                publi: customer[0]
            }); 
        });
    }); 
};

controller.update_publicacion = (req,res) =>{
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn) =>{
        conn.query('update publicaciones set ? where id = ?', [newCustomer,id], (err, rows) => {
            conn.query('select * from  publicaciones',(err,publications) => {
                if (err){
                    res.json(err);
                }
                console.log(publications);
                res.render('foro',{
                    data: req.session.data,
                    publi: publications
                });
            });
        });
    });
};

controller.delete_publicacion = (req,res) =>{
    const {id} = req.params;
    req.getConnection((err,conn) =>{
       conn.query('Delete from publicaciones where id = ?',[id],(err,customer) =>{
            conn.query('select * from  publicaciones',(err,publications) => {
                if (err){
                    res.json(err);
                }
                console.log(publications);
                res.render('foro',{
                    data: req.session.data,
                    publi: publications
                });
            });
       });
    });
};


controller.formnewuser = (req,res) =>{
    res.render("formnewuser");
};

controller.insertusuario = (req,res) =>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('insert into usuarios set ?', [data],(err,customer) =>{
            console.log(customer);
            res.render('formlogin');
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
            res.redirect('/register');
       });
    });
};

module.exports = controller;
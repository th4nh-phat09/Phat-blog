
class NewConntroller{
    index(req, res){
        res.render('new');
    };

    show(req, res){
        res.send('NEW DETAILSS!!!!!');
    };


}
export const newController = new NewConntroller();



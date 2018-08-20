const expect=require('expect');
const{Users}=require('./users');


describe('Users',()=>{

    beforeEach('Users',()=>{
        users=new Users();
        users.users=[{
            id:'1',
            name:'Avishek',
            room:'A'
        },{
            id:'2',
            name:'Avi',
            room:'B'
        },{
            id:'3',
            name:'Avish',
            room:'A'
        }]
    });

    it('Should add new user',()=>{
        var users=new Users();
        var user={
                id:'123',
                name:'Avishek',
                room:'A'      
        } 
        var reUser=users.addUser(user.id,user.name,user.room)

        expect(users.users).toEqual([user]);

    });
    it('should remove user',()=>{
        var userId='1';
        var user=users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });it('should not remove user',()=>{
        var userId='99';
        var user=users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
    it('should find user',()=>{
        var userId='2';
        var user=users.getUser(userId);
        
        expect(user.id).toBe(userId);
    });
    it('should not find user',()=>{
        var userId='99';
        var user=users.getUser(userId);
        
         expect(user).toNotExist();
    });


    it('should return names for A',()=>{
        var userList=users.getUserList('A');
        
        expect(userList).toEqual(['Avishek','Avish']);
    });

    it('should return names for B',()=>{
        var userList=users.getUserList('B');
        
        expect(userList).toEqual(['Avi']);
    });
});
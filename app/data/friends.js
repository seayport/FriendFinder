// ===============================================================================
// DATA
// Below data will hold all of Users of FriendFinder 
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsArray = [
{
    "name": "Ahmed",
    "photo": "http://1.bp.blogspot.com/-6nITuLchAng/VNUUezC2nXI/AAAAAAAAIsE/tZhXOnDtC3o/s1600/0_480_640_0_70_-News-20110311113302_FaceBook.jpg",
    "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]

	}
];
    
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;





var images = 
["https://i.postimg.cc/QMqksv9T/My-Family-book-2.png",
"https://i.postimg.cc/QNK9JR8J/Mamma.png",
"https://i.postimg.cc/5yfNqF7T/dundu.png",
"https://i.postimg.cc/9MC2wwQk/Sister-2.png",
"https://i.postimg.cc/3RH6bMM0/Pappa-2.png",
"https://i.postimg.cc/KjmBkjnv/MAMa.jpg",
"https://i.postimg.cc/FznzrHp6/Atte.jpg"];

var names = 
["Family Book",
 "Mom : Shruthi", 
 "Myself : Dundubi Raaj", 
 "My Sister : Shravya Raaj", 
 "Dad : Rajashekhar", 
 "Uncle : Lohith", 
 "Aunt : Priyanka"]

 var i = 0;

 function update() {

    i++;

    var family_mem_num = 6; 

    if (i>family_mem_num) {
        i=0;
    }

    var updated_img = images[i];
    var updated_name = names[i];

    document.getElementById("img").src = updated_img;
    document.getElementById("names").innerHTML = updated_name;
 }
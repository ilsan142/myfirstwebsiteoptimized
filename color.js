var Body ={
    setcolor:function (color){
        // document.querySelector('body').style.color=color;
        $('body').css('color',color);
    },
    setbackgroundcolor:function (color){
        // document.querySelector('body').style.backgroundColor =color;
        $('body').css('backgroundColor', color);
    }
}

var Links ={
    setColor:function (color){
    //     var alist = document.querySelectorAll('a');
    //     var i = 0;
    // while(i< alist.length){
    //     console.log(alist[i]);
    //     alist[i].style.color = color
    //     i=i+1;
    //     }
    $('a').css('color', color);
    }
}
function LinkssetColor(color){
// var alist = document.querySelectorAll('a');
// var i = 0;
// while(i< alist.length){
//     console.log(alist[i]);
//     alist[i].style.color = color
//     i=i+1;
//     }
    $('a').css('Color', color);
}
function nightDayhandler(self){
target = document.querySelector('body')
if(target.dataset.mode ==='day'){
    Body.setbackgroundcolor('black');
    target.dataset.mode='night';
    self.value = 'day';
    Body.setcolor('white')
    Links.setColor('powderblue')
} else {
    Body.setbackgroundcolor('white');
    target.dataset.mode='day';
    self.value = 'night'
    Body.setcolor('black');
    Links.setColor('blue')
}
}

